function register_settings() {
    // Gritty Damage Injury Table Name
    game.settings.register('swim', 'injuryTable', {
        name: game.i18n.localize("SWIM.injuryTableName"),
        hint: game.i18n.localize("SWIM.inmjuryTableHint"),
        type: String,
        default: 'Injury Table',
        scope: 'world',
        config: true,
        onChange: () => {
            window.location.reload();
        }
    });
    // Fear Table Name
    game.settings.register('swim', 'fearTable', {
        name: game.i18n.localize("SWIM.fearTableName"),
        hint: game.i18n.localize("SWIM.fearTableHint"),
        type: String,
        default: 'Fear Table',
        scope: 'world',
        config: true,
        onChange: () => {
            window.location.reload();
        }
    });
    // Shaken SFX
    game.settings.register('swim', 'shakenSFX', {
        name: game.i18n.localize("SWIM.shakenSFXName"),
        hint: game.i18n.localize("SWIM.shakenSFXHint"),
        type: window.Azzu.SettingsTypes.FilePickerAudio,
        default: '',
        scope: 'world',
        config: true,
        onChange: () => {
            window.location.reload();
        }
    });
    // Incapacitation SFX
    game.settings.register('swim', 'incapSFX', {
        name: game.i18n.localize("SWIM.incapSFXName"),
        hint: game.i18n.localize("SWIM.incapSFXHint"),
        type: window.Azzu.SettingsTypes.FilePickerAudio,
        default: '',
        scope: 'world',
        config: true,
        onChange: () => {
            window.location.reload();
        }
    });
    // Stunned SFX
    game.settings.register('swim', 'stunSFX', {
        name: game.i18n.localize("SWIM.stunSFXName"),
        hint: game.i18n.localize("SWIM.stunSFXHint"),
        type: window.Azzu.SettingsTypes.FilePickerAudio,
        default: '',
        scope: 'world',
        config: true,
        onChange: () => {
            window.location.reload();
        }
    });
    // Prone Image
    game.settings.register('swim', 'proneIMG', {
        name: game.i18n.localize("SWIM.proneIMGName"),
        hint: game.i18n.localize("SWIM.proneIMGHint"),
        type: window.Azzu.SettingsTypes.FilePickerImage,
        default: 'data/modules/swim/assets/icons/status_markers/2-Prone.png',
        scope: 'world',
        config: true,
        onChange: () => {
            window.location.reload();
        }
    });
    // Wounded SFX
    game.settings.register('swim', 'woundedSFX', {
        name: game.i18n.localize("SWIM.woundedSFXName"),
        hint: game.i18n.localize("SWIM.woundedSFXHint"),
        type: window.Azzu.SettingsTypes.FilePickerAudio,
        default: '',
        scope: 'world',
        config: true,
        onChange: () => {
            window.location.reload();
        }
    });
    // Fear SFX
    game.settings.register('swim', 'fearSFX', {
        name: game.i18n.localize("SWIM.fearSFXName"),
        hint: game.i18n.localize("SWIM.fearSFXHint"),
        type: window.Azzu.SettingsTypes.FilePickerAudio,
        default: '',
        scope: 'world',
        config: true,
        onChange: () => {
            window.location.reload();
        }
    });
}

Hooks.on(`ready`, () => {
    console.log('SWADE Immersive Macros | Ready');
    register_settings();
});