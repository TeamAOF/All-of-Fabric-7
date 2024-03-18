LootJS.modifiers((event) => {
    event
      .addEntityLootModifier("bosses_of_mass_destruction:lich").addWeightedLoot([7,15],[Item.of("numismatic-overhaul:silver_coin").withChance(100)])
      .addLoot(Item.of("numismatic-overhaul:gold_coin").withChance(1));
});