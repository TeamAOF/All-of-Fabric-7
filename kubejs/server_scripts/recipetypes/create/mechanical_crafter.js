ServerEvents.recipes(e => {

  const REMOVED_RECIPE = [
    'kibe:angel_ring',
    'indrev:shaped/mining_rig_mk4',
    'modern_industrialization:electric_age/machine/assembler/replicator',
    'indrev:shaped/drill_bottom'
  ];
  REMOVED_RECIPE.forEach(id => e.remove({ id: id }));

  // Replicator
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

  // Angel Ring
  e.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": false,
    "key": {
      "U": {
        "item": "kubejs:hyper_nitro_crystal"
      },
      "T": {
        "item": 'ad_astra:gravity_normalizer'
      },
      "C": {
        "item": 'piercingpaxels:upgrade_unbreakable'
      },
      "B": {
        "item": "techreborn:superconductor"
      },
      "S": {
        "item": 'spectrum:take_off_belt'
      },
      "D": {
        "item": 'spectrum:puff_circlet'
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
        "item": 'ad_astra:ostrum_engine'
      },
      "P": {
        "item": 'botania:lens_flare'
      },
      "Q": {
        "item": 'botania:flare_chakram'
      },
      "F": {
        "item": 'besmirchment:final_broom'
      },
      "L": {
        "item": 'artifacts:cloud_in_a_bottle'
      },
      "J": {
        "item": 'artifacts:helium_flamingo'
      },
      "M": {
        "item": "kubejs:mother_of_all_pearls"
      }
    },
    "pattern": [
      'UQTBO',
      'QDEJB',
      'CGHGM',
      'BLESP',
      'OBFPU'
    ],
    "result": {
      "count": 1,
      "item": "kibe:angel_ring"
    }
  }).id('aof:kibe/angel_ring')

  // Mother of All Pearls
  e.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": false,
    "key": {
      "A": {
        "item": 'zenith:mythic_material'
      },
      "B": {
        "item": 'botania:mana_pearl'
      },
      "C": {
        "item": 'powah:aerial_pearl'
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

  // Mining Rig
  e.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": false,
    "key": {
      "A": {
        "item": 'indrev:machine_block'
      },
      "B": {
        "item": 'modern_industrialization:steel_large_plate'
      },
      "C": {
        "item": 'modern_industrialization:steel_gear'
      },
      "D": {
        "item": 'powah:battery_niotic'
      },
      "E": {
        "item": 'createaddition:electric_motor'
      },
      "F": {
        "item": 'techreborn:industrial_machine_casing'
      },
      "G": {
        "item": 'indrev:mining_drill_mk4'
      },
      "H": {
        "item": 'techreborn:industrial_circuit'
      },
      "I": {
        "item": 'modern_industrialization:steel_barrel'
      },
      "J": {
        "item": 'computercraft:computer_normal',
      },
      "K": {
        "item": 'modern_industrialization:steel_drill',
      }
    },
    "pattern": [
      ' BFB ',
      'BGHGB',
      'CEAEC',
      'BJDIB',
      ' BKB '
    ],
    "result": {
      "count": 1,
      "item": 'indrev:mining_rig_mk4'
    }
  }).id('aof:machines/mining_rig')

  // Mining Rig Drill
  e.custom({
    "type": "create:mechanical_crafting",
    "acceptMirrored": false,
    "key": {
      "A": {
        "item": 'indrev:machine_block'
      },
      "B": {
        "item": 'modern_industrialization:steel_large_plate'
      },
      "C": {
        "item": 'computercraft:computer_normal'
      },
      "D": {
        "item": 'powah:battery_blazing'
      },
      "E": {
        "item": 'modern_industrialization:steel_gear'
      },
      "F": {
        "item": 'modern_industrialization:steel_drill'
      }
    },
    "pattern": [
      ' BCB ',
      ' BDB ',
      ' BAB ',
      ' BEB ',
      ' BFB '
    ],
    "result": {
      "count": 1,
      "item": 'indrev:drill_bottom'
    }
  }).id('aof:components/mining_rig_drill')
})