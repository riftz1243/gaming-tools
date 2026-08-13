/*
  GameTools shared dedicated-game guide engine
*/

const DEDICATED_GAME_SETTINGS = {

  kingdomcome: {
    title: "Kingdom Come: Deliverance II",
    demand: 1.55,
    tip: "Reduce shadows, vegetation and volumetric effects first if performance drops."
  },

  alanwake: {
    title: "Alan Wake 2",
    demand: 1.75,
    tip: "Ray tracing is extremely demanding. Disable it first, then reduce lighting, reflections and volumetrics."
  },

  helldivers: {
    title: "Helldivers 2",
    demand: 1.25,
    tip: "Lower shadows, volumetrics and reflections first while keeping textures as high as VRAM allows."
  },

  rdr2: {
    title: "Red Dead Redemption 2",
    demand: 1.15,
    tip: "Avoid maxing every advanced option. Reflections, water physics and volumetrics are good settings to reduce first."
  },

  hogwarts: {
    title: "Hogwarts Legacy",
    demand: 1.30,
    tip: "Ray tracing, shadows and effects can be expensive. Keep textures high if VRAM usage is under control."
  },

  requiem: {
    title: "Resident Evil Requiem",
    demand: 1.45,
    tip: "Start balanced and reduce ray tracing, shadows and volumetric effects first if you need more performance."
  }

};


function startGameGuide(gameId){

  const game =
    DEDICATED_GAME_SETTINGS[gameId];

  if(!game){
    return;
  }


  document.title =
    `${game.title} Settings by GPU | GameTools`;

  document.getElementById("gameName").innerText =
    game.title;

  document.getElementById("gameName2").innerText =
    game.title;

  document.getElementById("gameName3").innerText =
    game.title;


  populateGpuSelect("gpu","5060");


  window.generateGameSettings = function(){

    const gpuId =
      document.getElementById("gpu").value;

    const resolution =
      document.getElementById("resolution").value;

    const profile =
      document.getElementById("profile").value;

    const card =
      GPU_DATABASE[gpuId];


    let score =
      card.power / game.demand;


    if(resolution === "1440"){
      score *= 0.78;
    }

    if(resolution === "4k"){
      score *= 0.54;
    }


    let level;
    let preset;
    let textures;
    let shadows;
    let reflections;
    let effects;
    let volumetrics;
    let rt;


    if(score < 0.7){

      level = "Limited";
      preset = "Low / Medium";
      textures = "Medium";
      shadows = "Low";
      reflections = "Low";
      effects = "Medium";
      volumetrics = "Low";
      rt = "Off";

    }

    else if(score < 1.0){

      level = "Moderate";
      preset = "Medium";
      textures = "High";
      shadows = "Medium";
      reflections = "Medium";
      effects = "Medium";
      volumetrics = "Medium";
      rt = "Off";

    }

    else if(score < 1.4){

      level = "Good";
      preset = "High";
      textures = "High";
      shadows = "Medium / High";
      reflections = "Medium / High";
      effects = "High";
      volumetrics = "Medium";
      rt = "Off / Low";

    }

    else if(score < 1.9){

      level = "Strong";
      preset = "High / Ultra";
      textures = "High / Ultra";
      shadows = "High";
      reflections = "High";
      effects = "High";
      volumetrics = "High";
      rt = "Low / Medium";

    }

    else{

      level = "Very Strong";
      preset = "Ultra";
      textures = "Ultra";
      shadows = "High / Ultra";
      reflections = "High / Ultra";
      effects = "Ultra";
      volumetrics = "High";
      rt = "Medium / High";

    }


    if(profile === "performance"){

      preset =
        score > 1
        ? "Medium / High"
        : "Low / Medium";

      shadows = "Low / Medium";
      reflections = "Low / Medium";
      effects = "Medium";
      volumetrics = "Low / Medium";
      rt = "Off";

    }


    if(profile === "quality"){

      textures = "Ultra";

      if(score > 1.2){
        shadows = "High";
        reflections = "High";
        effects = "High / Ultra";
      }

      if(score > 1.6){
        rt = "Low / Medium";
      }

    }


    let upscaling;

    if(card.brand === "nvidia"){

      if(resolution === "1080"){
        upscaling =
          score > 1.2
          ? "DLSS Quality / Native"
          : "DLSS Quality";
      }

      else if(resolution === "1440"){
        upscaling =
          score > 1.25
          ? "DLSS Quality"
          : "DLSS Balanced";
      }

      else{
        upscaling =
          score > 1.4
          ? "DLSS Quality"
          : "DLSS Balanced / Performance";
      }

    }

    else{

      if(resolution === "1080"){
        upscaling =
          score > 1.2
          ? "FSR Quality / Native"
          : "FSR Quality";
      }

      else if(resolution === "1440"){
        upscaling =
          score > 1.25
          ? "FSR Quality"
          : "FSR Balanced";
      }

      else{
        upscaling =
          score > 1.4
          ? "FSR Quality"
          : "FSR Balanced / Performance";
      }

    }


    let fg;

    if(card.framegen){

      fg =
        profile === "performance"
        ? "Optional"
        : "On if supported";

    }

    else{

      fg =
        "Use game-supported option if available";

    }


    let summary;

    if(level === "Limited"){

      summary =
        `${card.name} is a demanding match for ${game.title} at this resolution. Start conservatively and use upscaling.`;

    }

    else if(level === "Moderate"){

      summary =
        `${card.name} should handle ${game.title} with compromises on heavier graphics effects.`;

    }

    else if(level === "Good"){

      summary =
        `${card.name} is a solid match for ${game.title}. High settings are a sensible starting point.`;

    }

    else if(level === "Strong"){

      summary =
        `${card.name} has good graphics headroom for ${game.title} at this resolution.`;

    }

    else{

      summary =
        `${card.name} has strong graphics headroom for ${game.title}, so image quality can be prioritized.`;

    }


    document.getElementById("level").innerText =
      level;

    document.getElementById("summary").innerText =
      summary;

    document.getElementById("preset").innerText =
      preset;

    document.getElementById("textures").innerText =
      textures;

    document.getElementById("shadows").innerText =
      shadows;

    document.getElementById("reflections").innerText =
      reflections;

    document.getElementById("effects").innerText =
      effects;

    document.getElementById("volumetrics").innerText =
      volumetrics;

    document.getElementById("rt").innerText =
      rt;

    document.getElementById("upscaling").innerText =
      upscaling;

    document.getElementById("fg").innerText =
      fg;

    document.getElementById("tip").innerText =
      game.tip;


    document.getElementById("result").style.display =
      "block";


    document.getElementById("result").scrollIntoView({
      behavior:"smooth",
      block:"nearest"
    });

  };

}
