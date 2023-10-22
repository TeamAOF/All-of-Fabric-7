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

  //fix BYG bookshelves not working for enchanting
  event.add('chipped:bookshelf', /^byg:.+_bookshelf$/)

  // AE2 growth accelerator support for additional budding blocks
  const budding_blocks = [
    'byg:budding_ametrine_ore',
    'byg:budding_subzero_crystal',
    'byg:budding_therium_crystal',
    'spectrum:budding_topaz',
    'spectrum:budding_citrine',
    'spectrum:budding_onyx'
  ];

  budding_blocks.forEach((block) => {
    event.add('c:budding_blocks', block)
  });
});
