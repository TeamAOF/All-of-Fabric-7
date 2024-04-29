StartupEvents.registry('item', event => {

	event.create('aof7_logo').displayName('AOF7')
	event.create('completionist').displayName('Completionist Medal').rarity('Epic')
	event.create('quester').displayName('All The Quests')
	event.create('check').displayName('check mark')
	// event.create('croptopia_fertilizer').displayName('Croptopia Fertilizer') //original bag texture from sukuro120 on planetminecraft
	// event.create('empty_fertilizer_bag').displayName('Empty Fertilizer Bag') //original bag texture from sukuro120 on planetminecraft
	// event.create('glue').displayName('Glue')
	// event.create('croptopia_mulch').displayName('Croptopia Mulch') //original bag texture from sukuro120 on planetminecraft
	event.create('invisible_ingot').displayName('Invisible Ingot').rarity('Common')
	event.create('invisible_helmet', 'helmet').displayName('Invisible Helmet').tier('invisible').tooltip('§6Works in cosmetic slots too!')
	event.create('invisible_chestplate', 'chestplate').displayName('Invisible Chestplate').tier('invisible').tooltip('§6Works in cosmetic slots too!')
	event.create('invisible_leggings', 'leggings').displayName('Invisible Leggings').tier('invisible').tooltip('§6Works in cosmetic slots too!')
	event.create('invisible_boots', 'boots').displayName('Invisible Boots').tier('invisible').tooltip('§6Works in cosmetic slots too!')
	// event.create('botania_fertilizer').displayName('Botania Fertilizer') //original bag texture from sukuro120 on planetminecraft
	event.create('hyper_nitro_crystal').displayName('Hyper Nitro Crystal').glow(true).rarity('Epic') //texture originally from POWAH! mod
	event.create('mother_of_all_pearls').displayName('Mother of all Pearls').rarity('Epic') //texture originally from BOMD mod
	event.create('mixed_stone_ball').displayName('Mixed Stone Ball')
	event.create('ultra_compressed_mixed_stone_ball').displayName('Ultra Compressed Mixed Stone Ball').rarity('Epic')
	event.create('incomplete_chromatic_compound')
	event.create('unrefined_chromatic_compound').displayName('Unrefined Chromatic Compound')
	event.create('leather_wrapped_stick').displayName('Leather Wrapped Stick') //texture adapated from vanilla by Inno
});

ItemEvents.armorTierRegistry(event => {
    event.add('invisible', tier => {
        tier.durabilityMultiplier = 5;
        tier.slotProtections = [1, 1, 1, 1];
        tier.enchantmentValue = 5;
        tier.equipSound = 'minecraft:item.armor.equip_iron';
        tier.repairIngredient = 'minecraft:glass';
        tier.toughness = 0.0;
        tier.knockbackResistance = 0.0;
    });
});
