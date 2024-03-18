LootJS.modifiers((event) => {

  // Bosses
  event
    .addEntityLootModifier("bosses_of_mass_destruction:lich").addWeightedLoot([7,18],[Item.of("numismatic-overhaul:silver_coin").withChance(100)]);
  event
    .addEntityLootModifier("minecraft:ender_dragon").addWeightedLoot([4,10],[Item.of("numismatic-overhaul:silver_coin").withChance(100)]);
  event
    .addEntityLootModifier("minecraft:warden").addWeightedLoot([3,5],[Item.of("numismatic-overhaul:silver_coin").withChance(50)]);
  event
    .addEntityLootModifier("minecells:conjunctivius").addWeightedLoot([5,13],[Item.of("numismatic-overhaul:silver_coin").withChance(100)]);
  event
  .addEntityLootModifier("graveyard:lich").addWeightedLoot([10,23],[Item.of("numismatic-overhaul:silver_coin").withChance(100)]);
  event
  .addEntityLootModifier("aquamirae:captain_cornelia").addWeightedLoot([9,22],[Item.of("numismatic-overhaul:silver_coin").withChance(100)]);
});

ServerEvents.tags('entity_type', event => {

  // This list ADDS coins to loottable.
  const ADD_COINS = [
    'minecraft:wither',
    'theorcs:orc_boss',
    'minecraft:elder_guardian',
    'adventurez:blaze_guardian',
    'aquamirae:eel',
    'artifacts:mimic',
    'adventurez:blackstone_golem',
  ];

  // This list REMOVES coins from loottable.
  const REMOVE_COINS = [
    'minecraft:pillager'
  ];

  ADD_COINS.forEach((entity) => {
    event.add('numismatic-overhaul:the_bourgeoisie', entity)
  });

  REMOVE_COINS.forEach((entity) => {
    event.remove('numismatic-overhaul:the_bourgeoisie', entity)
  });
});