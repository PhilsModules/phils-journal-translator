import { TranslationAssistant } from './TranslationApp.js';
import { MODULE_ID } from './TranslationLogic.js';

Hooks.once('init', () => {
    game.settings.register(MODULE_ID, 'aiProvider', {
        name: "AI Provider",
        hint: "Select the AI provider you want to use.",
        scope: 'client',
        config: true,
        type: String,
        default: 'gemini',
        choices: { 'gemini': 'Google Gemini', 'chatgpt': 'ChatGPT', 'claude': 'Anthropic Claude', 'copilot': 'Microsoft Copilot', 'perplexity': 'Perplexity AI' }
    });
    game.settings.register(MODULE_ID, 'gameSystem', {
        name: "Game System",
        hint: "The game system you are playing (e.g. Pathfinder 2e, D&D 5e). Used for context.",
        scope: 'world',
        config: true,
        type: String,
        default: 'Pathfinder 2e'
    });

    game.settings.register(MODULE_ID, 'batchSize', {
        name: "Batch Size",
        hint: "Number of pages to select automatically for translation batches.",
        scope: 'client',
        config: true,
        type: Number,
        default: 10
    });
});

Hooks.on('renderJournalDirectory', async (app, html) => {
    const element = html instanceof HTMLElement ? html : html[0];
    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("ai-translation-btn");
    button.innerHTML = `<i class="fas fa-language"></i> ${game.i18n.localize("AIASSISTANT.UI.Title")}`;

    // Add some basic styling to the button to make it look good
    // Removed custom styling to match Foundry VTT theme
    // button.style.flex = "0 0 auto";
    // button.style.width = "auto";
    // button.style.height = "30px";
    // button.style.lineHeight = "30px";
    // button.style.margin = "0 0 5px";
    // button.style.padding = "0 10px";
    // button.style.background = "linear-gradient(90deg, #1c87e5, #8a3ab9)";
    // button.style.color = "white";
    // button.style.border = "1px solid #444";
    // button.style.borderRadius = "3px";
    // button.style.cursor = "pointer";
    // button.style.fontSize = "13px";

    button.addEventListener("click", event => {
        event.preventDefault();
        new TranslationAssistant().render(true);
    });

    let headerActions = element.querySelector(".header-actions");
    if (headerActions) headerActions.append(button);
    else element.append(button);
});
