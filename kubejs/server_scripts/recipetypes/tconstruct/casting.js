ServerEvents.recipes(event => {

  const aof_materials = [
    'antimony',
    'iridium',
  ];

  // Blocks
  aof_materials.forEach((item) => {
    event.custom({
      "type": "tconstruct:casting_basin",
      "fluid": {
        "name": "kubejs:molten_" + item,
        "amount": 81000
      },
      "result": "modern_industrialization:" + item + "_block",
      "cooling_time": 225
    })

    // Ingots
    event.custom({
      "type": "tconstruct:casting_table",
      "cast": {
        "item": "tconstruct:ingot_cast"
      },
      "fluid": {
        "name": "kubejs:molten_" + item,
        "amount": 9000
      },
      "result": "modern_industrialization:" + item + "_ingot",
      "cooling_time": 45
    })
  })

  // Large Plates
  const large_plates = [
    'tin',
    'tungsten',
    'steel',
    'gold',
    'invar',
    'aluminum',
    'bronze',
    'copper',
    'iron'
  ];

  large_plates.forEach((item) => {
    event.custom({
      "type": "tconstruct:casting_table",
      "cast": {
        "item": "tconstruct:large_plate_cast"
      },
      "fluid": {
        "name": "tconstruct:molten_" + item,
        "amount": 36000
      },
      "result": "modern_industrialization:" + item + "_large_plate",
      "cooling_time": 90
    })
    event.custom({
      "type": "tconstruct:casting_table",
      "cast": {
        "item": "tconstruct:large_plate_cast"
      },
      "fluid": {
        "name": "tconstruct:molten_diamond",
        "amount": 32400
      },
      "result": "modern_industrialization:diamond_large_plate",
      "cooling_time": 90
    })
  })

  // Plates
  const aof_fluids = [
    'iridium',
  ];

  aof_fluids.forEach((item) => {
    event.custom({
      "type": "tconstruct:casting_table",
      "cast": {
        "item": "tconstruct:plate_cast"
      },
      "fluid": {
        "name": "kubejs:molten_" + item,
        "amount": 9000
      },
      "result": "modern_industrialization:" + item + "_plate",
      "cooling_time": 45
    })
  })
})
