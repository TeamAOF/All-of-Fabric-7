ServerEvents.recipes(e => {

    const REMOVED_RECIPE = [
        'kibe:angel_ring'
    ];
    REMOVED_RECIPE.forEach(id => e.remove({id: id}));

  e.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": false,
    "key": {
      "U": {
        "item": "kubejs:hyper_nitro_crystal"
      },
      "T": {
        "item": "the_bumblezone:essence_of_the_bees"
      },
      "C": {
        "item": "indrev:modular_core_activated"
      },
      "B": {
        "item": "techreborn:superconductor"
      },
      "S": Item.of('zenith:potion_charm', '{Damage:0,Potion:"zenith:extra_long_flying"}').strongNBT(),
      "G": {
        "item": "kibe:water_ring"
      },
      "E": {
        "item": "kibe:magma_ring"
      },
      "H": {
        "item": "kibe:diamond_ring"
      },
      "O": {
        "item": "ad_astra:calorite_engine"
      },
      "P": {
        "item": "bosses_of_mass_destruction:levitation_block"
      },
      "F": {
        "item": "artifacts:eternal_steak"
      },
      "M": {
        "item": "kubejs:mother_of_all_pearls"
      }
    },
    "pattern": [
        'UPTBO',
        'PSESB',
        'CGHGM',
        'BSESP',
        'OBFPU'
    ],
    "result": {
      "count": 1,
      "item": "kibe:angel_ring"
    }
  }).id('aof:kibe/angel_ring')

  e.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": false,
    "key": {
        "A": {
            "item": 'zenith:mythic_material'
        },
        "B": {
            "item": 'bygonenether:warped_ender_pearl'
        },
        "C": {
            "item": 'minecraft:ender_pearl'
        },
        "D": {
            "item": 'endermanoverhaul:icy_pearl'
        },
        "E": {
            "item": 'ae2:fluix_pearl'
        },
        "F": {
            "item": 'endermanoverhaul:corrupted_pearl'
        },
        "G": {
            "item": 'bosses_of_mass_destruction:charged_ender_pearl'
        },
        "H": {
            "item": 'endermanoverhaul:summoner_pearl'
        },
        "I": {
            "item": 'endermanoverhaul:warped_pearl'
        },
        "J": {
            "item": 'endermanoverhaul:soul_pearl'
        },
        "K": {
            "item": 'endermanoverhaul:ancient_pearl'
        },
        "L": {
            "item": 'endermanoverhaul:bubble_pearl'
        },
        "M": {
            "item": 'endermanoverhaul:crimson_pearl'
        }
    },
    "pattern": [
        '  A  ',
        ' BCD ',
        'EFGHI',
        ' JKL ',
        '  M  '
    ],
    "result": {
        "count": 1,
        "item": "kubejs:mother_of_all_pearls"
    }
  }).id('aof:materials/mother_of_all_pearls')
})