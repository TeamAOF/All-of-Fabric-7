ServerEvents.recipes(event => {
    event.custom({
        type: "create:sequenced_assembly",
        transitionalItem: {item: "kubejs:incomplete_chromatic_compound"},
        ingredient: [
            {
                item: "kubejs:unrefined_chromatic_compound"
            }
        ],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    {item: "kubejs:incomplete_chromatic_compound"},
                    {item: "techreborn:pyrope_dust"}
                ],
                results: [
                    {item: "kubejs:incomplete_chromatic_compound"}
                ]
            },
            {
                type: "create:cutting",
                ingredients: [
                    {item: "kubejs:incomplete_chromatic_compound"}
                ],
                results: [
                    {item: "kubejs:incomplete_chromatic_compound"}
                ]
            },
            {
                type: "create:pressing",
                ingredients: [
                    {item: "kubejs:incomplete_chromatic_compound"}
                ],
                results: [
                    {item: "kubejs:incomplete_chromatic_compound"}
                ]
            },
            {
                type: "create:filling",
                ingredients: [
                    {item: "kubejs:incomplete_chromatic_compound"},
                    {fluid: "createdieselgenerators:biodiesel", amount: 27000}
                ],
                results: [
                    {item: "kubejs:incomplete_chromatic_compound"}
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    {item: "kubejs:incomplete_chromatic_compound"},
                    {item: "minecraft:paper"}
                ],
                results: [
                    {item: "kubejs:incomplete_chromatic_compound"}
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    {item: "kubejs:incomplete_chromatic_compound"},
                    {item: "spectrum:shimmerstone_gem"}
                ],
                results: [
                    {item: "kubejs:incomplete_chromatic_compound"}
                ]
            }
        ],
        results: [{
            item: "create:chromatic_compound"
        }],
        loops: 2
    })
})