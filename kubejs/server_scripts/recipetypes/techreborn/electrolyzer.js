////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  // Nikolite
event.custom({    
  "type": "techreborn:industrial_electrolyzer",
  "power": 50,
  "time": 600,
  "ingredients": [
    {
      "tag": "c:diamond_dusts",
      "count": 1
    },
    {
      "item": "indrev:nikolite_dust",
      "count": 1,
    }
  ],
  "results": [
    {
      "item": "indrev:enriched_nikolite_dust",
      "count": 2
    },
  ]
})
    })