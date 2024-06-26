export default function registerModuleSettings() {
  game.settings.register("fullsearch", "entryMethod", {
    config: true,
    scope: 'client',
    name: "FULLSEARCH.settings.entryMethodName",
    hint: "FULLSEARCH.settings.entryMethodHint",
    type: String,
    choices: {
      chatBar: "FULLSEARCH.settings.chatBar",
      controlButton: "FULLSEARCH.settings.controlButton",
    },
    default: "chatBar",
    requiresReload: true,
  });

  game.settings.register("fullsearch", "maxResults", {
    config: true,
    scope: 'client',
    name: "FULLSEARCH.settings.maxResultsName",
    hint: "FULLSEARCH.settings.maxResultsHint",
    type: String,
    choices: {
      "20": "20",
      "30": "30",
      "40": "40",
    },
    default: "20",
    requiresReload: false,
  });

  game.settings.register("fullsearch", "userSearch", {
    config: true,
    scope: "world",
    name: "FULLSEARCH.settings.userSearchName",
    hint: "FULLSEARCH.settings.userSearchHint",
    type: Boolean,
    default: false,
    requiresReload: true,
  });
}
