/*
  GameTools shared dedicated game guide engine

  demand values are internal relative categories.
  They are NOT benchmark scores or guaranteed FPS.
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
    tip: "Lower shadows, volumetrics and reflections first while keeping textures as high as your VRAM comfortably allows."
  },

  rdr2: {
    title: "Red Dead Redemption 2",
    demand: 1.15,
    tip: "Avoid maxing every advanced option. Reflections, water-related settings and volumetrics are sensible settings to reduce first."
  },

  hogwarts: {
    title: "Hogwarts Legacy",
    demand: 1.30,
    tip: "Ray tracing, shadows and effects can be expensive. Keep textures high when VRAM allows it."
  },

  requiem: {
    title: "Resident Evil Requiem",
    demand: 1.45,
    tip: "Start balanced and reduce ray tracing, shadows and volumetric effects first if you need more performance."
  },

  gta5enhanced: {
    title: "Grand Theft Auto V Enhanced",
    demand: 1.05,
    tip: "For more performance, reduce ray tracing, reflections, shadows and extended distance-related settings before lowering textures."
  },

  marvelrivals: {
    title: "Marvel Rivals",
    demand: 1.05,
    tip: "For competitive play, prioritize lower shadows, effects and heavy lighting options while keeping image clarity high."
  },

  cs2: {
    title: "Counter-Strike 2",
    demand: 0.60,
    tip: "For competitive play, prioritize visibility and latency. Keep demanding effects low and avoid unnecessary visual options."
  },

  valorant: {
    title: "VALORANT",
    demand: 0.45,
    tip: "VALORANT is often CPU-limited at very high frame rates. Keep distracting visual effects low and prioritize responsiveness."
  },

  elden: {
    title: "Elden Ring",
    demand: 1.00,
    tip: "Keep textures high when possible and reduce shadows, effects and demanding lighting options first if performance drops."
  },

  battlefield6: {
    title: "Battlefield 6",
    demand: 1.35,
    tip: "For multiplayer, prioritize stable responsiveness. Reduce shadows, effects, volumetrics and ray-traced features before textures."
  }

};


function startGameGuide(gameId){

  const game =
    DEDICATED_GAME_SETTINGS[gameId];

  if(!game){
    console.error("Unknown GameTools game ID:", gameId);
    return;
  }


  document.title =
    `${game.title} Settings by GPU | GameTools`;


  const name1 =
    document.getElementById("gameName");

  const name2 =
    document.getElementById("gameName2");

  const name3 =
    document.getElementById("gameName3");


  if(name1){
    name1.innerText = game.title;
  }

  if(name2){
    name2.innerText = game.title;
  }

  if(name3){
    name3.innerText = game.title;
  }


  populateGpuSelect(
    "gpu",
    "5060"
  );


  window.generateGameSettings =
  function(){


    const gpuId =
      document
        .getElementById("gpu")
        .value;


    const resolution =
      document
        .getElementById("resolution")
        .value;


    const profile =
      document
        .getElementById("profile")
        .value;


    const card =
      GPU_DATABASE[gpuId];


    let score =
      card.power /
      game.demand;


    /* RESOLUTION LOAD */

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


    /* BASE RECOMMENDATIONS */

    if(score < 0.70){

      level =
        "Limited";

      preset =
        "Low / Medium";

      textures =
        "Medium";

      shadows =
        "Low";

      reflections =
        "Low";

      effects =
        "Medium";

      volumetrics =
        "Low";

      rt =
        "Off";

    }


    else if(score < 1.00){

      level =
        "Moderate";

      preset =
        "Medium";

      textures =
        "High";

      shadows =
        "Medium";

      reflections =
        "Medium";

      effects =
        "Medium";

      volumetrics =
        "Medium";

      rt =
        "Off";

    }


    else if(score < 1.40){

      level =
        "Good";

      preset =
        "High";

      textures =
        "High";

      shadows =
        "Medium / High";

      reflections =
        "Medium / High";

      effects =
        "High";

      volumetrics =
        "Medium";

      rt =
        "Off / Low";

    }


    else if(score < 1.90){

      level =
        "Strong";

      preset =
        "High / Ultra";

      textures =
        "High / Ultra";

      shadows =
        "High";

      reflections =
        "High";

      effects =
        "High";

      volumetrics =
        "High";

      rt =
        "Low / Medium";

    }


    else{

      level =
        "Very Strong";

      preset =
        "Ultra";

      textures =
        "Ultra";

      shadows =
        "High / Ultra";

      reflections =
        "High / Ultra";

      effects =
        "Ultra";

      volumetrics =
        "High";

      rt =
        "Medium / High";

    }


    /* PERFORMANCE PROFILE */

    if(profile === "performance"){

      preset =
        score > 1
        ? "Medium / High"
        : "Low / Medium";

      shadows =
        "Low / Medium";

      reflections =
        "Low / Medium";

      effects =
        "Low / Medium";

      volumetrics =
        "Low / Medium";

      rt =
        "Off";

    }


    /* QUALITY PROFILE */

    if(profile === "quality"){

      textures =
        "Ultra";


      if(score > 1.2){

        shadows =
          "High";

        reflections =
          "High";

        effects =
          "High / Ultra";

      }


      if(score > 1.6){

        rt =
          "Low / Medium";

      }

    }


    /*
      Competitive games get more conservative
      recommendations when Performance is selected.
    */

    if(
      profile === "performance" &&
      (
        gameId === "cs2" ||
        gameId === "valorant" ||
        gameId === "marvelrivals" ||
        gameId === "battlefield6"
      )
    ){

      shadows =
        "Low";

      reflections =
        "Low";

      effects =
        "Low";

      volumetrics =
        "Low";

      rt =
        "Off";

    }


    /* UPSCALING */

    let upscaling;


    if(card.brand === "nvidia"){

      if(resolution === "1080"){

        upscaling =
          score > 1.15
          ? "Native / DLSS Quality"
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
          score > 1.40
          ? "DLSS Quality"
          : "DLSS Balanced / Performance";

      }

    }


    else{

      if(resolution === "1080"){

        upscaling =
          score > 1.15
          ? "Native / FSR Quality"
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
          score > 1.40
          ? "FSR Quality"
          : "FSR Balanced / Performance";

      }

    }


    /* FRAME GENERATION */

    let fg;


    if(
      gameId === "cs2" ||
      gameId === "valorant"
    ){

      fg =
        "Off for competitive play";

    }

    else if(card.framegen){

      fg =
        profile === "performance"
        ? "Optional"
        : "On if supported";

    }

    else{

      fg =
        "Use game-supported option if available";

    }


    /* SUMMARY */

    let summary;


    if(level === "Limited"){

      summary =
        `${card.name} is a demanding match for ${game.title} at this resolution. Start conservatively and use upscaling where appropriate.`;

    }


    else if(level === "Moderate"){

      summary =
        `${card.name} should handle ${game.title} with compromises on heavier graphics options.`;

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
        `${card.name} has strong graphics headroom for ${game.title}, giving you room to prioritize image quality.`;

    }


    /* OUTPUT */

    document
      .getElementById("level")
      .innerText =
        level;


    document
      .getElementById("summary")
      .innerText =
        summary;


    document
      .getElementById("preset")
      .innerText =
        preset;


    document
      .getElementById("textures")
      .innerText =
        textures;


    document
      .getElementById("shadows")
      .innerText =
        shadows;


    document
      .getElementById("reflections")
      .innerText =
        reflections;


    document
      .getElementById("effects")
      .innerText =
        effects;


    document
      .getElementById("volumetrics")
      .innerText =
        volumetrics;


    document
      .getElementById("rt")
      .innerText =
        rt;


    document
      .getElementById("upscaling")
      .innerText =
        upscaling;


    document
      .getElementById("fg")
      .innerText =
        fg;


    document
      .getElementById("tip")
      .innerText =
        game.tip;


    document
      .getElementById("result")
      .style
      .display =
        "block";


    document
      .getElementById("result")
      .scrollIntoView({

        behavior:"smooth",

        block:"nearest"

      });

  };

}
