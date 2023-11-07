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
            F: 'iron-jetpacks:steel_thruster'
        }
    ).id('aof:iron-jetpacks/steel_jetpack')
    
    e.shaped(
        Item.of('iron-jetpacks:bubble_jetpack', 1),
        [
            'SES',
            'BTB',
            'F F'
        ],
        {
            S: 'aquamirae:luminescent_bubble',
            E: 'minecraft:bubble_coral_block',
            B: 'endermanoverhaul:bubble_pearl',
            T: 'iron-jetpacks:steel_jetpack',
            F: 'iron-jetpacks:bubble_thruster'
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
            F: 'iron-jetpacks:electrum_thruster'
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
            S: 'modern_industrialization:platinum_ingot',
            E: 'cinderscapes:sulfur_quartz',
            B: 'techreborn:sheldonite_ore',
            T: 'iron-jetpacks:electrum_jetpack',
            F: 'iron-jetpacks:platinum_thruster'
        }
    ).id('aof:iron-jetpacks/platinum_jetpack')

    e.shaped(
        Item.of('iron-jetpacks:netherite_jetpack', 1),
        [
            'SES',
            'BTC',
            'F F'
        ],
        {
            S: 'minecraft:netherite_ingot',
            E: 'wardentools:echo_ingot',
            B: 'mythicupgrades:sapphire_ingot',
            C: 'mythicupgrades:ruby_ingot',
            T: 'iron-jetpacks:platinum_jetpack',
            F: 'iron-jetpacks:netherite_thruster'
        }
    ).id('aof:iron-jetpacks/netherite_jetpack')
    
    e.shaped(
        Item.of('iron-jetpacks:steel_thruster', 1),
        [
            'FFF',
            'FTF',
            'FFF'
        ],
        {
            F: 'minecraft:firework_rocket',
            T: 'ad_astra:rocket_fin'
        }
    ).id('aof:iron-jetpacks/steel_thruster')
    
    e.shaped(
        Item.of('iron-jetpacks:bubble_thruster', 1),
        [
            ' E ',
            'ETE',
            'BBB'
        ],
        {
            E: 'ends_delight:bubble_tea',
            T: 'iron-jetpacks:steel_thruster',
            B: 'supplementaries:bubble_blower'
        }
    ).id('aof:iron-jetpacks/bubble_thruster')
    
    e.shaped(
        Item.of('iron-jetpacks:electrum_thruster', 1),
        [
            ' P ',
            'PTP',
            ' P '
        ],
        {
            P: 'modern_industrialization:electrum_plate',
            T: 'iron-jetpacks:steel_thruster'
        }
    ).id('aof:iron-jetpacks/electrum_thruster')

    e.shaped(
        Item.of('iron-jetpacks:platinum_thruster', 1),
        [
            ' P ',
            'PTP',
            ' P '
        ],
        {
            P: 'modern_industrialization:platinum_plate',
            T: 'iron-jetpacks:electrum_thruster'
        }
    ).id('aof:iron-jetpacks/platinum_thruster')

    e.shaped(
        Item.of('iron-jetpacks:netherite_thruster', 1),
        [
            ' P ',
            'PTP',
            ' P '
        ],
        {
            P: 'minecraft:netherite_scrap',
            T: 'iron-jetpacks:platinum_thruster'
        }
    ).id('aof:iron-jetpacks/netherite_thruster')
})