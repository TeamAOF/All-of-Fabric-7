////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.recipes(e => {
    e.shaped(
        Item.of('iron-jetpacks:steel_jetpack', 1),
        [
            'SES',
            'BTB',
            'F F'
        ],
        {
            S: 'modern_industrialization:steel_ingot',
            E: 'ad_astra:desh_engine',
            B: 'modern_industrialization:steel_block',
            T: 'iron-jetpacks:strap',
            F: 'ad_astra:rocket_fin'
        }
    ).id('aof:iron-jetpacks/steel_jetpack')
    
    e.shaped(
        Item.of('iron-jetpacks:bubble_jetpack', 1),
        [
            'LCL',
            'PJP',
            'TBT'
        ],
        {
            L: 'aquamirae:luminescent_bubble',
            C: 'minecraft:bubble_coral_block',
            P: 'endermanoverhaul:bubble_pearl',
            J: 'iron-jetpacks:steel_jetpack',
            T: 'ends_delight:bubble_tea',
            B: 'supplementaries:bubble_blower'
        }
    ).id('aof:iron-jetpacks/bubble_jetpack')
    
    e.shaped(
        Item.of('iron-jetpacks:electrum_jetpack', 1),
        [
            'SES',
            'BTB',
            'F F'
        ],
        {
            S: 'modern_industrialization:electrum_ingot',
            E: 'create:electron_tube',
            B: 'the_bumblezone:glistering_honey_crystal',
            T: 'iron-jetpacks:steel_jetpack',
            F: 'regions_unexplored:prismarite_cluster'
        }
    ).id('aof:iron-jetpacks/electrum_jetpack')

    e.shaped(
        Item.of('iron-jetpacks:platinum_jetpack', 1),
        [
            'SES',
            'BTB',
            'F F'
        ],
        {
            S: 'soulsweapons:verglas',
            E: 'cinderscapes:sulfur_quartz',
            B: 'techreborn:sheldonite_ore',
            T: 'iron-jetpacks:electrum_jetpack',
            F: 'zenith:inert_trident'
        }
    ).id('aof:iron-jetpacks/platinum_jetpack')

    e.shaped(
        Item.of('iron-jetpacks:netherite_jetpack', 1),
        [
            'SES',
            'BTB',
            'C D'
        ],
        {
            S: 'simplyswords:empowered_remnant',
            E: 'wardentools:echo_ingot',
            B: 'biomemakeover:mesmerite',
            T: 'iron-jetpacks:platinum_jetpack',
            C: 'mythicupgrades:sapphire_ingot',
            D: 'mythicupgrades:ruby_ingot'
        }
    ).id('aof:iron-jetpacks/netherite_jetpack')
})