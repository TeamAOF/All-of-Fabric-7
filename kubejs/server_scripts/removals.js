ServerEvents.recipes((event) => {

    const id = [
        'ad_astra:hammering/iron_plate',
        'ad_astra:hammering/steel_plate',
        'ad_astra:recipes/iron_rod',
        'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot',
        'ad_astra:recipes/steel_ingot_from_smelting_iron_ingot',
        'bewitchment:raw_silver',
        'bewitchment:raw_silver_block',
        'bewitchment:silver_ingot_from_blasting_deepslate_silver_ore',
        'bewitchment:silver_ingot_from_blasting_raw_silver',
        'bewitchment:silver_ingot_from_smelting_deepslate_silver_ore',
        'bewitchment:silver_ingot_from_smelting_raw_silver',
        'create:blasting/platinum_ingot_compat_modern_industrialization',
        'create:crafting/appliances/dough',
        'createfood:beachparty/mini_fridge_mixing/apple_popsicle_from_mini_fridge',
        'createfood:beachparty/mini_fridge_mixing/berry_popsicle_from_mini_fridge',
        'createfood:beachparty/mini_fridge_mixing/glow_berry_popsicle_from_mini_fridge',
        'createfood:beachparty/mini_fridge_mixing/melon_popsicle_from_mini_fridge',
        'create:mixing/plant_oil',
        'create:smelting/platinum_ingot_compat_modern_industrialization',
        'croptopia:cabbage_to_cabbage_seed_shapeless',
        'croptopia:onion_to_onion_seed_shapeless',
        'croptopia:rice_to_rice_seed_shapeless',
        'croptopia:shaped_bacon',
        'croptopia:tomato_to_tomato_seed_shapeless',
        'farmersdelight:wheat_dough',
        'farmersdelight:wheat_dough_from_eggs',
        'farmersdelight:wheat_dough_from_water',
        'indrev:blasting/silver_ingot_from_ore',
        'indrev:blasting/tungsten_ingot_from_ore',
        'indrev:blasting/tungsten_ingot_from_raw_ores',
        'indrev:blasting/tungsten_ingot_from_smelting',
        'indrev:compressing/empty_upgrade',
        'indrev:infusing/steel_dust',
        'indrev:shaped/raw_lead_block',
        'indrev:shaped/raw_silver_block',
        'indrev:shapeless/copper_ingot_from_block',
        'indrev:shapeless/raw_lead',
        'indrev:shapeless/raw_silver',
        'indrev:shapeless/steel_dust',
        'indrev:smelting/silver_ingot_from_ore',
        'indrev:smelting/tungsten_ingot_from_ore',
        'indrev:smelting/tungsten_ingot_from_raw_ores',
        'indrev:smelting/tungsten_ingot_from_smelting',
        'iron-jetpacks:advanced_coil',
        'iron-jetpacks:basic_coil',
        'iron-jetpacks:bubble_capacitor',
        'iron-jetpacks:bubble_cell',
        'iron-jetpacks:electrum_capacitor',
        'iron-jetpacks:electrum_cell',
        'iron-jetpacks:elite_coil',
        'iron-jetpacks:expert_coil',
        'iron-jetpacks:netherite_capacitor',
        'iron-jetpacks:netherite_cell',
        'iron-jetpacks:platinum_capacitor',
        'iron-jetpacks:platinum_cell',
        'iron-jetpacks:steel_capacitor',
        'iron-jetpacks:steel_cell',
        'iron-jetpacks:ultimate_coil',
        'modern_industrialization:compat/ae2/quarry_ae2',
        'modern_industrialization:compat/indrev/macerator/_c_silver_ores_to_indrev_raw_silver',
        'modern_industrialization:compat/indrev/quarry_nikolite',
        'modern_industrialization:compat/techreborn/macerator/minecraft_ender_pearl_to_techreborn_ender_pearl_dust',
        'modern_industrialization:materials/electrolyzer/uu_matter',
        'modern_industrialization:quarry/bronze',
        'modern_industrialization:quarry/gold',
        'modern_industrialization:quarry/steel',
        'modern_industrialization:quarry/titanium',
        'regions_unexplored:raw_redstone_block',
        'tconstruct:smeltery/casting/metal/platinum/block',
        'tconstruct:smeltery/casting/metal/platinum/ingot_gold_cast',
        'tconstruct:smeltery/casting/metal/platinum/ingot_sand_cast',
        'tconstruct:smeltery/casting/metal/platinum/nugget_gold_cast',
        'tconstruct:smeltery/casting/metal/platinum/nugget_sand_cast',
        'tconstruct:smeltery/casting/metal/platinum/plate_gold_cast',
        'tconstruct:smeltery/casting/metal/platinum/plate_sand_cast',
        'tconstruct:smeltery/melting/metal/platinum/dust',
        'tconstruct:smeltery/casting/metal/tungsten/block',
        'tconstruct:smeltery/casting/metal/tungsten/ingot_gold_cast',
        'tconstruct:smeltery/casting/metal/tungsten/ingot_sand_cast',
        'tconstruct:smeltery/casting/metal/tungsten/nugget_gold_cast',
        'tconstruct:smeltery/casting/metal/tungsten/nugget_sand_cast',
        'tconstruct:smeltery/casting/metal/tungsten/plate_gold_cast',
        'tconstruct:smeltery/casting/metal/tungsten/plate_sand_cast',
        'tconstruct:smeltery/casting/metal/aluminum/block',
        'tconstruct:smeltery/casting/metal/aluminum/ingot_gold_cast',
        'tconstruct:smeltery/casting/metal/aluminum/ingot_sand_cast',
        'tconstruct:smeltery/casting/metal/aluminum/nugget_gold_cast',
        'tconstruct:smeltery/casting/metal/aluminum/nugget_sand_cast',
        'tconstruct:smeltery/casting/metal/aluminum/plate_gold_cast',
        'tconstruct:smeltery/casting/metal/aluminum/plate_sand_cast',
        'tconstruct:smeltery/melting/metal/aluminum/dust',
        'techreborn:blast_furnace/chrome_ingot_from_small_dust',
        'techreborn:blast_furnace/steel_ingot_from_small_dust',
        'techreborn:blast_furnace/titanium_ingot',
        'techreborn:blast_furnace/titanium_ingot_from_small_dust',
        'techreborn:blasting/platinum_ingot_from_c_platinum_dusts',
        'techreborn:blasting/platinum_ingot_from_c_sheldonite_ores',
        'techreborn:compressor/iridium_plate',
        'techreborn:compressor/iridium_plate_from_block',
        'techreborn:crafting_table/dust/chrome_dust_from_small',
        'techreborn:crafting_table/dust/coal_dust_from_small',
        'techreborn:crafting_table/dust/platinum_dust_from_small',
        'techreborn:crafting_table/dust/steel_dust_from_small',
        'techreborn:crafting_table/dust/titanium_dust_from_small',
        'techreborn:crafting_table/machine_block/basic_machine_frame_alt',
        'techreborn:crafting_table/machine/iron_furnace',
        'techreborn:crafting_table/raw/raw_lead_from_block',
        'techreborn:crafting_table/raw/raw_silver_from_block',
        'techreborn:crafting_table/small_dust/chrome_small_dust_from_dust',
        'techreborn:crafting_table/small_dust/platinum_small_dust_from_dust',
        'techreborn:crafting_table/small_dust/steel_small_dust_from_dust',
        'techreborn:crafting_table/solar_panel/advanced_solar_panel_alt',
        'techreborn:crafting_table/solar_panel/advanced_solar_panel_alt',
        'techreborn:crafting_table/solar_panel/industrial_solar_panel_alt',
        'techreborn:crafting_table/solar_panel/ultimate_solar_panel_alt',
        'techreborn:crafting_table/storage_block/raw_raw_lead_storage_block',
        'techreborn:crafting_table/storage_block/raw_raw_silver_storage_block',
        'techreborn:grinder/certus_quartz_dust_from_ore',
        'techreborn:industrial_grinder/certus_quartz_ore',
        'techreborn:rolling_machine/minecart',
        'techreborn:smelting/platinum_ingot_from_c_platinum_dusts',
        'techreborn:smelting/platinum_ingot_from_c_sheldonite_ores',
        'techreborn:smelting/platinum_ingot_from_c_sheldonite_ores_exported_mi_furnace',
        'techreborn:smelting/silver_ingot_from_c_silver_ores_exported_mi_furnace',
        'travelersbackpack:travelers_backpack',
        'vinery:dough',
        'wands:stone_wand2',
        'create:smelting/platinum_ingot_compat_mythicmetals',
        'mythicmetals:smelting/platinum_ingot_from_ores',
        'mythicmetals:smelting/platinum_ingot_from_raw_ore',
        'create:blasting/platinum_ingot_compat_mythicmetals',
        'mythicmetals:blasting/blast_platinum_ingot_from_ores',
        'mythicmetals:blasting/blast_platinum_ingot_from_raw_ore',
        'ad_astra:steel_rod',
        'alloy_forgery:compat/aluminum_ingot_from_ores',
        'alloy_forgery:compat/titanium_ingot_from_raw_ores',
        'alloy_forgery:compat/titanium_ingot_from_ores',
        'alloy_forgery:compat/platinum_ingot_from_raw_ores',
        'alloy_forgery:compat/platinum_ingot_from_ores',
        'alloy_forgery:compat/tungsten_ingot_from_raw_ores',
        'alloy_forgery:compat/tungsten_ingot_from_ores',
        'bewitchment:silver_ingot_from_silver_block',
        'techreborn:blast_furnace/tungsten_ingot',
        'techreborn:blast_furnace/tungsten_ingot_from_small_dust',
        'techreborn:crafting_table/machine/industrial_centrifuge',
        'alloy_forgery:compat/alloys/steel_from_raw_ores',
        'alloy_forgery:compat/alloys/steel_from_ores',
        'mythicmetals:alloy_forge/alloy_steel_from_ingots',
        'mythicmetals:alloy_forge/alloy_steel_from_raw_ores',
        'mythicmetals:alloy_forge/alloy_steel_from_ores',
        'alloy_forgery:compat/alloys/steel_from_ingots',
        'naturalist:cooked_egg',
        'naturalist:cooked_egg_from_smoking',
        'naturalist:cooked_egg_from_campfire_cooking'
    ];

    const output = [
        'blockus:white_oak_small_logs',
        'blockus:dark_oak_small_logs',
        'blockus:acacia_small_logs',
        'blockus:jungle_small_logs',
        'blockus:birch_small_logs',
        'blockus:spruce_small_logs',
        'blockus:oak_small_logs',
        'blockus:golden_bars',
        'chisel:chisel',
        'croptopia:bacon',
        'croptopia:cooked_bacon',
        'croptopia:knife',
        'bewitchment:raw_silver_block',
        'modern_industrialization:uu_matter',
        'craftingcraft:portable_crafting',
        'kibe:pocket_crafting_table',
        'indrev:bronze_sword',
        'indrev:bronze_pickaxe',
        'indrev:bronze_axe',
        'indrev:bronze_shovel',
        'indrev:bronze_hoe',
        'kibe:big_torch',
        'dwarfcoal:dwarf_charcoal',
        'indrev:hammer',
        'campanion:mre',
        'additionaladditions:fried_egg',
        'twilightforest:uncrafting_table',
        'twilightforest:jeed/hunger',
        'techreborn:steel_helmet',
        'techreborn:steel_chestplate',
        'techreborn:steel_leggings',
        'techreborn:steel_boots',
        'indrev:bronze_helmet',
        'indrev:bronze_chestplate',
        'indrev:bronze_leggings',
        'indrev:bronze_boots',
        'indrev:silver_helmet',
        'indrev:silver_chestplate',
        'indrev:silver_leggings',
        'indrev:silver_boots',
        'indrev:copper_helmet',
        'indrev:copper_chestplate',
        'indrev:copper_leggings',
        'indrev:copper_boots',
        'bakery:strawberry_seeds',
        'techreborn:sapphire_helmet',
        'techreborn:sapphire_chestplate',
        'techreborn:sapphire_leggings',
        'techreborn:sapphire_boots',
        'techreborn:sapphire_pickaxe',
        'techreborn:sapphire_axe',
        'techreborn:sapphire_hoe',
        'techreborn:sapphire_sword',
        'techreborn:sapphire_spade',
        'techreborn:ruby_helmet',
        'techreborn:ruby_chestplate',
        'techreborn:ruby_leggings',
        'techreborn:ruby_boots',
        'techreborn:ruby_pickaxe',
        'techreborn:ruby_axe',
        'techreborn:ruby_hoe',
        'techreborn:ruby_sword',
        'techreborn:ruby_spade',
        'onlyhammers:obsidian_hammer',
        'onlyhammers:lapis_hammer',
        'onlyhammers:redstone_hammer',
        'tconstruct:crafting_station',
        'mythicmetals:copper_sword',
        'mythicmetals:copper_axe',
        'mythicmetals:copper_pickaxe',
        'mythicmetals:copper_shovel',
        'mythicmetals:copper_hoe',
        'mythicmetals:copper_helmet',
        'mythicmetals:copper_chestplate',
        'mythicmetals:copper_leggings',
        'mythicmetals:copper_boots',
        'kubejs:completionist_cup'
    ];

    id.forEach((id) => {
        event.remove({ id: id });
    });

    output.forEach((output) => {
        event.remove({ output: output });
    });

    // REI Unification
    const rei_unification_tr = [
        'titanium',
        'aluminum',
        'bronze',
        'chrome',
        'copper',
        'electrum',
        'invar',
        'iridium',
        'lead',
        'nickel',
        'platinum',
        'silver',
        'steel',
        'tin',
        'tungsten'

    ];

    rei_unification_tr.forEach((item) => {
        event.remove({ id: 'techreborn:crafting_table/ingot/' + item + '_ingot_from_nugget'});
        event.remove({ id: 'techreborn:crafting_table/nugget/' + item + '_nugget'});
        event.remove({ id: 'techreborn:crafting_table/ingot/' + item + '_ingot_from_block'});
        event.remove({ id: 'techreborn:crafting_table/storage_block/' + item + '_storage_block'});
        event.remove({ id: 'techreborn:crafting_table/raw/raw_' + item + '_from_block'});
    });

    const rei_unification_indrev = [
        'tungsten',
        'electrum',
        'tin',
        'bronze',
        'steel',
        'lead'

    ];

    rei_unification_indrev.forEach((item) => {
        event.remove({ id: 'indrev:shapeless/' + item + '_ingot_from_block'});
        event.remove({ id: 'indrev:shapeless/' + item + '_nugget'});
    });

    const rei_unification_mythicmetals = [
        'platinum',
        'steel',
        'silver',
        'tin',
        'bronze',
        'copper',

    ];

    rei_unification_mythicmetals.forEach((item) => {
        event.remove({ id: 'mythicmetals:ingots/' + item + '_ingot_from_block'});
        event.remove({ id: 'mythicmetals:crafting/' + item + '_nugget'});
    });


    const small_dusts = [
        'emerald',
        'bauxite',
        'diamond',
        'electrum',
        'invar',
        'manganese',
        'nickel',
        'quartz',
        'ruby',
        'sulfur',
        'coal'

    ];
    small_dusts.forEach((item) => {
        event.remove({ id: 'techreborn:crafting_table/small_dust/' + item + '_small_dust_from_dust'});
        event.remove({ id: 'techreborn:crafting_table/dust/' + item + '_from_dust'});
        event.remove({ id: 'techreborn:crafting_table/dust/' + item + '_dust_from_small'});
    });
    

    const plates = [
        'tin',
        'gold',
        'iron',
        'copper',

    ];

    plates.forEach((plates) => {
        event.remove({ id: 'indrev:shapeless/' + plates + '_plate_from_hammer' });
    });
});
