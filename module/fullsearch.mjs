import * as SETTINGS from "./constants.mjs";
import { SearchChat } from "./search.mjs";
import initControlButtons from "./control-buttons.mjs";

export default class FullsearchJournalSheet extends JournalSheet {}

/*
 * INIT HOOK
 */
Hooks.once("init", async () => {
  console.log(SETTINGS.LOG_HEADER + "Module initialization");

  Journal.registerSheet(game.system.id, FullsearchJournalSheet, { makeDefault: false });

  /* Add the search button */
  initControlButtons();

  console.log(SETTINGS.LOG_HEADER + "Module initialization finished");
});

/*
 * READY HOOK
 */
Hooks.on("ready", async () => {
  const searchMessages = game.messages.filter(m=>m.flags.world?.type==="searchPage");
  for (const message of searchMessages) {
    await SearchChat.updateMessage(message._id, true);  
  }
  console.log(SETTINGS.LOG_HEADER + "Module ready !");
});

/*
 * RENDER CHAT MESSAGE HOOK
 */
Hooks.on("renderChatMessage", (message, html, data) => {
  console.debug("renderChatMessage", message, html, data);
  const typeMessage = data.message.flags.world?.type;
  if (typeMessage === "searchPage") {
    const messageId = data.message._id;
    html.find("#highlight").click(async (event) => await SearchChat.toggleEnricher(event, data.message.flags.world?.searchPattern, messageId));
  }
});
