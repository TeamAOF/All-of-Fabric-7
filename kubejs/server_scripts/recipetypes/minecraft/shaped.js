

////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(event => {

  // BYG Bookshelfs
  const byg_bookshelfs = [
    'oak',
    'spruce',
    'birch',
    'jungle',
    'acacia',
    'dark_oak',
    'mangrove',
    'crimson',
    'warped',
  ];

  byg_bookshelfs.forEach((item) => {
    event.remove({ output: 'minecraft:bookshelf' });
    event.shaped('minecraft:bookshelf', [
      'AAA',
      'BBB',
      'AAA'
    ], {
      A: 'minecraft:' + item + '_planks',
      B: 'minecraft:book'
    })
  });

  const recipes = [

    {
      output: 'minecraft:flint',
      pattern: ['AA ', 'A  ', '   '],
      key: {
        A: 'minecraft:gravel',
      },
      id: 'aof:flint'
    },

    {
      output: 'kubejs:leather_wrapped_stick',
      pattern: ['AB '],
      key: {
        A: 'minecraft:stick',
        B: 'minecraft:leather',
      },
      id: 'aof:leather_wrapped_stick'
    },

    // Eggs
    {
      output: '3x minecraft:egg',
      pattern: ['ABC'],
      key: {
        A: 'dml-refabricated:overworld_matter',
        B: '#c:grain',
        C: '#c:raw_chicken',
      },
      id: 'aof:egg'
    },

    // Eye of Ender
    {
      output: 'minecraft:ender_eye',
      pattern: ['AB'],
      key: {
        A: 'minecraft:blaze_powder',
        B: '#c:ender_pearls',
      },
      id: 'minecraft:ender_eye'
    },
  ];

  recipes.forEach((recipe) => {
    event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});
