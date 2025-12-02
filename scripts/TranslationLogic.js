export const MODULE_ID = 'phils-journal-translator';

export function formatString(str, data = {}) {
    if (!str) return "";
    if (Array.isArray(str)) str = str.join("\n");
    for (const [k, v] of Object.entries(data)) {
        str = str.replace(new RegExp(`{${k}}`, 'g'), v || "");
    }
    return str;
}

export const loc = (key, data = {}) => {
    const i18nKey = `AIASSISTANT.UI.${key}`;
    if (game.i18n.has(i18nKey)) return game.i18n.format(i18nKey, data);
    return key;
};

export function resolvePrompt(key, data) {
    const i18nKey = `AIASSISTANT.Prompts.${key}`;
    let rawText = foundry.utils.getProperty(game.i18n.translations, i18nKey);
    if (!rawText && game.i18n._fallback) {
        rawText = foundry.utils.getProperty(game.i18n._fallback, i18nKey);
    }
    if (!rawText) rawText = game.i18n.localize(i18nKey);
    if (!rawText || rawText === i18nKey) return "";
    return formatString(rawText, data);
}

export function getCleanData(doc, sendFull, allowedPageIds = null) {
    const rawData = doc.toObject();
    delete rawData._stats; delete rawData.ownership; delete rawData.flags; delete rawData.sort; delete rawData.folder;

    if (doc.documentName === "JournalEntry" && rawData.pages && allowedPageIds) {
        rawData.pages = rawData.pages.filter(p => allowedPageIds.includes(p._id));
    }

    if (doc.type === "spellcastingEntry" && doc.parent) {
        const associatedSpells = doc.parent.items.filter(i => i.type === "spell" && i.system.location?.value === doc.id);
        rawData.containedSpells = associatedSpells.map(s => { return { name: s.name, level: s.system.level?.value }; });
    }
    if (!sendFull) {
        delete rawData.prototypeToken; delete rawData.img; delete rawData.thumb;
        if (doc.documentName === "Actor" || doc.documentName === "Item") {
            if (rawData.items && Array.isArray(rawData.items)) {
                rawData.items = rawData.items.map(i => {
                    const clean = { ...i };
                    if (clean.system?.description?.value) clean.system.description.value = "";
                    return clean;
                });
            }
        }
    }
    return rawData;
}

export function getContextDescription(doc, rawData) {
    let desc = "";
    if (rawData.system?.description?.value) desc = rawData.system.description.value;
    else if (rawData.system?.details?.biography?.value) desc = rawData.system.details.biography.value;
    else if (rawData.system?.details?.publicNotes) desc = rawData.system.details.publicNotes;
    else if (doc.documentName === "JournalEntry" && rawData.pages) desc = rawData.pages.map(p => p.text?.content || "").join("\n\n");
    if (rawData.containedSpells && rawData.containedSpells.length > 0) {
        desc += "\n\n--- ENTHALTENE ZAUBER (Liste) ---\n" + rawData.containedSpells.map(s => `- ${s.name} (Level ${s.level || 1})`).join("\n");
    }
    let clean = desc.replace(/<[^>]*>?/gm, '').trim();
    return clean ? clean.substring(0, 8000) : "(No description found)";
}

export function getGlossaryContent() {
    const glossaryJournal = game.journal.find(j =>
        j.name === "AI Glossary" || j.name === "AI Glossar"
    );
    if (!glossaryJournal) return null;
    let content = "";
    glossaryJournal.pages.forEach(page => {
        if (page.type === "text") content += page.text.content + "\n";
    });
    let cleanContent = content.replace(/<[^>]*>?/gm, '').trim();
    return cleanContent.substring(0, 5000);
}

