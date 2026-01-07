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
