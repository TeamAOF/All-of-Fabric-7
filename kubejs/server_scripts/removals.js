ServerEvents.recipes((event) => {

    const id = [
        'iron-jetpacks:bubble_capacitor',
        'iron-jetpacks:steel_capacitor',
        'iron-jetpacks:electrum_capacitor',
        'iron-jetpacks:platinum_capacitor',
        'iron-jetpacks:netherite_capacitor',
        'iron-jetpacks:bubble_cell',
        'iron-jetpacks:steel_cell',
        'iron-jetpacks:electrum_cell',
        'iron-jetpacks:platinum_cell',
        'iron-jetpacks:netherite_cell',
        'iron-jetpacks:basic_coil',
        'iron-jetpacks:advanced_coil',
        'iron-jetpacks:elite_coil',
        'iron-jetpacks:expert_coil',
        'iron-jetpacks:ultimate_coil',
        'create:mixing/plant_oil',
        'indrev:shapeless/steel_dust',
        'techreborn:crafting_table/solar_panel/ultimate_solar_panel_alt',
        'techreborn:crafting_table/solar_panel/industrial_solar_panel_alt',
        'techreborn:crafting_table/solar_panel/advanced_solar_panel_alt',
        'techreborn:crafting_table/solar_panel/advanced_solar_panel_alt',
        'techreborn:rolling_machine/minecart',
        'croptopia:tomato_to_tomato_seed_shapeless',
        'croptopia:onion_to_onion_seed_shapeless',
        'croptopia:rice_to_rice_seed_shapeless',
        'croptopia:cabbage_to_cabbage_seed_shapeless',
        'techreborn:compressor/iridium_plate',
        'techreborn:compressor/iridium_plate_from_block',
        'indrev:infusing/steel_dust',
        'indrev:compressing/empty_upgrade',
        'techreborn:crafting_table/machine_block/basic_machine_frame_alt',
        'techreborn:crafting_table/machine/iron_furnace',
        'techreborn:smelting/platinum_ingot_from_c_sheldonite_ores',
        'techreborn:blasting/platinum_ingot_from_c_sheldonite_ores',
        'techreborn:smelting/platinum_ingot_from_c_sheldonite_ores_exported_mi_furnace',
        'modern_industrialization:compat/indrev/quarry_nikolite',
        'modern_industrialization:compat/ae2/quarry_ae2',
        'ad_astra:hammering/iron_plate',
        'ad_astra:recipes/steel_ingot_from_smelting_iron_ingot',
        'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot',
        'create:smelting/platinum_ingot_compat_modern_industrialization',
        'create:blasting/platinum_ingot_compat_modern_industrialization',
        'indrev:smelting/tungsten_ingot_from_raw_ores',
        'travelersbackpack:travelers_backpack',
        'bewitchment:silver_ingot_from_smelting_deepslate_silver_ore',
        'bewitchment:silver_ingot_from_blasting_deepslate_silver_ore',
        'bewitchment:silver_ingot_from_smelting_raw_silver',
        'bewitchment:silver_ingot_from_blasting_raw_silver',
        'bewitchment:raw_silver',
        'bewitchment:raw_silver_block',
        'farmersdelight:wheat_dough_from_water',
        'farmersdelight:wheat_dough_from_eggs',
        'farmersdelight:wheat_dough',
        'create:crafting/appliances/dough',
        'vinery:dough',
        'croptopia:shaped_bacon',
        'indrev:shapeless/copper_ingot_from_block',
        'wands:stone_wand2',
        'techreborn:crafting_table/dust/chrome_dust_from_small',
        'techreborn:crafting_table/small_dust/chrome_small_dust_from_dust',
        'techreborn:blast_furnace/titanium_ingot_from_small_dust',
        'techreborn:blast_furnace/chrome_ingot_from_small_dust',
        'techreborn:blast_furnace/titanium_ingot',
        'techreborn:crafting_table/dust/titanium_dust_from_small',
        'techreborn:grinder/certus_quartz_dust_from_ore',
        'techreborn:crafting_table/small_dust/platinum_small_dust_from_dust',
        'techreborn:crafting_table/dust/platinum_dust_from_small',
        'techreborn:smelting/platinum_ingot_from_c_platinum_dusts',
        'techreborn:blasting/platinum_ingot_from_c_platinum_dusts',
        'ad_astra:hammering/steel_plate',
        'techreborn:blast_furnace/steel_ingot_from_small_dust',
        'techreborn:crafting_table/dust/steel_dust_from_small',
        'techreborn:crafting_table/small_dust/steel_small_dust_from_dust',
        'modern_industrialization:quarry/bronze',
        'modern_industrialization:quarry/gold',
        'modern_industrialization:quarry/steel',
        'modern_industrialization:quarry/titanium',
        'techreborn:industrial_grinder/certus_quartz_ore',
        'modern_industrialization:materials/electrolyzer/uu_matter',
        'indrev:smelting/tungsten_ingot_from_ore',
        'indrev:smelting/tungsten_ingot_from_smelting',
        'indrev:blasting/tungsten_ingot_from_smelting',
        'indrev:blasting/tungsten_ingot_from_raw_ores',
        'indrev:blasting/tungsten_ingot_from_ore',
        'ad_astra:recipes/iron_rod',
        'regions_unexplored:raw_redstone_block',
        'modern_industrialization:compat/techreborn/macerator/minecraft_ender_pearl_to_techreborn_ender_pearl_dust',
        'modern_industrialization:compat/indrev/macerator/_c_silver_ores_to_indrev_raw_silver',
        'techreborn:smelting/silver_ingot_from_c_silver_ores_exported_mi_furnace',
        'indrev:blasting/silver_ingot_from_ore',
        'indrev:smelting/silver_ingot_from_ore',
        'techreborn:crafting_table/storage_block/raw_raw_lead_storage_block',
        'indrev:shaped/raw_lead_block',
        'techreborn:crafting_table/raw/raw_lead_from_block',
        'indrev:shapeless/raw_lead',
        'techreborn:crafting_table/raw/raw_silver_from_block',
        'indrev:shapeless/raw_silver',
        'techreborn:crafting_table/storage_block/raw_raw_silver_storage_block',
        'indrev:shaped/raw_silver_block',
        'techreborn:crafting_table/dust/coal_dust_from_small',
        'tconstruct:smeltery/casting/metal/platinum/ingot_gold_cast',
        'tconstruct:smeltery/casting/metal/platinum/ingot_sand_cast',
        'tconstruct:smeltery/casting/metal/tungsten/ingot_sand_cast',
        'tconstruct:smeltery/casting/metal/tungsten/ingot_gold_cast',
        'tconstruct:smeltery/casting/metal/platinum/nugget_gold_cast',
        'tconstruct:smeltery/casting/metal/platinum/nugget_sand_cast',
        'tconstruct:smeltery/casting/metal/tungsten/nugget_sand_cast',
        'tconstruct:smeltery/casting/metal/tungsten/nugget_gold_cast',
        'tconstruct:smeltery/casting/metal/platinum/plate_gold_cast',
        'tconstruct:smeltery/casting/metal/platinum/plate_sand_cast',
        'tconstruct:smeltery/casting/metal/tungsten/plate_sand_cast',
        'tconstruct:smeltery/casting/metal/tungsten/plate_gold_cast',
        'tconstruct:smeltery/casting/metal/platinum/block',
        'tconstruct:smeltery/casting/metal/tungsten/block'
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
        'indrev:modular_workbench_mk4',
        'indrev:rancher_mk1',
        'indrev:rancher_mk2',
        'indrev:rancher_mk3',
        'indrev:rancher_mk4'
    ];

    id.forEach((id) => {
        event.remove({ id: id });
    });

    output.forEach((output) => {
        event.remove({ output: output });
    });

    const rei_unification = [
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

    rei_unification.forEach((item) => {
        event.remove({ id: 'techreborn:crafting_table/ingot/' + item + '_ingot_from_nugget'});
        event.remove({ id: 'techreborn:crafting_table/nugget/' + item + '_nugget'});
        event.remove({ id: 'techreborn:crafting_table/ingot/' + item + '_ingot_from_block'});
        event.remove({ id: 'techreborn:crafting_table/storage_block/' + item + '_storage_block'});
        event.remove({ id: 'techreborn:crafting_table/raw/raw_' + item + '_from_block'});
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