export async function processUpdate(doc, rawText) {
    const jsonMatches = [...rawText.matchAll(/```json\s*([\s\S]*?)\s*```/gi)];
    let translationJson = null;
    let newGlossaryItems = null;
    let glossaryJournalJson = null;

    if (jsonMatches.length > 0) {
        for (const match of jsonMatches) {
            try {
                const json = JSON.parse(match[1]);
                if (Array.isArray(json)) {
                    // Legacy/Fallback: Array of terms
                    if (json.length === 0 || (json[0].original && json[0].translation)) {
                        newGlossaryItems = json;
                    }
                } else if (json.name === "AI Glossary Update" && json.newTerms && Array.isArray(json.newTerms)) {
                    // New Standard: Named Object for Glossary Update
                    newGlossaryItems = json.newTerms;
                } else if (json.name === "AI Glossary" || json.name === "AI Glossar") {
                    // New Glossary Journal Object
                    glossaryJournalJson = json;
                } else if (json.pages || json.items || json.system || json.name) {
                    // Likely the translation update
                    translationJson = json;
                }
            } catch (e) {
                console.warn("Failed to parse a JSON block:", e);
            }
        }
    } else {
        // Fallback for single block without code fences (legacy support or bad AI output)
        const firstBrace = rawText.indexOf('{');
        const lastBrace = rawText.lastIndexOf('}');
        if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
            try {
                const json = JSON.parse(rawText.substring(firstBrace, lastBrace + 1));
                if (json.name === "AI Glossary" || json.name === "AI Glossar") glossaryJournalJson = json;
                else translationJson = json;
            } catch (e) { }
        }
    }

    if (!translationJson && !glossaryJournalJson) {
        return loc('ErrorJsonInvalid') || "No valid Translation JSON found in response. (Missing ```json blocks?)";
    }

    try {
        // Handle New Glossary Creation (from TranslateAndCreateGlossary)
        // Handle New Glossary Creation OR Update
        if (glossaryJournalJson) {
            const existing = game.journal.find(j => j.name === "AI Glossary" || j.name === "AI Glossar");
            if (existing) {
                // Glossary exists: Extract terms from the returned JSON to update it
                const page = glossaryJournalJson.pages?.find(p => p.type === "text");
                if (page && page.text?.content) {
                    let extractedTerms = extractTermsFromHtml(page.text.content);

                    // Filter out terms that already exist in the glossary
                    const existingPage = existing.pages.find(p => p.type === "text");
                    if (existingPage && existingPage.text?.content) {
                        const currentTerms = extractTermsFromHtml(existingPage.text.content);
                        const currentTermSet = new Set(currentTerms.map(t => t.original.toLowerCase().trim()));

                        extractedTerms = extractedTerms.filter(t => !currentTermSet.has(t.original.toLowerCase().trim()));
                    }

                    if (extractedTerms.length > 0) {
                        newGlossaryItems = (newGlossaryItems || []).concat(extractedTerms);
                    }
                }

                // Only warn if we are purely in "Create Glossary" mode (no translation) AND found no new terms
                if (!translationJson && (!newGlossaryItems || newGlossaryItems.length === 0)) {
                    ui.notifications.warn(loc('ErrorGlossaryExists') || "AI Glossary already exists!");
                }
            } else {
                await JournalEntry.create(glossaryJournalJson);
                ui.notifications.info(loc('InfoGlossaryCreated') || "Neues Journal 'AI Glossary' erfolgreich erstellt!");
            }

            // If we ONLY got a glossary and handled it (either created or extracted terms), return success
            if (!translationJson) {
                return { success: true, newGlossaryItems: newGlossaryItems };
            }
        }

        // Handle Translation Update
        if (translationJson) {
            const jsonData = translationJson;
            delete jsonData._id;

            if (doc.documentName === "JournalEntry" && jsonData.pages && jsonData.name !== "AI Glossary") {
                try {
                    await doc.clone({ name: `${doc.name} (Backup)` }, { save: true });
                    ui.notifications.info(loc('BackupCreated', { name: doc.name }) || `Backup created: "${doc.name} (Backup)"`);
                } catch (err) {
                    console.warn("Backup creation failed:", err);
                }
            }

            if ((doc.documentName === "Actor" || doc.documentName === "Item") && jsonData.items && Array.isArray(jsonData.items)) {
                jsonData.items = jsonData.items.map(newItem => {
                    if (!newItem._id && doc.items) { console.warn(`AI Assistant | Safety: Item without ID skipped.`); return null; }
                    if (doc.items) {
                        const original = doc.items.get(newItem._id);
                        if (original && (newItem.system?.description?.value === "" || newItem.system?.description?.value === null)) {
                            if (newItem.system && newItem.system.description) delete newItem.system.description;
                        }
                    }
                    return newItem;
                }).filter(i => i !== null);
            }

            if (doc.documentName === "JournalEntry" && jsonData.pages && Array.isArray(jsonData.pages)) {
                jsonData.pages = jsonData.pages.map(newPage => {
                    if (newPage._id) {
                        newPage.flags = newPage.flags || {};
                        newPage.flags[MODULE_ID] = { aiProcessed: true };
                    }
                    return newPage;
                });
            }

            if (jsonData.type && jsonData.type !== doc.type) ui.notifications.warn(loc('WarnTypeChange') || `Achtung: Type-Change!`);
            await doc.update(jsonData);
            ui.notifications.success(loc('Success', { docName: doc.name }));
        }

        return { success: true, newGlossaryItems: newGlossaryItems };

    } catch (e) {
        console.error(e);
        return e.message;
    }
}

