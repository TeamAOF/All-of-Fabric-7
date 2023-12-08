ServerEvents.recipes(e => {

  e.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": false,
    "key": {
      "U": { "item": "modern_industrialization:uu_matter_bucket" },
      "T": { "item": "modern_industrialization:quantum_tank" },
      "C": { "item": "modern_industrialization:quantum_circuit" },
      "B": { "item": "modern_industrialization:quantum_barrel" },
      "S": { "item": "modern_industrialization:singularity" },
      "G": { "item": "modern_industrialization:quantum_upgrade" },
      "H": { "item": "modern_industrialization:quantum_machine_hull" },
    },
    "pattern": [
      'UTCBU',
      'TSGSB',
      'CGHGC',
      'BSGST',
      'UBCTU'
    ],
    "result": {
      "count": 1,
      "item": "modern_industrialization:replicator"
    }
  })

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
  "S": {
    "item": "botania:spawner_mover"
  },
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