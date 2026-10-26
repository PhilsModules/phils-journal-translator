<div align="center">

# Phil's Journal Translator

![Foundry v13 Compatible](https://img.shields.io/badge/Foundry-v13-brightgreen?style=flat-square) ![Foundry v12 Compatible](https://img.shields.io/badge/Foundry-v12-green?style=flat-square) ![License](https://img.shields.io/badge/License-GPLv3_%2F_CC_BY--NC--ND-blue?style=flat-square)
[![Version](https://img.shields.io/badge/Version-1.1.0-orange?style=flat-square)](https://github.com/PhilsModules/phils-journal-translator/releases) [![Patreon](https://img.shields.io/badge/SUPPORT-Patreon-ff424d?style=flat-square&logo=patreon)](https://www.patreon.com/PhilsModules)

<br>

**Automated AI Translation for Foundry VTT Journals (ChatGPT, Claude, Gemini, etc.)**
<br>
_Übersetze deine Foundry VTT Journale kostenlos mit KI._

<br>

<a href="#-english-instructions"><img src="https://img.shields.io/badge/%20-English_Instructions-black?style=for-the-badge&logo=united-kingdom&logoColor=white" alt="English Instructions"></a> <a href="#-deutsche-anleitung"><img src="https://img.shields.io/badge/%20-Deutsche_Anleitung-black?style=for-the-badge&logo=germany&logoColor=red" alt="Deutsche Anleitung"></a> <a href="Updates.md"><img src="https://img.shields.io/badge/%20-Update_Logs-black?style=for-the-badge&logo=clock&logoColor=white" alt="Updates"></a>

</div>

<br>

> [!NOTE]
> **A Quick Note / Hinweis in eigener Sache**
>
> 🇬🇧 **Hi everyone!**  
> A quick note before you start: I create these modules completely in my free time and offer them to the community for free. Since neither my partner nor I are professional graphic designers, translators, or full-time developers, maintaining these projects takes a huge amount of effort. To make these modules possible in this form, I use assistance from artificial intelligence, especially for translations and visual elements. Hiring professional designers or translators is simply something I cannot afford out of pocket.
> 
> Because of Foundry VTT's guidelines regarding artificial intelligence, several of my modules (such as *Phil's Day and Night Cycle*, *Phil's Console Doctor*, *Phil's PF2e RealDark*, and *Phil's Universal Translator*) have been removed from the official Foundry package listing. Even if a module is no longer listed there—or if others are removed in the future—do not worry: **the projects will continue!** You can always find all my modules, updates, releases, and manifest URLs directly here on [GitHub](https://github.com/PhilsModules) (see the [full module overview below](#-more-modules-by-phil--meine-weiteren-module)).
> 
> Thank you so much for your understanding and support!
> 
> ---
> 
> 🇩🇪 **Hallo zusammen!**  
> Ein kleiner Hinweis in eigener Sache, bevor ihr startet: Ich erstelle diese Module komplett in meiner Freizeit und stelle sie der Community kostenlos zur Verfügung. Da weder meine Lebensgefährtin noch ich Grafikdesigner, gelernte Übersetzer oder hauptberufliche Entwickler sind, ist die Pflege extrem aufwendig. Um die Module in dieser Form überhaupt anbieten zu können, nutze ich Unterstützung durch künstliche Intelligenz, zum Beispiel für Übersetzungen und grafische Elemente. Professionelle Designer oder Übersetzer kann ich mir privat schlicht nicht leisten.
> 
> Aufgrund der Richtlinien von Foundry VTT rund um künstliche Intelligenz wurden bereits mehrere meiner Module (wie z. B. *Phil's Day and Night Cycle*, *Phil's Console Doctor*, *Phil's PF2e RealDark* und *Phil's Universal Translator*) aus dem offiziellen Foundry-Verzeichnis entfernt. Auch wenn ein Modul dort nicht mehr gelistet ist – oder künftig noch weitere gelöscht werden sollten – müsst ihr euch keine Sorgen machen: **Das Projekt stirbt nicht!** Ihr findet alle meine Module, Updates, neue Versionen und Manifest-Links weiterhin direkt hier auf [GitHub](https://github.com/PhilsModules) (siehe die [komplette Modul-Übersicht weiter unten](#-more-modules-by-phil--meine-weiteren-module)).
> 
> Vielen Dank für euer Verständnis und eure Unterstützung!


<br>

> [!NOTE]
>
> ### ⚠️ System Agnostic / Systemunabhängig
>
> **English:** This module works with **any Foundry VTT system** (PF2e, D&D 5e, etc.) and uses the free web versions of AI providers. No API keys required.
>
> **Deutsch:** Dieses Modul funktioniert mit **jedem Foundry VTT System** (PF2e, D&D 5e, etc.) und nutzt die kostenlosen Web-Versionen der KI-Anbieter. Keine API-Keys notwendig.

<br>

---

<br>

# <img src="https://flagcdn.com/48x36/gb.png" width="28" height="21" alt="EN"> English Instructions

**Automated AI Translation for Foundry VTT Journals.**

This module allows you to translate **large adventure modules** or long texts in Foundry VTT quickly and consistently. It acts as an intelligent "Prompt Engineer" for Gemini, ChatGPT, Claude, and more.

## 🚀 Features

- **System Agnostic:** Works with any Foundry VTT system (PF2e, D&D 5e, etc.).
- **No API Costs:** Works with the free web versions of Gemini, ChatGPT, Claude, Copilot, and Perplexity.
- **Batch Translation:** Translate multiple pages or entire journals at once.
- **Glossary Support:** Automatically generates and maintains a glossary to ensure consistent naming across all your documents.
- **Smart Paste:** Automatically detects and extracts the correct JSON code block from the AI response.
- **Safety First:** Automatically creates a **Backup** of your Journal before applying any changes.
- **Context-Aware:** Preserves HTML formatting, links, and structure.
- **Multi-Provider Support:** Optimized prompts for all major AI providers.

## 📦 Installation

1.  Open Foundry VTT.
2.  Go to the **Add-on Modules** tab.
3.  Click **Install Module**.
4.  Paste the following **Manifest URL** into the field:
    ```text
    https://github.com/PhilsModules/phils-journal-translator/releases/latest/download/module.json
    ```
5.  Click **Install**.

## 📖 How to Use

1.  **Open the Translator:** Go to the Journal Directory and click the **"Journal Translator"** button.
2.  **Select Content:** Choose the Journal and Pages you want to translate.
3.  **Generate Prompt:** The module generates an optimized prompt. Click **"Copy Prompt"**.
4.  **AI Magic:** Paste the prompt into Gemini/ChatGPT and copy the **entire response**.
5.  **Update:** Click **"Paste"** in Foundry and then **Update Journal**.

<br>

---

<br>

# <img src="https://flagcdn.com/48x36/de.png" width="28" height="21" alt="DE"> Deutsche Anleitung

**Übersetze deine Foundry VTT Journale kostenlos mit KI.**

Phil's Journal Translator verbindet deine Foundry VTT Welt mit der Power moderner KI. Das Besondere: **Du brauchst keine teuren API-Keys!** Das Modul arbeitet als intelligenter "Prompt-Engineer" für die kostenlosen Web-Versionen von Gemini, ChatGPT & Co.

## 🚀 Funktionen

- **Systemunabhängig:** Funktioniert mit jedem Foundry VTT System (PF2e, D&D 5e, etc.).
- **Kostenlos:** Nutze die Web-Interfaces der KI-Anbieter (keine API-Kosten).
- **Batch-Übersetzung:** Übersetze mehrere Seiten oder ganze Journale auf einmal.
- **Glossar-Support:** Erstellt automatisch ein Glossar für Namen und Begriffe, damit die Übersetzung über alle Seiten hinweg konsistent bleibt.
- **Smart Paste:** Du kannst die gesamte Antwort der KI kopieren. Das Modul filtert automatisch den JSON-Code heraus.
- **Sicher:** HTML-Formatierungen und Links bleiben erhalten.
- **Safety First:** Erstellt automatisch ein **Backup** (Kopie) deines Journals, bevor Änderungen angewendet werden.
- **Multi-Provider Support:** Optimierte Prompts für alle großen KI-Anbieter (Gemini, ChatGPT, Claude, etc.).

## 📦 Installation

1.  Öffne Foundry VTT.
2.  Gehe zum Reiter **Add-on Modules**.
3.  Klicke auf **Install Module**.
4.  Füge die folgende **Manifest URL** unten ein:
    ```text
    https://github.com/PhilsModules/phils-journal-translator/releases/latest/download/module.json
    ```
5.  Klicke auf **Install**.

## 📖 Bedienung

1.  **Translator öffnen:** Gehe in das Journal-Verzeichnis und klicke auf den **"Journal Translator"** Button.
2.  **Inhalt wählen:** Wähle das Journal und die Seiten aus, die du übersetzen möchtest.
3.  **Prompt generieren:** Das Modul erstellt einen optimierten Befehl. Klicke auf **"Prompt kopieren"**.
4.  **KI fragen:** Füge den Text bei Gemini/ChatGPT ein und kopiere die **gesamte Antwort**.
5.  **Update:** Klicke in Foundry auf **"Einfügen"** und dann auf **"Journal aktualisieren"**.

<br>

---


---

## 🧩 More Modules by Phil / Meine weiteren Module

🇬🇧 **Discover all of my Foundry VTT modules!**  
Because of Foundry VTT's policies regarding AI assistance (which I use for translations and visual elements as a solo hobby developer), several of my modules have been removed from the official Foundry package directory. Below you can see which modules are still available directly on [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) and which ones are hosted exclusively on [GitHub](https://github.com/PhilsModules/). **All modules remain actively maintained** and can always be installed in Foundry VTT using their **Manifest URL**!

🇩🇪 **Entdecke alle meine Foundry VTT Module!**  
Aufgrund der Richtlinien von Foundry VTT zum Einsatz von künstlicher Intelligenz (die ich als Solo-Hobbyentwickler für Übersetzungen und Grafiken nutze) wurden einige meiner Module aus dem offiziellen Foundry-Verzeichnis entfernt. In der Tabelle siehst du auf einen Blick, welche Module noch direkt über [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) gelistet sind und welche exklusiv über [GitHub](https://github.com/PhilsModules/) bezogen werden können. **Alle Module werden aktiv weiterentwickelt** und lassen sich jederzeit über ihre **Manifest-URL** in Foundry VTT installieren!

| Module / Modul | Foundry VTT Listing | Description (🇬🇧 EN / 🇩🇪 DE) | Links |
| :--- | :---: | :--- | :---: |
| **[Phil's Day and Night Cycle](https://github.com/PhilsModules/phils-day-night-cycle)** | ❌ **GitHub Only**<br>*(Removed due to AI policy / Wegen KI-Richtlinien entfernt)* | 🇬🇧 Immersive clock widget with Solar Arc, full calendar system, and a living weather engine featuring 360° wind physics, volumetric clouds, and 4,800+ narrative weather reports.<br>🇩🇪 Immersives Uhr-Widget mit Sonnenlauf, vollwertigem Kalendersystem und lebendiger Wetter-Engine mit 360°-Windphysik, volumetrischer Wolkendecke und über 4.800 Wetterberichten. | [GitHub](https://github.com/PhilsModules/phils-day-night-cycle) · [Manifest](https://github.com/PhilsModules/phils-day-night-cycle/releases/latest/download/module.json) |
| **[Phil's Console Doctor & Task Manager](https://github.com/PhilsModules/phils-console-doctor)** | ❌ **GitHub Only**<br>*(Removed due to AI policy / Wegen KI-Richtlinien entfernt)* | 🇬🇧 Windows 11-style Task Manager & diagnostics suite for Foundry VTT with real-time CPU/GPU load breakdown, conflict detective, A/B culprit finder, and AI error analysis.<br>🇩🇪 Diagnose-Suite im Windows-11-Task-Manager-Stil mit Live-CPU/GPU-Auslastung, Konflikt-Detektiv, automatischem A/B-Problemlöser und KI-Fehleranalyse. | [GitHub](https://github.com/PhilsModules/phils-console-doctor) · [Manifest](https://github.com/PhilsModules/phils-console-doctor/releases/latest/download/module.json) |
| **[Phil's PF2e RealDark](https://github.com/PhilsModules/phils-pf2e-realdark)** | ❌ **GitHub Only**<br>*(Removed due to AI policy / Wegen KI-Richtlinien entfernt)* | 🇬🇧 A true, customizable dark mode for Pathfinder 2e with 30+ handcrafted theme presets, live preview wizard, and high-contrast readability.<br>🇩🇪 Ein echter, anpassbarer Dark Mode für Pathfinder 2e mit über 30 kuratierten Presets, Live-Vorschau-Assistent und erstklassiger Lesbarkeit. | [GitHub](https://github.com/PhilsModules/phils-pf2e-realdark) · [Manifest](https://github.com/PhilsModules/phils-pf2e-realdark/releases/latest/download/module.json) |
| **[Phil's Universal Translator](https://github.com/PhilsModules/phils-universal-translator)** | ❌ **GitHub Only**<br>*(Removed due to AI policy / Wegen KI-Richtlinien entfernt)* | 🇬🇧 System-agnostic local translation assistant for personal game prep with zero API costs, direct local LLM (Ollama) integration, LinkProtection, and 12-category lore glossary.<br>🇩🇪 Systemunabhängiger Übersetzungs-Assistent für die private Spielvorbereitung ohne API-Kosten, mit lokaler Ollama-Anbindung, LinkProtection und 12-Kategorien-Glossar. | [GitHub](https://github.com/PhilsModules/phils-universal-translator) · [Manifest](https://github.com/PhilsModules/phils-universal-translator/releases/latest/download/module.json) |
| **[Phil's UI Tweaks](https://github.com/PhilsModules/phils-foundry-ui-tweaks)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 Customize, reorder, hide, and group Scene Controls (left toolbar) and Sidebar Tabs (right toolbar) into custom pop-out folders with a sleek Modern Dark UI.<br>🇩🇪 Passe die linke Werkzeugleiste und rechte Seitenleiste frei an – umsortieren, ausblenden und Tabs in eigenen Ausklapp-Ordnern im Modern Dark UI Design gruppieren. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-foundry-ui-tweaks) · [Manifest](https://github.com/PhilsModules/phils-foundry-ui-tweaks/releases/latest/download/module.json) |
| **[Phil's Quest Tracker](https://github.com/PhilsModules/phils-quest-tracker)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 Immersive Quest Log in a Modern Dark UI featuring collaborative party quests, job boards, drag & drop rewards, and automatic calendar synchronization.<br>🇩🇪 Immersives Quest-Log im Modern Dark UI mit kollaborativen Gruppenquests, Auftragsbrett, Drag-&-Drop-Belohnungen und automatischer Kalender-Synchronisation. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-quest-tracker) · [Manifest](https://github.com/PhilsModules/phils-quest-tracker/releases/latest/download/module.json) |
| **[Phil's PF2e AI Translator](https://github.com/PhilsModules/phils-pf2e-ai-translator)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 Next-Gen AI translation studio for Pathfinder 2e with `lang-de-pf2e` compendium integration (15,000+ official terms), LinkProtection, Smart-Sync, and zero API costs.<br>🇩🇪 KI-Übersetzungs-Studio für Pathfinder 2e mit `lang-de-pf2e`-Integration (über 15.000 offizielle Begriffe), LinkProtection, Smart-Sync und null API-Kosten. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-pf2e-ai-translator) · [Manifest](https://github.com/PhilsModules/phils-pf2e-ai-translator/releases/latest/download/module.json) |
| **[Phil's PF2e Action Colours](https://github.com/PhilsModules/phils-pf2e-action-colours)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 Visualizes the Pathfinder 2e 3-Action (and 4-Action Quickened) economy on the drag ruler with dynamic condition/feat detection, smart routing, and 3 colorblind modes.<br>🇩🇪 Visualisiert die Pathfinder 2e 3-Aktionen-Ökonomie (inkl. 4. Aktion bei Hast) direkt beim Token-Ziehen – mit Zustandserkennung, Smart Routing und 3 Farbenblind-Modi. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-pf2e-action-colours) · [Manifest](https://github.com/PhilsModules/phils-pf2e-action-colours/releases/latest/download/module.json) |
| **[Phil's Random Names](https://github.com/PhilsModules/phils-random-names)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 Deluxe generator suite with 5.3M+ NPC name combinations, tavern menus, treasure pouches, custom merchant shops, and 23,000+ entries with drag & drop item creation.<br>🇩🇪 Deluxe-Generator mit über 5,3 Mio. NSC-Namen, Tavernen-Menüs, Schatzbeuteln, eigenen Händler-Auslagen und über 23.000 Einträgen inkl. Drag-&-Drop-Item-Erstellung. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-random-names) · [Manifest](https://github.com/PhilsModules/phils-random-names/releases/latest/download/module.json) |
| **[Phil's AI Assistant](https://github.com/PhilsModules/phils-ai-assistant)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 Connect your Foundry VTT world to Gemini, ChatGPT, Claude, Copilot, Perplexity, or local Ollama with zero API costs to write lore, edit items, and generate image prompts.<br>🇩🇪 Verbinde deine Foundry-Welt ohne API-Kosten mit Gemini, ChatGPT, Claude, Copilot, Perplexity oder lokal mit Ollama für Lore-Texte, Item-Anpassungen und Bild-Prompts. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-ai-assistant) · [Manifest](https://github.com/PhilsModules/phils-ai-assistant/releases/latest/download/module.json) |
| **[Phil's Token Studio](https://github.com/PhilsModules/phils-token-studio)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 High-performance in-game visual token editor with layer management, smart masking, 3D pop-out effects, and Foundry Dynamic Token Ring integration.<br>🇩🇪 Leistungsstarker visueller Token-Editor direkt in Foundry VTT mit Ebenensystem, intelligenter Maskierung, 3D-Pop-out-Effekten und Dynamic-Token-Ring-Unterstützung. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-token-studio) · [Manifest](https://github.com/PhilsModules/phils-token-studio/releases/latest/download/module.json) |
| **[Phil's Journal Translator](https://github.com/PhilsModules/phils-journal-translator)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 System-agnostic AI translation assistant for Foundry VTT journals using free web AI services (Gemini, ChatGPT, Claude, etc.) with automatic backups.<br>🇩🇪 Systemunabhängiger KI-Übersetzungs-Assistent für Foundry VTT Journale über kostenlose Web-KIs (Gemini, ChatGPT, Claude etc.) mit automatischen Backups. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-journal-translator) · [Manifest](https://github.com/PhilsModules/phils-journal-translator/releases/latest/download/module.json) |
| **[Phil's Random Quests](https://github.com/PhilsModules/phils-random-quests)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 Instant adventure and quest idea generator for Pathfinder 2e and D&D 5e when your party goes off the rails.<br>🇩🇪 Schneller Generator für spontane Abenteuer- und Quest-Ideen in Pathfinder 2e und D&D 5e am Spieltisch. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-random-quests) · [Manifest](https://github.com/PhilsModules/phils-random-quests/releases/latest/download/module.json) |
| **[Phil's Art Replacer](https://github.com/PhilsModules/phils-art-replacer)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 Scans your entire world and installed modules to automatically find and replace missing actor and token artwork with side-by-side comparison.<br>🇩🇪 Durchsucht deine gesamte Welt und installierte Module, um fehlende Bilder für Akteure und Tokens automatisch mit Vorher-Nachher-Vergleich zu ersetzen. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-art-replacer) · [Manifest](https://github.com/PhilsModules/phils-art-replacer/releases/latest/download/module.json) |
| **[Phil's Map Migrator](https://github.com/PhilsModules/phils-map-migrator)** | ✅ **Available**<br>*(Verfügbar)* | 🇬🇧 Professional scene migration tool with 1–5 point mathematical calibration, geometry failsafe, and automatic scaling for walls, lights, tokens, and pins.<br>🇩🇪 Profi-Werkzeug für präzise Szenen-Migration mit 1–5-Punkte-Kalibrierung, Geometrie-Wächter und automatischer Skalierung für Wände, Lichter, Tokens und Pins. | [Foundry VTT](https://foundryvtt.com/community/philsmodules/packages) · [GitHub](https://github.com/PhilsModules/phils-map-migrator) · [Manifest](https://github.com/PhilsModules/phils-map-migrator/releases/latest/download/module.json) |

<br>

## 📜 License

This module uses a dual license structure.

- **Code:** GNU GPLv3
- **Assets:** CC BY-NC-ND 4.0

See `LICENSE` file for details.

<br>

<div align="center">
    <h2>❤️ Support the Development</h2>
    <p>If you enjoy this module and want to support open source development for Foundry VTT check out my Patreon.</p>
    <p>Gefällt dir das Modul? Unterstütze die Weiterentwicklung auf Patreon.</p>
    <a href="https://www.patreon.com/PhilsModules">
        <img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" alt="Become a Patron" width="200" />
    </a>
    <br><br>
    <p><i>Made with ❤️ for the Foundry VTT Community</i></p>
</div>
