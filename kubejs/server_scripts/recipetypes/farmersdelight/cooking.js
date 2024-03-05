////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {


  // Undead Kebab
  event.remove({id: "frightsdelight:farmersdelight/cooking/undead_kebab"})
  event.custom({
  "type": "farmersdelight:cooking",
  "cookingtime": 100,
  "experience": 1.0,
  "recipie_book_tab": "meals",
  "ingredients": [
    {
      "item": "minecraft:rotten_flesh"
    },
    {
      "item": "minecraft:phantom_membrane"
    },
    {
      "item": "minecraft:spider_eye"
    },
    {
      "item": 'farmersdelight:rotten_tomato'
    }
  ],
  "result": {
    "item": "frightsdelight:undead_kebab",
    "count": 1
  },
  "container": {
    "item": "minecraft:stick"
    }
  })

    // Undead Kebab
    event.remove({id: "frightsdelight:farmersdelight/cooking/monster_mash"})
    event.custom({
    "type": "farmersdelight:cooking",
    "cookingtime": 75,
    "experience": 1.0,
    "recipie_book_tab": "meals",
    "ingredients": [
      {
        "item": "minecraft:rotten_flesh"
      },
      {
        "item": "minecraft:phantom_membrane"
      },
      {
        "item": "minecraft:spider_eye"
      },
      {
        "item": 'minecraft:poisonous_potato'
      }
    ],
    "result": {
      "item": "frightsdelight:monster_mash",
      "count": 1
    },
    "container": {
      "item": "minecraft:bowl"
      }
    })
})
