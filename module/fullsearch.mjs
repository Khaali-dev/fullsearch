import * as SETTINGS from "./constants.mjs";
import { SearchChat } from "./search.mjs";
import initControlButtons from "./control-buttons.mjs";

/*
 * INIT HOOK
 */
Hooks.once("init", async () => {
  console.log(SETTINGS.LOG_HEADER + "Module initialization " + SETTINGS.MODULE_NAME);

  /* Add the search button */

  initControlButtons();

  console.log(SETTINGS.LOG_HEADER + "Module initialization finished " + SETTINGS.MODULE_NAME);
});

/*
 * READY HOOK
 */
Hooks.on("ready", () => {
  console.log(SETTINGS.LOG_HEADER + "Module " + SETTINGS.MODULE_NAME + " ready !");
});

Hooks.on("renderChatMessage", (message, html, data) => {
  console.debug("renderChatMessage", message, html, data);
  const typeMessage = data.message.flags.world?.type;
  if (typeMessage === "searchPage") {
    html.find("#ouvrirpage").click((event) => SearchChat.onOpenJournalPage(event, data.message.flags.world?.searchPattern));
  }
});
