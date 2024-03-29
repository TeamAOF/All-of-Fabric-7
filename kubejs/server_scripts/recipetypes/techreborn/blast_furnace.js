////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  // Titanium
event.custom({    
  "type": "techreborn:blast_furnace",
  "power": 128,
  "time": 3600,
  "heat": 1700,
  "ingredients": [
    {
      "tag": "c:titanium_dusts"
    }
  ],
  "results": [
    {
      "item": "modern_industrialization:titanium_hot_ingot"
    }
  ]
})

// Chromium
event.custom({    
  "type": "techreborn:blast_furnace",
  "power": 128,
  "time": 800,
  "heat": 1700,
  "ingredients": [
    {
      "tag": "c:chromium_tiny_dusts",
      "count": 9
    }
  ],
  "results": [
    {
      "item": "modern_industrialization:chromium_ingot"
    }
  ]
})

// Platinum
event.custom({    
  "type": "techreborn:blast_furnace",
  "power": 128,
  "time": 3600,
  "heat": 1700,
  "ingredients": [
    {
      "tag": "c:platinum_dusts"
    }
  ],
  "results": [
    {
      "item": "modern_industrialization:platinum_hot_ingot"
    }
  ]
})

// Nikolite
event.custom({    
  "type": "techreborn:blast_furnace",
  "power": 128,
  "time": 800,
  "heat": 1000,
  "ingredients": [
    {
      "item": "indrev:enriched_nikolite_dust"
    },
    {
      "item": "indrev:nikolite_ingot"
    }
  ],
  "results": [
    {
      "item": "indrev:enriched_nikolite_ingot"
    }
  ]
})
    })