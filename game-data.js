/*
  GameTools shared game database
  demand = internal relative demand category.
*/

const GAME_DATABASE = {

  "fortnite": {
    name: "Fortnite",
    demand: 0.75,
    guide: "fortnite-settings.html"
  },

  "cyberpunk": {
    name: "Cyberpunk 2077",
    demand: 1.50,
    guide: "cyberpunk-settings.html"
  },

  "blackmyth": {
    name: "Black Myth: Wukong",
    demand: 1.70,
    guide: "black-myth-wukong-settings.html"
  },

  "kingdomcome": {
    name: "Kingdom Come: Deliverance II",
    demand: 1.55,
    guide: "kingdom-come-2-settings.html"
  },

  "alanwake": {
    name: "Alan Wake 2",
    demand: 1.75,
    guide: "alan-wake-2-settings.html"
  },

  "helldivers": {
    name: "Helldivers 2",
    demand: 1.25,
    guide: "helldivers-2-settings.html"
  },

  "rdr2": {
    name: "Red Dead Redemption 2",
    demand: 1.15,
    guide: "red-dead-redemption-2-settings.html"
  },

  "hogwarts": {
    name: "Hogwarts Legacy",
    demand: 1.30,
    guide: "hogwarts-legacy-settings.html"
  },

  "requiem": {
    name: "Resident Evil Requiem",
    demand: 1.45,
    guide: "resident-evil-requiem-settings.html"
  },

  "elden": {
    name: "Elden Ring",
    demand: 1.00,
    guide: null
  },

  "warzone": {
    name: "Call of Duty: Warzone",
    demand: 1.05,
    guide: null
  },

  "witcher3": {
    name: "The Witcher 3",
    demand: 1.10,
    guide: null
  },

  "starfield": {
    name: "Starfield",
    demand: 1.40,
    guide: null
  },

  "minecraft": {
    name: "Minecraft",
    demand: 0.60,
    guide: null
  },

  "gta5": {
    name: "GTA V",
    demand: 0.65,
    guide: null
  },

  "forza": {
    name: "Forza Horizon 5",
    demand: 0.90,
    guide: null
  },

  "bg3": {
    name: "Baldur's Gate 3",
    demand: 0.90,
    guide: null
  }

};


function populateGameSelect(
  selectId,
  defaultGame = "cyberpunk"
){

  const select =
    document.getElementById(selectId);

  if(!select) return;

  select.innerHTML = "";


  Object.entries(GAME_DATABASE)
    .forEach(([id, game]) => {

      const option =
        document.createElement("option");

      option.value = id;
      option.textContent = game.name;

      if(id === defaultGame){
        option.selected = true;
      }

      select.appendChild(option);

    });

}
