ServerEvents.recipes(event => {

    const rods = [
        'steel',
        'bronze',
        'tin',

    ];

    rods.forEach((item) => {
        event.custom({
            "type": "createaddition:rolling",
            "input": 
                {
                    "tag": "c:" + item + "_ingots"
                },

            "result": 
                {
                    "item": "modern_industrialization:" + item + "_rod",
                    "count": 2
                },
        })
    })
})
