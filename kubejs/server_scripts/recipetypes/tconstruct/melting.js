ServerEvents.recipes(event => {

  const materials = [
    'tin',
    'lead',
    'silver',
    'nickel',
    'tungsten',
    'uranium',
  ];

  const materials_custom = [
    'antimony',
    'iridium',
  ];

  // Ores
  materials.forEach((item) => {
    event.custom({
      "type": "tconstruct:melting",
      "ingredient": {
        "tag": "c:" + item + "_ores"
      },
      "result": {
        "fluid": "tconstruct:molten_" + item,
        "amount": 18000
      },
      "temperature": 500,
      "time": 50
    })
  })

  materials_custom.forEach((item) => {
    event.custom({
      "type": "tconstruct:melting",
      "ingredient": {
        "tag": "c:" + item + "_ores"
      },
      "result": {
        "fluid": "kubejs:molten_" + item,
        "amount": 18000
      },
      "temperature": 500,
      "time": 50
    })
  })

  materials.forEach((item) => {
    event.custom({
      "type": "tconstruct:melting",
      "ingredient": {
        "tag": "c:raw_" + item + "_ores"
      },
      "result": {
        "fluid": "tconstruct:molten_" + item,
        "amount": 9000
      },
      "temperature": 500,
      "time": 50
    })
  })

  materials_custom.forEach((item) => {
    event.custom({
      "type": "tconstruct:melting",
      "ingredient": {
        "tag": "c:raw_" + item + "_ores"
      },
      "result": {
        "fluid": "kubejs:molten_" + item,
        "amount": 9000
      },
      "temperature": 500,
      "time": 50
    })
  })

  // Dusts
  materials_custom.forEach((item) => {
    event.custom({
      "type": "tconstruct:melting",
      "ingredient": {
        "tag": "c:" + item + "_dusts"
      },
      "result": {
        "fluid": "kubejs:molten_" + item,
        "amount": 9000
      },
      "temperature": 950,
      "time": 50
    })

    // Ingots
    event.custom({
      "type": "tconstruct:melting",
      "ingredient": {
        "tag": "c:" + item + "_ingots"
      },
      "result": {
        "fluid": "kubejs:molten_" + item,
        "amount": 9000
      },
      "temperature": 950,
      "time": 50
    })

    // Plates
    event.custom({
      "type": "tconstruct:melting",
      "ingredient": {
        "tag": "c:" + item + "_plates"
      },
      "result": {
        "fluid": "kubejs:molten_" + item,
        "amount": 9000
      },
      "temperature": 950,
      "time": 50
    })
  })
})
