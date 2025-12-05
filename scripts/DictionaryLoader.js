export class DictionaryLoader {
    static _cache = null;

    /**
     * Loads official translations (Disabled).
     * @returns {Promise<Object>} An empty object.
     */
    static async loadOfficialTranslations() {
        // Official translations are disabled to remove dependency on external modules.
        return {};
    }
}
