/*
==========================================================
 GAMETOOLS — GAME-SPECIFIC SETTINGS DATABASE
==========================================================

This file controls which graphics options are shown
for each game inside Settings Finder 2.0.

Values are generated dynamically from:
- GPU performance
- VRAM
- CPU
- resolution
- FPS target
- game type

==========================================================
*/

const GAME_SETTING_PROFILES = {


/* ======================================================
   FORTNITE
====================================================== */

fortnite: {

  settings: [

    {
      id: "renderingMode",
      label: "Rendering Mode",
      type: "rendering"
    },

    {
      id: "viewDistance",
      label: "View Distance",
      type: "cpu"
    },

    {
      id: "shadows",
      label: "Shadows",
      type: "heavy"
    },

    {
      id: "textures",
      label: "Textures",
      type: "vram"
    },

    {
      id: "effects",
      label: "Effects",
      type: "heavy"
    },

    {
      id: "postProcessing",
      label: "Post Processing",
      type: "medium"
    },

    {
      id: "globalIllumination",
      label: "Global Illumination",
      type: "veryHeavy"
    },

    {
      id: "reflections",
      label: "Reflections",
      type: "heavy"
    }

  ]

},


/* ======================================================
   CYBERPUNK 2077
====================================================== */

cyberpunk: {

  settings: [

    {
      id: "textures",
      label: "Texture Quality",
      type: "vram"
    },

    {
      id: "crowdDensity",
      label: "Crowd Density",
      type: "cpu"
    },

    {
      id: "localShadows",
      label: "Local Shadow Quality",
      type: "heavy"
    },

    {
      id: "cascadedShadows",
      label: "Cascaded Shadows Range",
      type: "heavy"
    },

    {
      id: "screenSpaceReflections",
      label: "Screen Space Reflections",
      type: "veryHeavy"
    },

    {
      id: "volumetricFog",
      label: "Volumetric Fog Resolution",
      type: "veryHeavy"
    },

    {
      id: "volumetricClouds",
      label: "Volumetric Cloud Quality",
      type: "heavy"
    },

    {
      id: "ambientOcclusion",
      label: "Ambient Occlusion",
      type: "medium"
    }

  ]

},


/* ======================================================
   BLACK MYTH: WUKONG
====================================================== */

blackmyth: {

  settings: [

    {
      id: "viewDistance",
      label: "View Distance Quality",
      type: "medium"
    },

    {
      id: "antiAliasing",
      label: "Anti-Aliasing Quality",
      type: "medium"
    },

    {
      id: "postEffects",
      label: "Post-Effects Quality",
      type: "medium"
    },

    {
      id: "shadows",
      label: "Shadow Quality",
      type: "heavy"
    },

    {
      id: "textures",
      label: "Texture Quality",
      type: "vram"
    },

    {
      id: "visualEffects",
      label: "Visual Effect Quality",
      type: "heavy"
    },

    {
      id: "hair",
      label: "Hair Quality",
      type: "heavy"
    },

    {
      id: "vegetation",
      label: "Vegetation Quality",
      type: "heavy"
    },

    {
      id: "globalIllumination",
      label: "Global Illumination Quality",
      type: "veryHeavy"
    },

    {
      id: "reflections",
      label: "Reflection Quality",
      type: "veryHeavy"
    }

  ]

},


/* ======================================================
   KINGDOM COME: DELIVERANCE II
====================================================== */

kingdomcome: {

  settings: [

    {
      id: "textures",
      label: "Texture Quality",
      type: "vram"
    },

    {
      id: "shadows",
      label: "Shadow Quality",
      type: "heavy"
    },

    {
      id: "vegetation",
      label: "Vegetation Quality",
      type: "cpu"
    },

    {
      id: "objectQuality",
      label: "Object Quality",
      type: "cpu"
    },

    {
      id: "effects",
      label: "Effects Quality",
      type: "heavy"
    },

    {
      id: "lighting",
      label: "Lighting Quality",
      type: "heavy"
    },

    {
      id: "volumetrics",
      label: "Volumetric Effects",
      type: "veryHeavy"
    },

    {
      id: "viewDistance",
      label: "View Distance",
      type: "cpu"
    }

  ]

},


/* ======================================================
   ALAN WAKE 2
====================================================== */

alanwake: {

  settings: [

    {
      id: "textures",
      label: "Texture Resolution",
      type: "vram"
    },

    {
      id: "textureFiltering",
      label: "Texture Filtering",
      type: "light"
    },

    {
      id: "volumetricLighting",
      label: "Volumetric Lighting",
      type: "veryHeavy"
    },

    {
      id: "spotlightShadows",
      label: "Spotlight Shadow Resolution",
      type: "heavy"
    },

    {
      id: "globalReflections",
      label: "Global Reflections",
      type: "veryHeavy"
    },

    {
      id: "shadowDetail",
      label: "Shadow Detail",
      type: "heavy"
    },

    {
      id: "terrainQuality",
      label: "Terrain Quality",
      type: "medium"
    },

    {
      id: "objectDensity",
      label: "Scattered Object Density",
      type: "cpu"
    }

  ]

},


/* ======================================================
   HELLDIVERS 2
====================================================== */

helldivers: {

  settings: [

    {
      id: "textures",
      label: "Texture Quality",
      type: "vram"
    },

    {
      id: "objectDetail",
      label: "Object Detail Quality",
      type: "cpu"
    },

    {
      id: "renderDistance",
      label: "Render Distance",
      type: "cpu"
    },

    {
      id: "shadows",
      label: "Shadow Quality",
      type: "heavy"
    },

    {
      id: "particles",
      label: "Particle Quality",
      type: "heavy"
    },

    {
      id: "reflections",
      label: "Reflection Quality",
      type: "heavy"
    },

    {
      id: "spaceQuality",
      label: "Space Quality",
      type: "medium"
    },

    {
      id: "vegetation",
      label: "Vegetation & Rubble Density",
      type: "cpu"
    }

  ]

},


/* ======================================================
   RED DEAD REDEMPTION 2
====================================================== */

rdr2: {

  settings: [

    {
      id: "textures",
      label: "Texture Quality",
      type: "vram"
    },

    {
      id: "anisotropicFiltering",
      label: "Anisotropic Filtering",
      type: "light"
    },

    {
      id: "lighting",
      label: "Lighting Quality",
      type: "medium"
    },

    {
      id: "globalIllumination",
      label: "Global Illumination",
      type: "medium"
    },

    {
      id: "shadows",
      label: "Shadow Quality",
      type: "heavy"
    },

    {
      id: "reflections",
      label: "Reflection Quality",
      type: "veryHeavy"
    },

    {
      id: "water",
      label: "Water Quality",
      type: "veryHeavy"
    },

    {
      id: "volumetrics",
      label: "Volumetrics Quality",
      type: "veryHeavy"
    },

    {
      id: "grass",
      label: "Grass Level of Detail",
      type: "heavy"
    }

  ]

},


/* ======================================================
   HOGWARTS LEGACY
====================================================== */

hogwarts: {

  settings: [

    {
      id: "effects",
      label: "Effects Quality",
      type: "heavy"
    },

    {
      id: "materials",
      label: "Material Quality",
      type: "vram"
    },

    {
      id: "fog",
      label: "Fog Quality",
      type: "veryHeavy"
    },

    {
      id: "sky",
      label: "Sky Quality",
      type: "medium"
    },

    {
      id: "foliage",
      label: "Foliage Quality",
      type: "heavy"
    },

    {
      id: "shadows",
      label: "Shadow Quality",
      type: "heavy"
    },

    {
      id: "textures",
      label: "Texture Quality",
      type: "vram"
    },

    {
      id: "viewDistance",
      label: "View Distance Quality",
      type: "cpu"
    },

    {
      id: "population",
      label: "Population Quality",
      type: "cpu"
    }

  ]

},


/* ======================================================
   RESIDENT EVIL REQUIEM
====================================================== */

requiem: {

  settings: [

    {
      id: "textures",
      label: "Texture Quality",
      type: "vram"
    },

    {
      id: "textureFiltering",
      label: "Texture Filtering",
      type: "light"
    },

    {
      id: "mesh",
      label: "Mesh Quality",
      type: "medium"
    },

    {
      id: "shadows",
      label: "Shadow Quality",
      type: "heavy"
    },

    {
      id: "volumetrics",
      label: "Volumetric Lighting",
      type: "veryHeavy"
    },

    {
      id: "reflections",
      label: "Screen Space Reflections",
      type: "heavy"
    },

    {
      id: "ambientOcclusion",
      label: "Ambient Occlusion",
      type: "medium"
    },

    {
      id: "effects",
      label: "Effects Quality",
      type: "heavy"
    }

  ]

},


/* ======================================================
   GTA V ENHANCED
====================================================== */

gta5enhanced: {

  settings: [

    {
      id: "textures",
      label: "Texture Quality",
      type: "vram"
    },

    {
      id: "shaderQuality",
      label: "Shader Quality",
      type: "medium"
    },

    {
      id: "shadows",
      label: "Shadow Quality",
      type: "heavy"
    },

    {
      id: "reflections",
      label: "Reflection Quality",
      type: "heavy"
    },

    {
      id: "grass",
      label: "Grass Quality",
      type: "veryHeavy"
    },

    {
      id: "populationDensity",
      label: "Population Density",
      type: "cpu"
    },

    {
      id: "populationVariety",
      label: "Population Variety",
      type: "cpu"
    },

    {
      id: "distanceScaling",
      label: "Distance Scaling",
      type: "cpu"
    }

  ]

},


/* ======================================================
   MARVEL RIVALS
====================================================== */

marvelrivals: {

  settings: [

    {
      id: "globalIllumination",
      label: "Global Illumination",
      type: "veryHeavy"
    },

    {
      id: "reflections",
      label: "Reflection Quality",
      type: "heavy"
    },

    {
      id: "modelDetail",
      label: "Model Detail",
      type: "medium"
    },

    {
      id: "shadows",
      label: "Shadow Detail",
      type: "heavy"
    },

    {
      id: "textures",
      label: "Texture Detail",
      type: "vram"
    },

    {
      id: "effects",
      label: "Effects Detail",
      type: "heavy"
    },

    {
      id: "foliage",
      label: "Foliage Quality",
      type: "medium"
    }

  ]

},


/* ======================================================
   COUNTER-STRIKE 2
====================================================== */

cs2: {

  settings: [

    {
      id: "shadows",
      label: "Global Shadow Quality",
      type: "competitiveShadow"
    },

    {
      id: "modelTexture",
      label: "Model / Texture Detail",
      type: "vram"
    },

    {
      id: "shader",
      label: "Shader Detail",
      type: "medium"
    },

    {
      id: "particles",
      label: "Particle Detail",
      type: "competitive"
    },

    {
      id: "ambientOcclusion",
      label: "Ambient Occlusion",
      type: "competitive"
    },

    {
      id: "hdr",
      label: "High Dynamic Range",
      type: "light"
    }

  ]

},


/* ======================================================
   VALORANT
====================================================== */

valorant: {

  settings: [

    {
      id: "material",
      label: "Material Quality",
      type: "competitive"
    },

    {
      id: "textures",
      label: "Texture Quality",
      type: "vram"
    },

    {
      id: "detail",
      label: "Detail Quality",
      type: "competitive"
    },

    {
      id: "ui",
      label: "UI Quality",
      type: "light"
    },

    {
      id: "vignette",
      label: "Vignette",
      type: "off"
    },

    {
      id: "bloom",
      label: "Bloom",
      type: "off"
    },

    {
      id: "distortion",
      label: "Distortion",
      type: "off"
    },

    {
      id: "shadows",
      label: "Cast Shadows",
      type: "competitiveShadow"
    }

  ]

},


/* ======================================================
   ELDEN RING
====================================================== */

elden: {

  settings: [

    {
      id: "textures",
      label: "Texture Quality",
      type: "vram"
    },

    {
      id: "antialiasing",
      label: "Antialiasing Quality",
      type: "light"
    },

    {
      id: "ssao",
      label: "SSAO",
      type: "medium"
    },

    {
      id: "depthOfField",
      label: "Depth of Field",
      type: "medium"
    },

    {
      id: "shadows",
      label: "Shadow Quality",
      type: "heavy"
    },

    {
      id: "lighting",
      label: "Lighting Quality",
      type: "medium"
    },

    {
      id: "effects",
      label: "Effects Quality",
      type: "heavy"
    },

    {
      id: "volumetrics",
      label: "Volumetric Quality",
      type: "heavy"
    },

    {
      id: "grass",
      label: "Grass Quality",
      type: "heavy"
    }

  ]

},


/* ======================================================
   BATTLEFIELD 6
====================================================== */

battlefield6: {

  settings: [

    {
      id: "textures",
      label: "Texture Quality",
      type: "vram"
    },

    {
      id: "filtering",
      label: "Texture Filtering",
      type: "light"
    },

    {
      id: "lighting",
      label: "Lighting Quality",
      type: "medium"
    },

    {
      id: "effects",
      label: "Effects Quality",
      type: "heavy"
    },

    {
      id: "postProcess",
      label: "Post Process Quality",
      type: "competitive"
    },

    {
      id: "mesh",
      label: "Mesh Quality",
      type: "cpu"
    },

    {
      id: "terrain",
      label: "Terrain Quality",
      type: "medium"
    },

    {
      id: "undergrowth",
      label: "Undergrowth Quality",
      type: "cpu"
    }

  ]

},


/* ======================================================
   WARZONE
====================================================== */

warzone: {

  settings: [

    {
      id: "textures",
      label: "Texture Resolution",
      type: "vram"
    },

    {
      id: "filtering",
      label: "Texture Filter Anisotropic",
      type: "light"
    },

    {
      id: "particles",
      label: "Particle Quality",
      type: "competitive"
    },

    {
      id: "shadows",
      label: "Shadow Quality",
      type: "competitiveShadow"
    },

    {
      id: "volumetrics",
      label: "Volumetric Quality",
      type: "heavy"
    },

    {
      id: "water",
      label: "Water Quality",
      type: "heavy"
    }

  ]

},


/* ======================================================
   THE WITCHER 3
====================================================== */

witcher3: {

  settings: [

    {
      id: "textures",
      label: "Texture Quality",
      type: "vram"
    },

    {
      id: "shadows",
      label: "Shadow Quality",
      type: "heavy"
    },

    {
      id: "terrain",
      label: "Terrain Quality",
      type: "medium"
    },

    {
      id: "water",
      label: "Water Quality",
      type: "heavy"
    },

    {
      id: "foliage",
      label: "Foliage Visibility Range",
      type: "cpu"
    },

    {
      id: "grass",
      label: "Grass Density",
      type: "cpu"
    },

    {
      id: "backgroundCharacters",
      label: "Number of Background Characters",
      type: "cpu"
    }

  ]

},


/* ======================================================
   STARFIELD
====================================================== */

starfield: {

  settings: [

    {
      id: "shadows",
      label: "Shadow Quality",
      type: "heavy"
    },

    {
      id: "indirectLighting",
      label: "Indirect Lighting",
      type: "veryHeavy"
    },

    {
      id: "reflections",
      label: "Reflections",
      type: "heavy"
    },

    {
      id: "particles",
      label: "Particle Quality",
      type: "medium"
    },

    {
      id: "volumetrics",
      label: "Volumetric Lighting",
      type: "veryHeavy"
    },

    {
      id: "crowdDensity",
      label: "Crowd Density",
      type: "cpu"
    },

    {
      id: "contactShadows",
      label: "Contact Shadows",
      type: "heavy"
    }

  ]

},


/* ======================================================
   MINECRAFT
====================================================== */

minecraft: {

  settings: [

    {
      id: "renderDistance",
      label: "Render Distance",
      type: "cpu"
    },

    {
      id: "simulationDistance",
      label: "Simulation Distance",
      type: "cpu"
    },

    {
      id: "graphics",
      label: "Graphics",
      type: "medium"
    },

    {
      id: "clouds",
      label: "Clouds",
      type: "light"
    },

    {
      id: "particles",
      label: "Particles",
      type: "medium"
    },

    {
      id: "entityShadows",
      label: "Entity Shadows",
      type: "medium"
    }

  ]

},


/* ======================================================
   FORZA HORIZON 5
====================================================== */

forza: {

  settings: [

    {
      id: "textures",
      label: "Environment Texture Quality",
      type: "vram"
    },

    {
      id: "geometry",
      label: "Environment Geometry Quality",
      type: "cpu"
    },

    {
      id: "shadows",
      label: "Shadow Quality",
      type: "heavy"
    },

    {
      id: "reflections",
      label: "Reflection Quality",
      type: "heavy"
    },

    {
      id: "ssao",
      label: "SSAO Quality",
      type: "medium"
    },

    {
      id: "particles",
      label: "Particle Effects Quality",
      type: "medium"
    },

    {
      id: "worldCarDetail",
      label: "World Car Level of Detail",
      type: "cpu"
    }

  ]

},


/* ======================================================
   BALDUR'S GATE 3
====================================================== */

bg3: {

  settings: [

    {
      id: "modelQuality",
      label: "Model Quality",
      type: "medium"
    },

    {
      id: "detailDistance",
      label: "Detail Distance",
      type: "cpu"
    },

    {
      id: "instanceDistance",
      label: "Instance Distance",
      type: "cpu"
    },

    {
      id: "textures",
      label: "Texture Quality",
      type: "vram"
    },

    {
      id: "textureFiltering",
      label: "Texture Filtering",
      type: "light"
    },

    {
      id: "shadows",
      label: "Shadow Quality",
      type: "heavy"
    },

    {
      id: "clouds",
      label: "Cloud Quality",
      type: "heavy"
    },

    {
      id: "crowd",
      label: "Dynamic Crowds",
      type: "cpu"
    }

  ]

}

};
