ServerEvents.recipes(event => {

    
    event.replaceInput({}, 'croptopia:knife', '#c:knives');

    event.replaceInput({}, 'minecraft:egg', '#c:eggs')

    // Chests
    event.replaceInput({}, '#c:wooden_chests', '#c:wooden_chests')
    event.replaceInput({}, 'minecraft:chest', '#c:wooden_chests')
});