//Storing and managing user settings can be achieved using a
// Singleton pattern to ensure there is only one instance of the settings.
class UserSettings {
    constructor() {
        this.settings = {};
    }

    setSetting(key, value) {
        this.settings[key] = value;
    }

    getSetting(key) {
        return this.settings[key];
    }
}

const userSettings = new UserSettings(); // Singleton instance

userSettings.setSetting("theme", "dark");
userSettings.setSetting("language", "en");

console.log(userSettings.getSetting("theme")); // "dark"
