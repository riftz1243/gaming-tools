/*
==========================================================
 GAMETOOLS — SEO FOR SPECIAL GAME GUIDES
==========================================================
*/

const SPECIAL_GUIDE_SEO = {

  "fortnite-settings.html": {
    title:
      "Best Fortnite PC Settings by GPU | GameTools",

    description:
      "Find the best Fortnite PC settings for your GPU and resolution, with recommendations for competitive FPS, balanced graphics and image quality."
  },

  "cyberpunk-settings.html": {
    title:
      "Best Cyberpunk 2077 PC Settings by GPU | GameTools",

    description:
      "Find the best Cyberpunk 2077 PC settings for your NVIDIA or AMD GPU, including DLSS, FSR, ray tracing and graphics quality recommendations."
  },

  "black-myth-wukong-settings.html": {
    title:
      "Best Black Myth: Wukong PC Settings by GPU | GameTools",

    description:
      "Find the best Black Myth: Wukong PC settings for your GPU and resolution, including upscaling, graphics quality and demanding effects."
  }

};


function applySpecialSeo(){

  const file =
    window.location.pathname
      .split("/")
      .pop();


  const seo =
    SPECIAL_GUIDE_SEO[file];


  if(!seo){
    return;
  }


  /* TITLE */

  document.title =
    seo.title;


  /* DESCRIPTION */

  let description =
    document.querySelector(
      'meta[name="description"]'
    );


  if(!description){

    description =
      document.createElement("meta");

    description.name =
      "description";

    document.head.appendChild(
      description
    );

  }


  description.content =
    seo.description;


  /* CANONICAL */

  let canonical =
    document.querySelector(
      'link[rel="canonical"]'
    );


  if(!canonical){

    canonical =
      document.createElement("link");

    canonical.rel =
      "canonical";

    document.head.appendChild(
      canonical
    );

  }


  canonical.href =
    window.location.origin +
    window.location.pathname;


  /* OPEN GRAPH TITLE */

  let ogTitle =
    document.querySelector(
      'meta[property="og:title"]'
    );


  if(!ogTitle){

    ogTitle =
      document.createElement("meta");

    ogTitle.setAttribute(
      "property",
      "og:title"
    );

    document.head.appendChild(
      ogTitle
    );

  }


  ogTitle.content =
    seo.title;


  /* OPEN GRAPH DESCRIPTION */

  let ogDescription =
    document.querySelector(
      'meta[property="og:description"]'
    );


  if(!ogDescription){

    ogDescription =
      document.createElement("meta");

    ogDescription.setAttribute(
      "property",
      "og:description"
    );

    document.head.appendChild(
      ogDescription
    );

  }


  ogDescription.content =
    seo.description;


  /* OPEN GRAPH TYPE */

  let ogType =
    document.querySelector(
      'meta[property="og:type"]'
    );


  if(!ogType){

    ogType =
      document.createElement("meta");

    ogType.setAttribute(
      "property",
      "og:type"
    );

    document.head.appendChild(
      ogType
    );

  }


  ogType.content =
    "website";

}


applySpecialSeo();
