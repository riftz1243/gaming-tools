/*
==========================================================
 GAMETOOLS — GPU DATABASE 2.0
==========================================================

 power:
 Internal relative performance category used by GameTools.
 It is NOT a benchmark score.

 vram:
 VRAM capacity in GB for the listed desktop GPU.

 framegen:
 Whether GameTools can consider modern NVIDIA-style
 hardware Frame Generation for this card.

==========================================================
*/

const GPU_DATABASE = {


  /* =====================================================
     NVIDIA RTX 30 SERIES
  ===================================================== */

  "3060": {
    name: "GeForce RTX 3060",
    brand: "nvidia",
    power: 1.20,
    vram: 12,
    framegen: false
  },

  "3060ti": {
    name: "GeForce RTX 3060 Ti",
    brand: "nvidia",
    power: 1.45,
    vram: 8,
    framegen: false
  },

  "3070": {
    name: "GeForce RTX 3070",
    brand: "nvidia",
    power: 1.60,
    vram: 8,
    framegen: false
  },

  "3080": {
    name: "GeForce RTX 3080",
    brand: "nvidia",
    power: 2.00,
    vram: 10,
    framegen: false
  },


  /* =====================================================
     NVIDIA RTX 40 SERIES
  ===================================================== */

  "4060": {
    name: "GeForce RTX 4060",
    brand: "nvidia",
    power: 1.35,
    vram: 8,
    framegen: true
  },

  "4060ti": {
    name: "GeForce RTX 4060 Ti",
    brand: "nvidia",
    power: 1.60,
    vram: 8,
    framegen: true
  },

  "4070": {
    name: "GeForce RTX 4070",
    brand: "nvidia",
    power: 2.10,
    vram: 12,
    framegen: true
  },

  "4070s": {
    name: "GeForce RTX 4070 SUPER",
    brand: "nvidia",
    power: 2.35,
    vram: 12,
    framegen: true
  },

  "4080": {
    name: "GeForce RTX 4080",
    brand: "nvidia",
    power: 3.05,
    vram: 16,
    framegen: true
  },

  "4090": {
    name: "GeForce RTX 4090",
    brand: "nvidia",
    power: 4.00,
    vram: 24,
    framegen: true
  },


  /* =====================================================
     NVIDIA RTX 50 SERIES
  ===================================================== */

  "5060": {
    name: "GeForce RTX 5060",
    brand: "nvidia",
    power: 1.85,
    vram: 8,
    framegen: true
  },

  "5060ti": {
    name: "GeForce RTX 5060 Ti",
    brand: "nvidia",
    power: 2.15,
    vram: 16,
    framegen: true
  },

  "5070": {
    name: "GeForce RTX 5070",
    brand: "nvidia",
    power: 2.65,
    vram: 12,
    framegen: true
  },

  "5070ti": {
    name: "GeForce RTX 5070 Ti",
    brand: "nvidia",
    power: 3.15,
    vram: 16,
    framegen: true
  },

  "5080": {
    name: "GeForce RTX 5080",
    brand: "nvidia",
    power: 3.90,
    vram: 16,
    framegen: true
  },

  "5090": {
    name: "GeForce RTX 5090",
    brand: "nvidia",
    power: 4.90,
    vram: 32,
    framegen: true
  },


  /* =====================================================
     AMD RX 6000 SERIES
  ===================================================== */

  "6600": {
    name: "Radeon RX 6600",
    brand: "amd",
    power: 1.00,
    vram: 8,
    framegen: false
  },

  "6700xt": {
    name: "Radeon RX 6700 XT",
    brand: "amd",
    power: 1.50,
    vram: 12,
    framegen: false
  },


  /* =====================================================
     AMD RX 7000 SERIES
  ===================================================== */

  "7600": {
    name: "Radeon RX 7600",
    brand: "amd",
    power: 1.20,
    vram: 8,
    framegen: false
  },

  "7700xt": {
    name: "Radeon RX 7700 XT",
    brand: "amd",
    power: 1.75,
    vram: 12,
    framegen: false
  },

  "7800xt": {
    name: "Radeon RX 7800 XT",
    brand: "amd",
    power: 2.20,
    vram: 16,
    framegen: false
  },

  "7900xt": {
    name: "Radeon RX 7900 XT",
    brand: "amd",
    power: 2.80,
    vram: 20,
    framegen: false
  },

  "7900xtx": {
    name: "Radeon RX 7900 XTX",
    brand: "amd",
    power: 3.35,
    vram: 24,
    framegen: false
  },


  /* =====================================================
     AMD RX 9000 SERIES
  ===================================================== */

  "9060xt": {
    name: "Radeon RX 9060 XT",
    brand: "amd",
    power: 1.70,
    vram: 16,
    framegen: false
  },

  "9070": {
    name: "Radeon RX 9070",
    brand: "amd",
    power: 2.70,
    vram: 16,
    framegen: false
  },

  "9070xt": {
    name: "Radeon RX 9070 XT",
    brand: "amd",
    power: 3.05,
    vram: 16,
    framegen: false
  }

};


/* ========================================================
   GPU SELECT BUILDER
======================================================== */

function populateGpuSelect(
  selectId,
  defaultGpu = "5060"
){

  const select =
    document.getElementById(selectId);

  if(!select){
    return;
  }

  select.innerHTML = "";


  const groups = {

    "NVIDIA RTX 30 Series": [
      "3060",
      "3060ti",
      "3070",
      "3080"
    ],

    "NVIDIA RTX 40 Series": [
      "4060",
      "4060ti",
      "4070",
      "4070s",
      "4080",
      "4090"
    ],

    "NVIDIA RTX 50 Series": [
      "5060",
      "5060ti",
      "5070",
      "5070ti",
      "5080",
      "5090"
    ],

    "AMD Radeon RX 6000": [
      "6600",
      "6700xt"
    ],

    "AMD Radeon RX 7000": [
      "7600",
      "7700xt",
      "7800xt",
      "7900xt",
      "7900xtx"
    ],

    "AMD Radeon RX 9000": [
      "9060xt",
      "9070",
      "9070xt"
    ]

  };


  Object.entries(groups)
    .forEach(([label,gpuIds]) => {

      const group =
        document.createElement("optgroup");

      group.label = label;


      gpuIds.forEach(id => {

        const gpu =
          GPU_DATABASE[id];

        if(!gpu){
          return;
        }


        const option =
          document.createElement("option");

        option.value = id;

        option.textContent =
          `${gpu.name} — ${gpu.vram} GB`;


        if(id === defaultGpu){
          option.selected = true;
        }


        group.appendChild(option);

      });


      select.appendChild(group);

    });

}
