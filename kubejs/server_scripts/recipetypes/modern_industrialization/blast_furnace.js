////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes(event => {


  // Nikolite
  event.custom({
    "type": "modern_industrialization:blast_furnace",
    "id": "aof:enriched_nikolite_ingot_mi",
    "eu": 4,
    "duration": 300,
    "item_inputs": [
      {
        "item": "indrev:enriched_nikolite_dust",
      }
    ],
    "item_outputs": [
      {
        "item": "indrev:enriched_nikolite_ingot",
        "amount": 1
      }
    ]
  })
})