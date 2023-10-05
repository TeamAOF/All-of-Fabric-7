////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.tags('item', event => {


    const tall_flowers = [
        'biomemakeover:foxglove',
        'biomemakeover:black_thistle',
    ];

    tall_flowers.forEach((item) => {
        event.add("minecraft:tall_flowers", item)
    });

    // Dyes
    event.add("byg:brown_dye", "minecraft:cocoa_beans")

});
