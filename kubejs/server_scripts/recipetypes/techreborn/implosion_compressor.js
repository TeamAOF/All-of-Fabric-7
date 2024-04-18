////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  
    event.custom({    
      "type": "techreborn:implosion_compressor",
      "power": 60,
      "time": 400,
      "ingredients": [
        {
          "tag": "c:tungsten_tiny_dusts",
          "count": 9
        },
        {
          "item": "modern_industrialization:industrial_tnt",
        }
      ],
      "results": [
        {
          "item": "modern_industrialization:tungsten_ingot"
        }
      ]
})
    })