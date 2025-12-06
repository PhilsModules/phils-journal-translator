# Phil's Journal Translator

![Foundry v13 Compatible](https://img.shields.io/badge/Foundry-v13-brightgreen)
![Foundry v12 Compatible](https://img.shields.io/badge/Foundry-v12-green)
![License](https://img.shields.io/badge/License-GPLv3-blue)
![Version](https://img.shields.io/badge/Version-1.1.0-orange)


<a href="Updates.md"><img src="https://img.shields.io/badge/CHECK-Changelog-blue" style="height: 25px;"></a>
<a href="https://www.patreon.com/PhilsModules"><img src="https://img.shields.io/badge/SUPPORT-Patreon-ff424d?logo=patreon" style="height: 25px;"></a>

**Automated AI Translation for Foundry VTT Journals (ChatGPT, Claude, Gemini, etc.)**

This module allows you to translate **large adventure modules** or long texts in Foundry VTT quickly and consistently. It is **system-agnostic** (works with PF2e, D&D 5e, etc.).

---

## 🚀 Features

*   **System Agnostic:** Works with any Foundry VTT system (PF2e, D&D 5e, etc.).
*   **No API Costs:** Works with the free web versions of Gemini, ChatGPT, Claude, Copilot, and Perplexity.
*   **Batch Translation:** Translate multiple pages or entire journals at once.
*   **Glossary Support:** Automatically generates and maintains a glossary to ensure consistent naming across all your documents.
*   **Smart Paste:** Automatically detects and extracts the correct JSON code block from the AI response.
*   **Safety First:** Automatically creates a **Backup** of your Journal before applying any changes.
*   **Context-Aware:** Preserves HTML formatting, links, and structure.
*   **Multi-Provider Support:** Optimized prompts for all major AI providers.

---

## 📦 Installation

1.  Open Foundry VTT.
2.  Go to the **Add-on Modules** tab.
3.  Click **Install Module**.
4.  Paste the following **Manifest URL** into the field:
    ```
    https://github.com/PhilsModules/phils-journal-translator/releases/latest/download/module.json
    ```
5.  Click **Install**.

## 📖 How to Use

1.  **Open the Translator:** Go to the Journal Directory and click the **"Journal Translator"** button.
2.  **Select Content:** Choose the Journal and Pages you want to translate.
3.  **Generate Prompt:** The module generates an optimized prompt. Click **"Copy Prompt"**.
4.  **AI Magic:** Paste the prompt into Gemini/ChatGPT and copy the **entire response**.
5.  **Update:** Click **"Paste"** in Foundry and then **Update Journal**.

---

# Deutsche Anleitung

**Übersetze deine Foundry VTT Journale kostenlos mit KI.**

Phil's Journal Translator verbindet deine Foundry VTT Welt mit der Power moderner KI. Das Besondere: **Du brauchst keine teuren API-Keys!** Das Modul arbeitet als intelligenter "Prompt-Engineer" für die kostenlosen Web-Versionen von Gemini, ChatGPT & Co.

## 🚀 Funktionen

*   **Systemunabhängig:** Funktioniert mit jedem Foundry VTT System (PF2e, D&D 5e, etc.).
*   **Kostenlos:** Nutze die Web-Interfaces der KI-Anbieter (keine API-Kosten).
*   **Batch-Übersetzung:** Übersetze mehrere Seiten oder ganze Journale auf einmal.
*   **Glossar-Support:** Erstellt automatisch ein Glossar für Namen und Begriffe, damit die Übersetzung über alle Seiten hinweg konsistent bleibt.
*   **Smart Paste:** Du kannst die gesamte Antwort der KI kopieren. Das Modul filtert automatisch den JSON-Code heraus.
*   **Sicher:** HTML-Formatierungen und Links bleiben erhalten.
*   **Safety First:** Erstellt automatisch ein **Backup** (Kopie) deines Journals, bevor Änderungen angewendet werden.
*   **Multi-Provider Support:** Optimierte Prompts für alle großen KI-Anbieter (Gemini, ChatGPT, Claude, etc.).

## 📦 Installation

1.  Öffne Foundry VTT.
2.  Gehe zum Reiter **Add-on Modules**.
3.  Klicke auf **Install Module**.
4.  Füge die folgende **Manifest URL** unten ein:
    ```
    https://github.com/PhilsModules/phils-journal-translator/releases/latest/download/module.json
    ```
5.  Klicke auf **Install**.

## 📖 Bedienung

1.  **Translator öffnen:** Gehe in das Journal-Verzeichnis und klicke auf den **"Journal Translator"** Button.
2.  **Inhalt wählen:** Wähle das Journal und die Seiten aus, die du übersetzen möchtest.
3.  **Prompt generieren:** Das Modul erstellt einen optimierten Befehl. Klicke auf **"Prompt kopieren"**.
4.  **KI fragen:** Füge den Text bei Gemini/ChatGPT ein und kopiere die **gesamte Antwort**.
5.  **Update:** Klicke in Foundry auf **"Einfügen"** und dann auf **"Journal aktualisieren"**.

---

## 👨‍💻 Author
* **Phil** (GitHub: [PhilsModules](https://github.com/PhilsModules))

## 📄 License
This module is licensed under the [GPL-3.0 License](LICENSE).

---
<div align="center">
    <h2>❤️ Support the Development</h2>
    <p>If you enjoy this module and want to support open-source development for Foundry VTT, check out my Patreon!</p>
    <p>Gefällt dir das Modul? Unterstütze die Weiterentwicklung auf Patreon!</p>
    <a href="https://www.patreon.com/PhilsModules">
        <img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" alt="Become a Patron" />
    </a>
    <p>Made with ❤️ for the Foundry VTT Community</p>
</div>
