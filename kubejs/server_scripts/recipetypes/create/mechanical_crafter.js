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
})