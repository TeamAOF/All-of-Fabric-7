////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  // Wood Pulp
  event.custom({
    "type": "techreborn:grinder",
    "power": 3,
    "time": 100,
    "ingredients": [
      {
        "tag": "minecraft:logs"
      }
    ],
    "results": [
      {
        "item": "modern_industrialization:wood_pulp",
        "count": 10
      }
    ]
  })

  // Nikolite
  event.custom({
    "type": "techreborn:grinder",
    "power": 3,
    "time": 200,
    "ingredients": [
      {
        "tag": "c:nikolite_ores"
      }
    ],
    "results": [
      {
        "item": "indrev:nikolite_dust",
        "count": 7
      }
    ]
  })

  // Mythic Metals
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
      "type": "techreborn:grinder",
      "power": 3,
      "time": 200,
      "ingredients": [
        {
          "tag": "c:" + item + "_ores"
        }
      ],
      "results": [
        {
          "item": "mythicmetals:raw_" + item,
          "count": 2
        }
      ]
    })
  })

  mythicmetals_1.forEach((item) => {
    event.custom({
      "type": "techreborn:grinder",
      "power": 3,
      "time": 200,
      "ingredients": [
        {
          "tag": "c:" + item + "_ores"
        }
      ],
      "results": [
        {
          "item": "mythicmetals:" + item,
          "count": 2
        }
      ]
    })
  })

})