import { SearchDialog } from "./search.mjs";

//add the search icon in left menu
export default function initControlButtons() {
  CONFIG.Canvas.layers.fullsearch = { layerClass: ControlsLayer, group: "primary" };

  Hooks.on("getSceneControlButtons", (btns) => {
    if (game.user.isGM) {
      let menu = [];

      menu.push({
        name: "fullsearch",
        title: "FULLSEARCH.dialog_title",
        icon: "fas fa-magnifying-glass",
        button: true,
        onClick: async () => {
          let searchDialog = await new SearchDialog().render(true);
        },
      });
      btns.push({
        name: "fullsearch",
        title: "FULLSEARCH.dialog_title",
        icon: "fas fa-magnifying-glass",
        layer: "fullsearch",
        tools: menu,
      });
    }
  });
}
