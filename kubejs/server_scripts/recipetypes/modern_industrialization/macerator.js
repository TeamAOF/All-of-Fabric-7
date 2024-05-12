////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes(event => {

  // Zinc
  event.custom({
    "type": "modern_industrialization:macerator",
    "id": "aof:mi_macerator_crushed_raw_zinc",
    "eu": 2,
    "duration": 200,
    "item_inputs": [
      {
        "tag": "c:ores/zinc",
        "amount": 1
      }
    ],
    "item_outputs": [
      {
        "item": "create:crushed_raw_zinc",
        "amount": 2
      }
    ]
  })

  // Prismarine
  event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 200,
    "item_inputs": [
      {
        "item": "geode_plus:prismarine_cluster",
        "amount": 1
      }
    ],
    "item_outputs": [
      {
        "item": "minecraft:prismarine_shard",
        "amount": 3
      }
    ]
  })

  // Lapis
  event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 200,
    "item_inputs": [
      {
        "item": "geode_plus:lapis_cluster",
        "amount": 1
      }
    ],
    "item_outputs": [
      {
        "item": "minecraft:lapis_lazuli",
        "amount": 3
      }
    ]
  })

  // Emerald
  event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 200,
    "item_inputs": [
      {
        "item": "geode_plus:emerald_cluster",
        "amount": 1
      }
    ],
    "item_outputs": [
      {
        "item": "minecraft:emerald",
        "amount": 2
      }
    ]
  })

  // Gold
  event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 200,
    "item_inputs": [
      {
        "item": "geode_plus:nether_gold_nugget_cluster",
        "amount": 1
      }
    ],
    "item_outputs": [
      {
        "item": "minecraft:gold_nugget",
        "amount": 5
      }
    ]
  })

  // Glowstone
  event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 200,
    "item_inputs": [
      {
        "item": "geode_plus:nether_glowstone_cluster",
        "amount": 1
      }
    ],
    "item_outputs": [
      {
        "item": "minecraft:glowstone_dust",
        "amount": 5
      }
    ]
  })

  // Netherite
  event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 200,
    "item_inputs": [
      {
        "item": "geode_plus:nether_ancient_debris_cluster",
        "amount": 1
      }
    ],
    "item_outputs": [
      {
        "item": "minecraft:netherite_scrap",
        "amount": 2
      }
    ]
  })

  
  const spectrum = [
    'topaz',
    'amethyst',
    'citrine',
    'onyx'
];

  spectrum.forEach((item) => { 
  event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 200,
    "item_inputs": [
      {
        "tag": "spectrum:" + item + "_ores",
        "amount": 1
      }
    ],
    "item_outputs": [
      {
        "item": "spectrum:" + item + "_powder",
        "amount": 16
      }
    ]
  })
});

const mythicmetals = [
  'adamantite',
  'aquarium',
  'banglum',
  'carmot',
  'kyber',
  'mythril',
  'orichalcum',
  'osmium',
  'palladium',
  'prometheum',
  'quadrillum',
  'runite',
  'stormyx'
];

const mythicmetals_1 = [
  'morkite',
  'starrite',
];

mythicmetals.forEach((item) => { 
event.custom({
  "type": "modern_industrialization:macerator",
  "eu": 2,
  "duration": 200,
  "item_inputs": [
    {
      "tag": "c:" + item + "_ores",
      "amount": 1
    }
  ],
  "item_outputs": [
    {
      "item": "mythicmetals:raw_" + item,
      "amount": 3
    }
  ]
})
});

mythicmetals_1.forEach((item) => { 
  event.custom({
    "type": "modern_industrialization:macerator",
    "eu": 2,
    "duration": 200,
    "item_inputs": [
      {
        "tag": "c:" + item + "_ores",
        "amount": 1
      }
    ],
    "item_outputs": [
      {
        "item": "mythicmetals:" + item,
        "amount": 3
      }
    ]
  })
  });

})