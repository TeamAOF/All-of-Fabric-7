////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.tags('item', event => {

    // Create (Common Tag Conversion)
    const create_ingots_blocks = [
        'zinc',
        'brass',
    ];

    const create_nuggets = [
        'copper',
        'brass',
        'zinc'
    ];

    const create_plates = [
        'copper',
        'iron',
        'brass',
    ];

    create_ingots_blocks.forEach((item) => {
        event.add("c:" + item + "_ingots", "create:" + item + "_ingot")
        event.add("c:" + item + "_blocks", "create:" + item + "_block")
    });

    create_nuggets.forEach((item) => {
        event.add("c:" + item + "_nuggets", "create:" + item + "_nugget")
    });

    create_plates.forEach((item) => {
        event.add("c:" + item + "_plates", "create:" + item + "_sheet")
    });

    event.add("c:brass_ingots", "create:brass_ingot")
    event.add("c:brass_nuggets", "create:brass_nugget")
    event.add("c:brass_ingots", "create:brass_ingot")
    event.add("c:brass_blocks", "create:brass_block")
    event.add("c:raw_zinc_ores", "create:raw_zinc")
    event.add("c:zinc_dusts", "create:crushed_raw_zinc")
    event.add("c:gold_plates", "create:golden_sheet")

    // Create Additions
    event.add("c:zinc_plates", "createaddition:zinc_sheet")
    event.add("c:diamond_dusts", "createaddition:diamond_grit")
    event.add("c:iron_rods", "createaddition:iron_rod")
    event.add("c:gold_rods", "createaddition:gold_rod")
    event.add("c:copper_rods", "createaddition:copper_rod")

    // Tech Reborn
    event.add("c:plates/brass", "techreborn:brass_plate")
    event.add("c:plates/zinc", "techreborn:zinc_plate")
    event.add("c:nuggets/zinc", "techreborn:zinc_nugget")
    event.add('c:zinc_plates', 'techreborn:zinc_plate')
    event.add('c:brass_plates', 'techreborn:brass_plate')

    // Modern Industrialization
    event.add("c:copper_rods", "modern_industrialization:copper_rod")
    event.add("c:rods/copper", "modern_industrialization:copper_rod")
    event.add("c:gold_rods", "modern_industrialization:gold_rod")
    event.add("c:rods/gold", "modern_industrialization:gold_rod")
    event.add("c:rods/iron", "modern_industrialization:iron_rod")
    event.add("c:dusts/diamond", "modern_industrialization:diamond_dust")

    event.add("c:chromium_small_dusts", "modern_industrialization:chromium_tiny_dust")
    event.add("c:titanium_small_dusts", "modern_industrialization:titanium_tiny_dust")
    event.add("c:platinum_small_dusts", "modern_industrialization:platinum_tiny_dust")
    event.add("c:emerald_small_dusts", "modern_industrialization:emerald_tiny_dust")
    event.add("c:steel_small_dusts", "modern_industrialization:steel_tiny_dust")

    event.add("c:plates/gold", "modern_industrialization:gold_plate")
    event.add("c:plates/iron", "modern_industrialization:iron_plate")
    event.add("c:plates/copper", "modern_industrialization:copper_plate")
    event.add("c:nuggets/copper", "modern_industrialization:copper_nugget")
    event.add("c:plates/bronze", "modern_industrialization:bronze_plate")

    // Indrev
    event.add('c:raw_lead_blocks', 'indrev:raw_lead_block')
    event.add('c:raw_silver_blocks', 'indrev:raw_silver_block')
    event.add('c:raw_tungsten_blocks', 'indrev:raw_tungsten_block')
    event.add('c:raw_tin_blocks', 'indrev:raw_tin_block')

    // Create Filtering
    event.add("c:plates", "modern_industrialization:iron_plate")
    event.add("c:plates", "modern_industrialization:gold_plate")
    event.add("c:plates", "modern_industrialization:copper_plate")


    // Gems
    event.add("c:rubies", "mythicupgrades:ruby")
    event.add("c:rubies", "jewelry:ruby")
    event.add("c:ruby_ores", "mythicupgrades:ruby_ore")

    event.add("c:sapphires", "mythicupgrades:sapphire")
    event.add("c:sapphires", "jewelry:sapphire")
    event.add("c:sapphire_ores", "mythicupgrades:sapphire_ore")

    event.add("c:topaz", "mythicupgrades:topaz")
    event.add("c:topaz", "jewelry:topaz")

    event.add("c:jade", "mythicupgrades:jade")
    event.add("c:jade", "jewelry:jade")

    // Netherrack
    event.add("c:netherrack_dusts", "create:cinder_flour")

    // fix copper block dupe
    event.remove("c:copper_blocks", "minecraft:cut_copper")

});

ServerEvents.tags('block', event => {

    // Geode Plus / AE2
    const geodeplus_ae2 = [
        "budding_nether_gold_nugget",
        "budding_basalt_gold_nugget",
        "budding_blackstone_gold_nugget",
        "budding_lapis",
        "budding_redstone",
        "budding_emerald",
        "budding_diamond",
        "budding_deepslate_lapis",
        "budding_deepslate_redstone",
        "budding_deepslate_emerald",
        "budding_deepslate_diamond",
        "budding_sculk_lapis",
        "budding_sculk_redstone",
        "budding_sculk_emerald",
        "budding_sculk_diamond",
        "budding_nether_quartz",
        "budding_basalt_quartz",
        "budding_blackstone_quartz",
        "budding_basalt_glowstone",
        "budding_nether_glowstone",
        "budding_basalt_glowstone",
        "budding_blackstone_glowstone",
        "budding_wrappist",
        "budding_echo",
        "budding_nether_ancient_debris",
        "budding_basalt_ancient_debris",
        "budding_blackstone_ancient_debris",
        "budding_prismarine",
        "budding_celestite",
        "budding_pink_topaz"
    ];

    geodeplus_ae2.forEach((item) => {
        event.add("ae2:growth_acceleratable", "geode_plus:" + item)
    });


});
