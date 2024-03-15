ServerEvents.recipes(event => {

    const plates = [
        'bronze',
        'tin',
        'lead',
        'silver',
        'nickel',
        'tungsten',
        'titanium',
        'chromium',
        'invar',
        'nickel',
        'platinum',
        'stainless_steel',
        'steel',
        'aluminum',
        'electrum'

    ];

    plates.forEach((item) => {
        event.custom({
            "type": "create:pressing",
            "ingredients": [
                {
                    "tag": "c:" + item + "_ingots"
                }
            ],
            "results": [
                {
                    "item": "modern_industrialization:" + item + "_plate",
                    "count": 1
                },
            ],
        })
    });

    event.custom({
    "type": "create:pressing",
    "ingredients": [
        {
            "item": "techreborn:refined_iron_ingot"
        }
    ],
    "results": [
        {
            "item": "techreborn:refined_iron_plate",
            "count": 1
        },
    ],
})

    event.custom({
    "type": "create:compacting",
    "ingredients": [
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "minecraft:dripstone_block"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "ad_astra:glacio_stone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "minecraft:blackstone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "regions_unexplored:mossy_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "minecraft:end_stone"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "ae2:sky_stone_block"
        },
        {
            "item": "kibe:cobblestone_generator_mk5"
        }
    ],
    "results": [
        {
            "item": "kubejs:mixed_stone_ball",
            "count": 1
        }
    ],
    "heatRequirement": "superheated"
}).id('z_aof:compacting/mixed_stone_ball')

event.custom({
    type: "create:compacting",
    ingredients: [
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "regions_unexplored:ash"
        },
        {
            item: "kubejs:mixed_stone_ball"
        }
    ],
    results: [
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    heatRequirement: 'superheated'
}).id('z_aof:compacting/ultra_compressed_mixed_stone_ball')

event.custom({
    type: "create:compacting",
    ingredients: [
        {
            fluid: "minecraft:water",
            amount: 40500
        },
        {
            fluid: "minecraft:lava",
            amount: 40500
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    results: [
        {
            item: "minecraft:stone"
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    heatRequirement: 'heated'
}).id('z_aof:compacting/stone')

event.custom({
    type: "create:compacting",
    ingredients: [
        {
            fluid: "minecraft:water",
            amount: 40500
        },
        {
            fluid: "minecraft:lava",
            amount: 40500
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    results: [
        {
            item: "minecraft:granite"
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    heatRequirement: 'heated'
}).id('z_aof:compacting/granite')

event.custom({
    type: "create:compacting",
    ingredients: [
        {
            fluid: "minecraft:water",
            amount: 40500
        },
        {
            fluid: "minecraft:lava",
            amount: 40500
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    results: [
        {
            item: "minecraft:diorite"
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    heatRequirement: 'heated'
}).id('z_aof:compacting/diorite')

event.custom({
    type: "create:compacting",
    ingredients: [
        {
            fluid: "minecraft:water",
            amount: 40500
        },
        {
            fluid: "minecraft:lava",
            amount: 40500
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    results: [
        {
            item: "minecraft:andesite"
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    heatRequirement: 'heated'
}).id('z_aof:compacting/andesite')

event.custom({
    type: "create:compacting",
    ingredients: [
        {
            fluid: "minecraft:water",
            amount: 40500
        },
        {
            fluid: "minecraft:lava",
            amount: 40500
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    results: [
        {
            item: "minecraft:deepslate"
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    heatRequirement: 'heated'
}).id('z_aof:compacting/deepslate')

event.custom({
    type: "create:compacting",
    ingredients: [
        {
            fluid: "minecraft:water",
            amount: 40500
        },
        {
            fluid: "minecraft:lava",
            amount: 40500
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    results: [
        {
            item: "minecraft:cobbled_deepslate"
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    heatRequirement: 'heated'
}).id('z_aof:compacting/cobbled_deepslate')

event.custom({
    type: "create:compacting",
    ingredients: [
        {
            fluid: "minecraft:water",
            amount: 81000
        },
        {
            fluid: "minecraft:lava",
            amount: 81000
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    results: [
        {
            item: "minecraft:calcite"
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    heatRequirement: 'heated'
}).id('z_aof:compacting/calcite')

event.custom({
    type: "create:compacting",
    ingredients: [
        {
            fluid: "minecraft:water",
            amount: 81000
        },
        {
            fluid: "minecraft:lava",
            amount: 81000
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    results: [
        {
            item: "minecraft:tuff"
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    heatRequirement: 'heated'
}).id('z_aof:compacting/tuff')

event.custom({
    type: "create:compacting",
    ingredients: [
        {
            fluid: "minecraft:water",
            amount: 40500
        },
        {
            fluid: "minecraft:lava",
            amount: 40500
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    results: [
        {
            item: "minecraft:dripstone_block"
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    heatRequirement: 'heated'
}).id('z_aof:compacting/dripstone_block')

event.custom({
    type: "create:compacting",
    ingredients: [
        {
            fluid: "minecraft:water",
            amount: 40500
        },
        {
            fluid: "minecraft:lava",
            amount: 40500
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    results: [
        {
            item: "minecraft:cobblestone"
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    heatRequirement: 'heated'
}).id('z_aof:compacting/cobblestone')

event.custom({
    type: "create:compacting",
    ingredients: [
        {
            fluid: "minecraft:water",
            amount: 40500
        },
        {
            fluid: "minecraft:lava",
            amount: 40500
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    results: [
        {
            item: "minecraft:blackstone"
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    heatRequirement: 'heated'
}).id('z_aof:compacting/blackstone')

event.custom({
    type: "create:compacting",
    ingredients: [
        {
            fluid: "minecraft:water",
            amount: 40500
        },
        {
            fluid: "minecraft:lava",
            amount: 40500
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    results: [
        {
            item: "ad_astra:moon_cobblestone"
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    heatRequirement: 'heated'
}).id('z_aof:compacting/moon_cobblestone')

event.custom({
    type: "create:compacting",
    ingredients: [
        {
            fluid: "minecraft:water",
            amount: 40500
        },
        {
            fluid: "minecraft:lava",
            amount: 40500
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    results: [
        {
            item: "ad_astra:mars_cobblestone"
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    heatRequirement: 'heated'
}).id('z_aof:compacting/mars_cobblestone')

event.custom({
    type: "create:compacting",
    ingredients: [
        {
            fluid: "minecraft:water",
            amount: 40500
        },
        {
            fluid: "minecraft:lava",
            amount: 40500
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    results: [
        {
            item: "ad_astra:venus_cobblestone"
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    heatRequirement: 'heated'
}).id('z_aof:compacting/venus_cobblestone')

event.custom({
    type: "create:compacting",
    ingredients: [
        {
            fluid: "minecraft:water",
            amount: 40500
        },
        {
            fluid: "minecraft:lava",
            amount: 40500
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    results: [
        {
            item: "ad_astra:mercury_cobblestone"
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    heatRequirement: 'heated'
}).id('z_aof:compacting/murcury_cobblestone')

event.custom({
    type: "create:compacting",
    ingredients: [
        {
            fluid: "minecraft:water",
            amount: 40500
        },
        {
            fluid: "minecraft:lava",
            amount: 40500
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    results: [
        {
            item: "ad_astra:glacio_cobblestone"
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    heatRequirement: 'heated'
}).id('z_aof:compacting/glacio_cobblestone')

event.custom({
    type: "create:compacting",
    ingredients: [
        {
            fluid: "minecraft:water",
            amount: 40500
        },
        {
            fluid: "minecraft:lava",
            amount: 40500
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        },
        {
            item: "minecraft:blue_ice"
        },
        {
            item: "minecraft:blue_ice"
        },
        {
            item: "minecraft:blue_ice"
        },
        {
            item: "minecraft:blue_ice"
        },
        {
            item: "minecraft:blue_ice"
        },
        {
            item: "minecraft:blue_ice"
        },
        {
            item: "minecraft:blue_ice"
        },
        {
            item: "minecraft:blue_ice"
        }
    ],
    results: [
        {
            item: "ad_astra:permafrost"
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    heatRequirement: 'heated'
}).id('z_aof:compacting/permafrost')

event.custom({
    type: "create:compacting",
    ingredients: [
        {
            fluid: "minecraft:water",
            amount: 40500
        },
        {
            fluid: "minecraft:lava",
            amount: 40500
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    results: [
        {
            item: "blockus:limestone"
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    heatRequirement: 'heated'
}).id('z_aof:compacting/limestone')

event.custom({
    type: "create:compacting",
    ingredients: [
        {
            fluid: "minecraft:water",
            amount: 40500
        },
        {
            fluid: "minecraft:lava",
            amount: 40500
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    results: [
        {
            item: "blockus:marble"
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    heatRequirement: 'heated'
}).id('z_aof:compacting/marble')

event.custom({
    type: "create:compacting",
    ingredients: [
        {
            fluid: "minecraft:water",
            amount: 40500
        },
        {
            fluid: "minecraft:lava",
            amount: 40500
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    results: [
        {
            item: "blockus:bluestone"
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    heatRequirement: 'heated'
}).id('z_aof:compacting/bluestone')

event.custom({
    type: "create:compacting",
    ingredients: [
        {
            fluid: "minecraft:water",
            amount: 40500
        },
        {
            fluid: "minecraft:lava",
            amount: 40500
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    results: [
        {
            item: "blockus:viridite"
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    heatRequirement: 'heated'
}).id('z_aof:compacting/viridite')

event.custom({
    type: "create:compacting",
    ingredients: [
        {
            fluid: "minecraft:water",
            amount: 40500
        },
        {
            fluid: "minecraft:lava",
            amount: 40500
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    results: [
        {
            item: "blockus:soul_sandstone"
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    heatRequirement: 'heated'
}).id('z_aof:compacting/soul_sandstone')

event.custom({
    type: "create:compacting",
    ingredients: [
        {
            fluid: "minecraft:water",
            amount: 40500
        },
        {
            fluid: "minecraft:lava",
            amount: 40500
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    results: [
        {
            item: "create:limestone"
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    heatRequirement: 'heated'
}).id('z_aof:compacting/c_limestone')

event.custom({
    type: "create:compacting",
    ingredients: [
        {
            fluid: "minecraft:water",
            amount: 40500
        },
        {
            fluid: "minecraft:lava",
            amount: 40500
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    results: [
        {
            item: "create:scoria"
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    heatRequirement: 'heated'
}).id('z_aof:compacting/scoria')

event.custom({
    type: "create:compacting",
    ingredients: [
        {
            fluid: "minecraft:water",
            amount: 40500
        },
        {
            fluid: "minecraft:lava",
            amount: 40500
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    results: [
        {
            item: "create:scorchia"
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    heatRequirement: 'heated'
}).id('z_aof:compacting/scorchia')

event.custom({
    type: "create:compacting",
    ingredients: [
        {
            fluid: "minecraft:water",
            amount: 40500
        },
        {
            fluid: "minecraft:lava",
            amount: 40500
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    results: [
        {
            item: "naturalist:shellstone"
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    heatRequirement: 'heated'
}).id('z_aof:compacting/shellstone')

event.custom({
    type: "create:compacting",
    ingredients: [
        {
            fluid: "minecraft:water",
            amount: 40500
        },
        {
            fluid: "minecraft:lava",
            amount: 40500
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    results: [
        {
            item: "twigs:bloodstone"
        },
        {
            item: "kubejs:ultra_compressed_mixed_stone_ball"
        }
    ],
    heatRequirement: 'heated'
}).id('z_aof:compacting/bloodstone')
})
