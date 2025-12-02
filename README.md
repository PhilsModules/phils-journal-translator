# Phil's Journal Translator 📖

![Foundry v13 Compatible](https://img.shields.io/badge/Foundry-v13-brightgreen)
![Foundry v12 Compatible](https://img.shields.io/badge/Foundry-v12-green)
![License](https://img.shields.io/badge/License-GPLv3-blue)

**Phil's Journal Translator** allows you to translate entire Journals in Foundry VTT using modern AI (Google Gemini, ChatGPT, Claude, Copilot, Perplexity).

The core feature: **You don't need expensive API keys!**
The module acts as an intelligent "Prompt Engineer". It prepares the text from your Journal pages, creates the perfect prompt for the AI, and you simply copy it into the chat window of your favorite AI service.

## 🚀 Features

*   **No API Costs:** Works with the free web versions of Gemini, ChatGPT, & Co.
*   **Batch Translation:** Translate multiple pages at once.
*   **Glossary Support:** Automatically generates a glossary of names and terms to ensure consistent translation across pages.
*   **Auto-Sort Glossary:** Automatically sorts glossary terms alphabetically for better organization.
*   **Smart Paste:** You can paste the full AI response text. The module automatically finds and extracts the JSON code block.
*   **Page Limit Warning:** Warns you if you select too many pages to prevent AI context limits.
*   **Context-Aware:** Preserves HTML formatting and links.

## 📦 Installation

1.  Open Foundry VTT.
2.  Go to the **Add-on Modules** tab.
3.  Click **Install Module**.
4.  Paste the following **Manifest URL** into the field:
    ```
    https://github.com/weylen86/phils-journal-translator/releases/latest/download/module.json
    ```
5.  Click **Install**.

## 📖 How to Use

### 1. Open the Translator
Go to the **Journal Directory** sidebar. You will find a **"AI Translation Assistant"** button in the header.

### 2. Select Content
*   **Select Journal:** Choose the Journal you want to translate.
*   **Select Pages:** Pick specific pages or use the "Batch" feature (batch size customizable in settings).
*   **Glossary:** Optionally generate a glossary first to keep names consistent.

### 3. Copy & Paste Workflow
1.  The module generates an optimized prompt.
2.  Click **"Copy Prompt"**.
3.  Paste the text into Gemini/ChatGPT (CTRL+V).
4.  Copy the **entire response** from the AI.
5.  Click the **"Paste"** button in the Foundry result window.
6.  Click **Update Journal**.

---

# 🇩🇪 Deutsche Beschreibung

**Übersetze deine Foundry VTT Journale kostenlos mit KI.**

Phil's Journal Translator verbindet deine Foundry VTT Welt mit der Power moderner KI (Google Gemini, ChatGPT, Claude, Copilot, Perplexity).

Das Besondere: **Du brauchst keine teuren API-Keys!**
Das Modul arbeitet als intelligenter "Prompt-Engineer". Es bereitet deine Journal-Seiten vor, erstellt den perfekten Befehl (Prompt) für die KI, und du musst ihn nur noch in das Chat-Fenster deiner Lieblings-KI kopieren.

## 🚀 Funktionen

*   **Keine API-Kosten:** Funktioniert mit den kostenlosen Web-Versionen von Gemini, ChatGPT & Co.
*   **Batch-Übersetzung:** Übersetze mehrere Seiten auf einmal.
*   **Glossar-Support:** Erstellt automatisch ein Glossar für Namen und Begriffe, damit die Übersetzung konsistent bleibt.
*   **Automatisches Sortieren:** Sortiert Glossar-Begriffe automatisch alphabetisch.
*   **Smart Paste:** Du kannst die ganze Antwort der KI einfügen. Das Modul filtert den Code automatisch heraus.
*   **Seiten-Limit Warnung:** Warnt dich, wenn du zu viele Seiten auswählst, um KI-Fehler zu vermeiden.
*   **Formatierung:** Behält HTML-Formatierungen und Links bei.

## 📦 Installation

1.  Öffne Foundry VTT.
2.  Gehe zum Reiter **Add-on Modules**.
3.  Klicke auf **Install Module**.
4.  Füge die folgende **Manifest URL** unten ein:
    ```
    https://github.com/weylen86/phils-journal-translator/releases/latest/download/module.json
    ```
5.  Klicke auf **Install**.

## 📖 Bedienung

### 1. Öffne den Übersetzer
Gehe zum **Journal Directory** (Seitenleiste). Dort findest du oben den Button **"AI Translation Assistant"**.

### 2. Inhalt wählen
*   **Journal wählen:** Wähle das Journal aus, das übersetzt werden soll.
*   **Seiten wählen:** Wähle einzelne Seiten oder nutze die "Batch"-Funktion (Batch-Größe in den Einstellungen anpassbar).
*   **Glossar:** Erstelle optional zuerst ein Glossar, damit Eigennamen korrekt bleiben.

### 3. Workflow
1.  Das Modul generiert einen optimierten Prompt -> **"Prompt kopieren"**.
2.  Füge den Text bei Gemini/ChatGPT ein.
3.  Kopiere die Antwort der KI und füge sie im Foundry-Fenster ein.
4.  Klicke auf **Update Journal**.

---

## ⚙️ Einstellungen
*   **AI Provider:** Wähle deinen bevorzugten KI-Dienst (Gemini, ChatGPT, etc.).
*   **Game System:** Wähle dein Spielsystem (z.B. Pathfinder 2e) für besseren Kontext.
*   **Batch Size:** Lege fest, wie viele Seiten gleichzeitig übersetzt werden sollen.

---

## 👨‍💻 Author
*   **Phil** (GitHub: [weylen86](https://github.com/weylen86))

## 📄 License
This module is licensed under the [GPL-3.0 License](LICENSE).
