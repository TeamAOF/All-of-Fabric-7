////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes(event => {

  // Nitro
  event.custom({
    "type": "powah:energizing",
    "id": "aof:powah/hyper_nitro_crystal",
    "ingredients": [
      { "item": "powah:nitro_crystal_block" },
      { "item": "powah:nitro_crystal_block" },
      { "item": "powah:nitro_crystal_block" },
      { "item": "powah:nitro_crystal_block" },
      { "item": "powah:nitro_crystal_block" },
      { "item": "powah:nitro_crystal_block" }
    ],
    "energy": "200000000",
    "result": {
      "item": "kubejs:hyper_nitro_crystal"
    }
  })

  // Niotic
  event.custom({
    "type": "powah:energizing",
    "id": "aof:powah/niotic_crystal_block",
    "ingredients": [
      { "item": "minecraft:diamond_block" },
    ],
    "energy": "2700000",
    "result": {
      "item": "powah:niotic_crystal_block"
    }
  })

  // Blazing
  event.custom({
    "type": "powah:energizing",
    "id": "aof:powah/blazing_crystal_block",
    "ingredients": [
      { "item": "botania:blaze_block" },
    ],
    "energy": "810000",
    "result": {
      "item": "powah:blazing_crystal_block"
    }
  })

  // Spirited
  event.custom({
    "type": "powah:energizing",
    "id": "aof:powah/spirited_crystal_block",
    "ingredients": [
      { "item": "minecraft:emerald_block" },
    ],
    "energy": "9000000",
    "result": {
      "item": "powah:spirited_crystal_block"
    }
  })

   // Energized Steel
   event.custom({
    "type": "powah:energizing",
    "id": "aof:powah/energized_steel_block",
    "ingredients": [
      { "item": "minecraft:gold_block" },
      { "item": "minecraft:iron_block" },
    ],
    "energy": "90000",
    "result": {
      "item": "powah:energized_steel_block",
      "count": 2
    }
  })

  // Modular Core
  event.custom({
    "type": "powah:energizing",
    "id": "aof:powah/modular_core",
    "ingredients": [
      { "item": 'indrev:modular_core' }
    ],
    "energy": "200000000",
    "result": {
      "item": 'indrev:modular_core_activated',
      "count": 1
    }
  })
})
