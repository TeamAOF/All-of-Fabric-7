////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.tags('item', event => {


  // Diamond

  event.add('c:gems/diamond', 'minecraft:diamond')

  event.add('minecraft:coals', 'modern_industrialization:lignite_coal')

  event.add('c:workbench', 'minecraft:crafting_table')

  // Knives

  event.add('c:knives', 'farmersdelight:flint_knife')
  event.add('c:knives', 'farmersdelight:iron_knife')
  event.add('c:knives', 'farmersdelight:golden_knife')
  event.add('c:knives', 'farmersdelight:diamond_knife')
  event.add('c:knives', 'farmersdelight:netherite_knife')

  // Dough
  event.add('c:doughs', 'farmersdelight:wheat_dough')

  // Glass
  event.add('c:glass', 'connectedglass:borderless_glass')

const bw_fleece = [
  'orange',
  'magenta',
  'light_blue',
  'yellow',
  'lime',
  'pink',
  'light_gray',
  'gray',
  'cyan',
  'purple',
  'blue',
  'brown',
  'green',
  'red',
  'black'
];

bw_fleece.forEach((item) => {
  event.add("bwplus:fleece", 'bwplus:' + item + "_witch_wool")
 });

 const bw_wooden_chests = [
  'juniper',
  'cypress',
  'elder',
  'dragons_blood',
];

bw_wooden_chests.forEach((item) => {
  event.add("c:wooden_chests", 'bewitchment:' + item + "_chest")
  event.add("c:chests", 'bewitchment:' + item + "_chest")
 });
});

ServerEvents.tags('block', event => {

  // Soul Sand
  event.remove('spectrum:primordial_fire_base_blocks', 'minecraft:soul_fire_base_blocks')

  // fix BYG bookshelves not working for enchanting
  // event.add('chipped:bookshelf', /^byg:.+_bookshelf$/)

  // AE2 growth accelerator support for additional budding blocks
  const budding_blocks = [
    'spectrum:budding_topaz',
    'spectrum:budding_citrine',
    'spectrum:budding_onyx',
    'spectrum:budding_moonstone',
    'geode_plus:budding_pink_topaz',
    'geode_plus:budding_celestite',
    'geode_plus:budding_prismarine',
    'geode_plus:budding_lapis',
    'geode_plus:budding_deepslate_lapis',
    'geode_plus:budding_sculk_lapis',
    'geode_plus:budding_redstone',
    'geode_plus:budding_deepslate_redstone',
    'geode_plus:budding_sculk_redstone',
    'geode_plus:budding_emerald',
    'geode_plus:budding_deepslate_emerald',
    'geode_plus:budding_sculk_emerald',
    'geode_plus:budding_diamond',
    'geode_plus:budding_deepslate_diamond',
    'geode_plus:budding_sculk_diamond',
    'geode_plus:budding_nether_quartz',
    'geode_plus:budding_basalt_quartz',
    'geode_plus:budding_blackstone_quartz',
    'geode_plus:budding_nether_gold_nugget',
    'geode_plus:budding_basalt_gold_nugget',
    'geode_plus:budding_blackstone_gold_nugget',
    'geode_plus:budding_nether_glowstone',
    'geode_plus:budding_basalt_glowstone',
    'geode_plus:budding_blackstone_glowstone',
    'geode_plus:budding_nether_ancient_debris',
    'geode_plus:budding_basalt_ancient_debris',
    'geode_plus:budding_blackstone_ancient_debris',
    'geode_plus:budding_wrappist',
    'geode_plus:budding_echo',
    'wardentools:budding_sculkhyst',
    'ae2:flawless_budding_quartz',
    'ae2:flawed_budding_quartz',
    'ae2:chipped_budding_quartz',
    'ae2:damaged_budding_quartz',
    'mythicupgrades:budding_jade_crystal',
    'mythicupgrades:budding_topaz_crystal',
    'mythicupgrades:budding_aquamarine_crystal',
    'mythicupgrades:budding_sapphire_crystal',
    'mythicupgrades:budding_ruby_crystal',
    'mythicupgrades:budding_ametrine_crystal',
    'tconstruct:budding_earth_slime_crystal',
    'tconstruct:budding_sky_slime_crystal',
    'tconstruct:budding_ichor_slime_crystal',
    'tconstruct:budding_ender_slime_crystal'
  ];

  budding_blocks.forEach((block) => {
    event.add('c:budding_blocks', block),
    event.add('coxinhautilities:unboxable', block)
  });
});
