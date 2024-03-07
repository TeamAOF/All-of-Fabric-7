////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  
  // Singularity
    event.custom({    
        "type": "modern_industrialization:electrolyzer",
        "id": "modern_industrialization:materials/electrolyzer/uu_matter",
        "eu": 80,
        "duration": 2500,
        "item_inputs": [
          {
            "item": "modern_industrialization:singularity",
            "amount": 1,
            "probability": 0
          }
        ],
        "fluid_outputs": [
          {
            "fluid": "modern_industrialization:uu_matter",
            "amount": 1
          }
        ]
})

 // Nikolite
 event.custom({    
  "type": "modern_industrialization:electrolyzer",
  "id": "aof:enriched_nikolite_dust_mi",
  "eu": 4,
  "duration": 400,
  "item_inputs": [
    {
      "item": "indrev:nikolite_dust",
    }
  ],
  "item_outputs": [
    {
      "item": "indrev:enriched_nikolite_dust",
      "amount": 1
    }
  ]
})
    })