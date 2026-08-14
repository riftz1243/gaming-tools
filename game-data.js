/*
==========================================================
 GAMETOOLS — GAME DATABASE 2.0
==========================================================

 demand:
 Relative GPU demand. Used internally by GameTools.

 cpu:
 Relative CPU demand.

 vram:
 Recommended comfortable VRAM amount in GB for higher
 texture settings. This is NOT a hard requirement.

 rt:
 Whether GameTools should offer Ray Tracing advice.

 framegen:
 Whether Frame Generation advice is relevant.

 competitive:
 Changes recommendations toward responsiveness/high FPS.

 IMPORTANT:
 These values are recommendation logic, not benchmark FPS.
==========================================================
*/

const GAME_DATABASE = {

  /* =====================================================
     DEDICATED GUIDES
  ===================================================== */

  "fortnite": {
    name: "Fortnite",
    demand: 0.75,
    cpu: 1.15,
    vram: 8,
    rt: true,
    framegen: true,
    competitive: true,
    guide: "fortnite-settings.html",

    priorities: [
      "viewDistance",
      "shadows",
      "effects",
      "globalIllumination"
    ]
  },


  "cyberpunk": {
    name: "Cyberpunk 2077",
    demand: 1.50,
    cpu: 1.05,
    vram: 10,
    rt: true,
    framegen: true,
    competitive: false,
    guide: "cyberpunk-settings.html",

    priorities: [
      "textures",
      "crowdDensity",
      "volumetrics",
      "reflections",
      "rayTracing"
    ]
  },


  "blackmyth": {
    name: "Black Myth: Wukong",
    demand: 1.70,
    cpu: 1.00,
    vram: 10,
    rt: true,
    framegen: true,
    competitive: false,
    guide: "black-myth-wukong-settings.html",

    priorities: [
      "textures",
      "shadows",
      "globalIllumination",
      "reflections",
      "effects"
    ]
  },


  "kingdomcome": {
    name: "Kingdom Come: Deliverance II",
    demand: 1.55,
    cpu: 1.25,
    vram: 10,
    rt: false,
    framegen: true,
    competitive: false,
    guide: "kingdom-come-2-settings.html",

    priorities: [
      "textures",
      "shadows",
      "vegetation",
      "volumetrics",
      "viewDistance"
    ]
  },


  "alanwake": {
    name: "Alan Wake 2",
    demand: 1.75,
    cpu: 0.95,
    vram: 10,
    rt: true,
    framegen: true,
    competitive: false,
    guide: "alan-wake-2-settings.html",

    priorities: [
      "textures",
      "lighting",
      "shadows",
      "reflections",
      "rayTracing"
    ]
  },


  "helldivers": {
    name: "Helldivers 2",
    demand: 1.25,
    cpu: 1.20,
    vram: 8,
    rt: false,
    framegen: false,
    competitive: true,
    guide: "helldivers-2-settings.html",

    priorities: [
      "textures",
      "shadows",
      "volumetrics",
      "reflections",
      "effects"
    ]
  },


  "rdr2": {
    name: "Red Dead Redemption 2",
    demand: 1.15,
    cpu: 0.95,
    vram: 8,
    rt: false,
    framegen: false,
    competitive: false,
    guide: "red-dead-redemption-2-settings.html",

    priorities: [
      "textures",
      "lighting",
      "reflections",
      "water",
      "volumetrics"
    ]
  },


  "hogwarts": {
    name: "Hogwarts Legacy",
    demand: 1.30,
    cpu: 1.10,
    vram: 10,
    rt: true,
    framegen: true,
    competitive: false,
    guide: "hogwarts-legacy-settings.html",

    priorities: [
      "textures",
      "shadows",
      "effects",
      "population",
      "rayTracing"
    ]
  },


  "requiem": {
    name: "Resident Evil Requiem",
    demand: 1.45,
    cpu: 1.05,
    vram: 10,
    rt: true,
    framegen: true,
    competitive: false,
    guide: "resident-evil-requiem-settings.html",

    priorities: [
      "textures",
      "shadows",
      "volumetrics",
      "reflections",
      "rayTracing"
    ]
  },


  "gta5enhanced": {
    name: "Grand Theft Auto V Enhanced",
    demand: 1.05,
    cpu: 1.05,
    vram: 8,
    rt: true,
    framegen: true,
    competitive: false,
    guide: "gta-v-enhanced-settings.html",

    priorities: [
      "textures",
      "shadows",
      "reflections",
      "population",
      "viewDistance"
    ]
  },


  "marvelrivals": {
    name: "Marvel Rivals",
    demand: 1.05,
    cpu: 1.10,
    vram: 8,
    rt: false,
    framegen: true,
    competitive: true,
    guide: "marvel-rivals-settings.html",

    priorities: [
      "textures",
      "shadows",
      "effects",
      "globalIllumination",
      "reflections"
    ]
  },


  "cs2": {
    name: "Counter-Strike 2",
    demand: 0.60,
    cpu: 1.35,
    vram: 6,
    rt: false,
    framegen: false,
    competitive: true,
    guide: "cs2-settings.html",

    priorities: [
      "shadows",
      "textures",
      "particles",
      "ambientOcclusion"
    ]
  },


  "valorant": {
    name: "VALORANT",
    demand: 0.45,
    cpu: 1.40,
    vram: 4,
    rt: false,
    framegen: false,
    competitive: true,
    guide: "valorant-settings.html",

    priorities: [
      "materialQuality",
      "textureQuality",
      "detailQuality",
      "uiQuality"
    ]
  },


  "elden": {
    name: "Elden Ring",
    demand: 1.00,
    cpu: 0.90,
    vram: 8,
    rt: true,
    framegen: false,
    competitive: false,
    guide: "elden-ring-settings.html",

    priorities: [
      "textures",
      "shadows",
      "lighting",
      "effects",
      "grass"
    ]
  },


  "battlefield6": {
    name: "Battlefield 6",
    demand: 1.35,
    cpu: 1.25,
    vram: 8,
    rt: false,
    framegen: true,
    competitive: true,
    guide: "battlefield-6-settings.html",

    priorities: [
      "textures",
      "shadows",
      "effects",
      "terrain",
      "volumetrics"
    ]
  },


  /* =====================================================
     GENERAL SETTINGS FINDER GAMES
  ===================================================== */

  "warzone": {
    name: "Call of Duty: Warzone",
    demand: 1.05,
    cpu: 1.30,
    vram: 8,
    rt: false,
    framegen: true,
    competitive: true,
    guide: null,

    priorities: [
      "textures",
      "shadows",
      "particles",
      "volumetrics",
      "reflections"
    ]
  },


  "witcher3": {
    name: "The Witcher 3",
    demand: 1.10,
    cpu: 0.95,
    vram: 8,
    rt: true,
    framegen: true,
    competitive: false,
    guide: null,

    priorities: [
      "textures",
      "shadows",
      "foliage",
      "backgroundCharacters",
      "rayTracing"
    ]
  },


  "starfield": {
    name: "Starfield",
    demand: 1.40,
    cpu: 1.15,
    vram: 8,
    rt: false,
    framegen: true,
    competitive: false,
    guide: null,

    priorities: [
      "shadows",
      "indirectLighting",
      "reflections",
      "volumetrics",
      "crowdDensity"
    ]
  },


  "minecraft": {
    name: "Minecraft",
    demand: 0.60,
    cpu: 1.15,
    vram: 6,
    rt: true,
    framegen: false,
    competitive: false,
    guide: null,

    priorities: [
      "renderDistance",
      "simulationDistance",
      "shadows",
      "rayTracing"
    ]
  },


  "forza": {
    name: "Forza Horizon 5",
    demand: 0.90,
    cpu: 0.90,
    vram: 8,
    rt: true,
    framegen: true,
    competitive: false,
    guide: null,

    priorities: [
      "textures",
      "shadows",
      "reflections",
      "environmentGeometry",
      "msaa"
    ]
  },


  "bg3": {
    name: "Baldur's Gate 3",
    demand: 0.90,
    cpu: 1.15,
    vram: 8,
    rt: false,
    framegen: false,
    competitive: false,
    guide: null,

    priorities: [
      "textures",
      "shadows",
      "clouds",
      "crowdDensity",
      "animation"
    ]
  }

};


/* ========================================================
   GAME SELECT BUILDER
======================================================== */

function populateGameSelect(
  selectId,
  defaultGame = "cyberpunk"
){

  const select =
    document.getElementById(selectId);

  if(!select){
    return;
  }

  select.innerHTML = "";


  const dedicated =
    document.createElement("optgroup");

  dedicated.label =
    "Dedicated GameTools Guides";


  const general =
    document.createElement("optgroup");

  general.label =
    "General Settings Finder";


  Object.entries(GAME_DATABASE)
    .forEach(([id,game]) => {

      const option =
        document.createElement("option");

      option.value = id;

      option.textContent =
        game.name;


      if(id === defaultGame){
        option.selected = true;
      }


      if(game.guide){

        dedicated.appendChild(option);

      }

      else{

        general.appendChild(option);

      }

    });


  select.appendChild(dedicated);

  select.appendChild(general);

}
