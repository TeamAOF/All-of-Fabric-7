LootJS.modifiers((event) => {

  const jrpg_tier0_chance = 0.3;
  const jrpg_tier0 = [
    Item.of("jewelry:copper_ring").withChance(jrpg_tier0_chance),
	Item.of("jewelry:iron_ring").withChance(jrpg_tier0_chance),
	Item.of("jewelry:gold_ring").withChance(jrpg_tier0_chance)
  ];

  const jrpg_tier1_chance = 0.3;
  const jrpg_tier1 = [
    Item.of("jewelry:diamond_necklace").withChance(jrpg_tier1_chance),
	Item.of("jewelry:emerald_necklace").withChance(jrpg_tier1_chance)
  ];

  const jrpg_tier2_chance = 0.2;
  const jrpg_tier2 = [
    Item.of("jewelry:ruby_ring").withChance(jrpg_tier2_chance),
	Item.of("jewelry:topaz_ring").withChance(jrpg_tier2_chance),
	Item.of("jewelry:citrine_ring").withChance(jrpg_tier2_chance), 
	Item.of("jewelry:jade_ring").withChance(jrpg_tier2_chance), 
	Item.of("jewelry:sapphire_ring").withChance(jrpg_tier2_chance), 
	Item.of("jewelry:tanzanite_ring").withChance(jrpg_tier2_chance), 
	Item.of("jewelry:ruby_necklace").withChance(jrpg_tier2_chance), 
	Item.of("jewelry:topaz_necklace").withChance(jrpg_tier2_chance), 
	Item.of("jewelry:citrine_necklace").withChance(jrpg_tier2_chance), 
	Item.of("jewelry:jade_necklace").withChance(jrpg_tier2_chance), 
	Item.of("jewelry:sapphire_necklace").withChance(jrpg_tier2_chance), 
	Item.of("jewelry:tanzanite_necklace").withChance(jrpg_tier2_chance)
  ];


  const jrpg_tier3_chance = 0.2;
  const jrpg_tier3 = [
    Item.of("jewelry:netherite_ruby_ring").withChance(jrpg_tier3_chance), 
	Item.of("jewelry:netherite_topaz_ring").withChance(jrpg_tier3_chance), 
	Item.of("jewelry:netherite_citrine_ring").withChance(jrpg_tier3_chance), 
	Item.of("jewelry:netherite_jade_ring").withChance(jrpg_tier3_chance), 
	Item.of("jewelry:netherite_sapphire_ring").withChance(jrpg_tier3_chance), 
	Item.of("jewelry:netherite_tanzanite_ring").withChance(jrpg_tier3_chance), 
	Item.of("jewelry:netherite_ruby_necklace").withChance(jrpg_tier3_chance), 
	Item.of("jewelry:netherite_topaz_necklace").withChance(jrpg_tier3_chance), 
	Item.of("jewelry:netherite_citrine_necklace").withChance(jrpg_tier3_chance), 
	Item.of("jewelry:netherite_jade_necklace").withChance(jrpg_tier3_chance), 
	Item.of("jewelry:netherite_sapphire_necklace").withChance(jrpg_tier3_chance), 
	Item.of("jewelry:netherite_tanzanite_necklace").withChance(jrpg_tier3_chance)
  ];

  const jrpg_tier4_chance = 0.5;
  const jrpg_tier4 = [
    Item.of("jewelry:unique_attack_ring").withChance(jrpg_tier4_chance), 
	Item.of("jewelry:unique_attack_necklace").withChance(jrpg_tier4_chance), 
	Item.of("jewelry:unique_dex_ring").withChance(jrpg_tier4_chance), 
	Item.of("jewelry:unique_dex_necklace").withChance(jrpg_tier4_chance), 
	Item.of("jewelry:unique_tank_ring").withChance(jrpg_tier4_chance), 
	Item.of("jewelry:unique_tank_necklace").withChance(jrpg_tier4_chance), 
	Item.of("jewelry:unique_archer_ring").withChance(jrpg_tier4_chance), 
	Item.of("jewelry:unique_archer_necklace").withChance(jrpg_tier4_chance), 
	Item.of("jewelry:unique_arcane_ring").withChance(jrpg_tier4_chance), 
	Item.of("jewelry:unique_arcane_necklace").withChance(jrpg_tier4_chance), 
	Item.of("jewelry:unique_fire_ring").withChance(jrpg_tier4_chance), 
	Item.of("jewelry:unique_fire_necklace").withChance(jrpg_tier4_chance), 
	Item.of("jewelry:unique_frost_ring").withChance(jrpg_tier4_chance), 
	Item.of("jewelry:unique_frost_necklace").withChance(jrpg_tier4_chance), 
	Item.of("jewelry:unique_healing_ring").withChance(jrpg_tier4_chance), 
	Item.of("jewelry:unique_healing_necklace").withChance(jrpg_tier4_chance)
  ];

  const jrpg_tier0_loottables = [
	"minecraft:chests/abandoned_mineshaft",
	"minecraft:chests/shipwreck_supply",
	"minecraft:chests/igloo_chest"
  ];
  
  const jrpg_tier1_loottables = [
	"minecraft:chests/desert_pyramid",
	"minecraft:chests/jungle_temple"
  ];
  
  const jrpg_tier2_loottables = [
	"minecraft:chests/simple_dungeon",
	"minecraft:chests/stronghold_crossing",
	"minecraft:chests/stronghold_library",
	"minecraft:chests/woodland_mansion",
	"minecraft:chests/underwater_ruin_big"
  ];
  
  const jrpg_tier3_loottables = [
	"minecraft:chests/nether_bridge",
	"minecraft:chests/bastion_treasure",
	"minecraft:chests/bastion_other"
  ];
  
  const jrpg_tier4_loottables = [
	"minecraft:chests/end_city_treasure",
	"minecraft:chests/ancient_city"
  ];
  
  const jrpg_rolls = [1, 4]
  
  jrpg_tier0_loottables.forEach((loottable) => {
    event.addLootTableModifier(loottable).removeLoot("/jewelry*/");
  	event.addLootTableModifier(loottable).addWeightedLoot(
		jrpg_rolls,
        jrpg_tier0
	);
  });

  jrpg_tier1_loottables.forEach((loottable) => {
    event.addLootTableModifier(loottable).removeLoot("/jewelry*/");
  	event.addLootTableModifier(loottable).addWeightedLoot(
		jrpg_rolls,
        jrpg_tier1
	);
  });

  jrpg_tier2_loottables.forEach((loottable) => {
    event.addLootTableModifier(loottable).removeLoot("/jewelry*/");
  	event.addLootTableModifier(loottable).addWeightedLoot(
		jrpg_rolls,
        jrpg_tier2
	);
  });

  jrpg_tier3_loottables.forEach((loottable) => {
    event.addLootTableModifier(loottable).removeLoot("/jewelry*/");
  	event.addLootTableModifier(loottable).addWeightedLoot(
		jrpg_rolls,
        jrpg_tier3
	);
  });

  jrpg_tier4_loottables.forEach((loottable) => {
    event.addLootTableModifier(loottable).removeLoot("/jewelry*/");
  	event.addLootTableModifier(loottable).addWeightedLoot(
		jrpg_rolls,
        jrpg_tier4
	);
  });
	
});