export async function addToGlossary(newItems) {
    const glossaryJournal = game.journal.find(j => j.name === "AI Glossary" || j.name === "AI Glossar");
    if (!glossaryJournal) {
        ui.notifications.warn(loc('WarnGlossaryNotFound') || "AI Glossary not found.");
        return;
    }

    // Find the text page (usually the first one or named "Glossary Terms")
    const page = glossaryJournal.pages.find(p => p.type === "text");
    if (!page) {
        ui.notifications.warn(loc('WarnGlossaryNoText') || "AI Glossary has no text page.");
        return;
    }

    let content = page.text.content;

    // 1. Extract existing terms
    let allTerms = extractTermsFromHtml(content);
    console.log(`AI Assistant | Found ${allTerms.length} existing terms.`);

    // 2. Merge new terms (filtering duplicates)
    const existingOriginals = new Set(allTerms.map(t => t.original.toLowerCase().trim()));
    let addedCount = 0;

    newItems.forEach(item => {
        const normalizedOriginal = item.original.toLowerCase().trim();
        if (!existingOriginals.has(normalizedOriginal)) {
            allTerms.push(item);
            existingOriginals.add(normalizedOriginal);
            addedCount++;
        }
    });

    if (addedCount > 0) {
        // 3. Sort alphabetically
        allTerms.sort((a, b) => a.original.localeCompare(b.original, undefined, { sensitivity: 'base' }));

        // 4. Reconstruct HTML
        // Try to find the existing list to replace it specifically, preserving pre/post content
        const ulStartMatch = content.match(/<ul[^>]*>/i);
        const ulEndIndex = content.lastIndexOf("</ul>");

        let preContent = "";
        let postContent = "";

        if (ulStartMatch && ulEndIndex > ulStartMatch.index) {
            preContent = content.substring(0, ulStartMatch.index);
            postContent = content.substring(ulEndIndex + 5);
        } else {
            // If no list found, use standard header or keep existing content if it doesn't look like a glossary
            if (content.trim().length === 0) {
                preContent = "<h1>Automatisches Glossar</h1><p>Denk bitte daran, dass dies automatisch übersetzte Begriffe sind. Prüfe bei Fehlern die Originalquelle.</p><hr>";
            } else {
                // Append to existing content if we couldn't find a list to replace
                preContent = content + "\n<hr>\n";
            }
        }

        const listHtml = "<ul>\n" + allTerms.map(t => `<li>${t.original} = ${t.translation}</li>`).join("\n") + "\n</ul>";
        const finalContent = preContent + listHtml + postContent;

        await page.update({ "text.content": finalContent });
        ui.notifications.info(loc('InfoTermsAdded', { count: addedCount }) || `Added ${addedCount} new terms to AI Glossary.`);
    } else {
        ui.notifications.info(loc('InfoNoNewTerms') || "No new unique terms to add.");
    }
}

function extractTermsFromHtml(htmlContent) {
    const terms = [];
    // Regex to find <li>Original = Translation</li>
    // Matches: <li...> (capture original) = (capture translation) </li>
    // Handles attributes in <li> and whitespace
    const regex = /<li[^>]*>\s*(.*?)\s*=\s*(.*?)\s*<\/li>/gi;
    const matches = [...htmlContent.matchAll(regex)];

    for (const match of matches) {
        let original = match[1].replace(/<[^>]*>/g, "").trim(); // Remove bold/italic tags if any
        let translation = match[2].replace(/<[^>]*>/g, "").trim();
        if (original && translation) {
            terms.push({ original, translation });
        }
    }
    return terms;
}
