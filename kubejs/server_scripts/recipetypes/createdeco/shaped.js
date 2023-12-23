ServerEvents.recipes(event => {
    const recipes = [
        {
            output: 'createdeco:yellow_iron_lamp',
            pattern: ['A  ', 'B  ', 'C  '],
            key: {
                A: 'minecraft:iron_nugget',
                B: 'minecraft:torch',
                C: 'modern_industrialization:iron_plate',
            },
            id: 'createdeco:yellow_iron_lamp'
        },

        {
            output: 'createdeco:red_iron_lamp',
            pattern: ['A  ', 'B  ', 'C  '],
            key: {
                A: 'minecraft:iron_nugget',
                B: 'minecraft:redstone_torch',
                C: 'modern_industrialization:iron_plate',
            },
            id: 'createdeco:red_iron_lamp'
        },

        {
            output: 'createdeco:green_iron_lamp',
            pattern: ['A  ', 'B  ', 'C  '],
            key: {
                A: 'minecraft:iron_nugget',
                B: 'minecraft:glow_berries',
                C: 'modern_industrialization:iron_plate',
            },
            id: 'createdeco:green_iron_lamp'
        },

        {
            output: 'createdeco:blue_iron_lamp',
            pattern: ['A  ', 'B  ', 'C  '],
            key: {
                A: 'minecraft:iron_nugget',
                B: 'minecraft:soul_torch',
                C: 'modern_industrialization:iron_plate',
            },
            id: 'createdeco:blue_iron_lamp'
        },

        {
            output: 'createdeco:yellow_copper_lamp',
            pattern: ['A  ', 'B  ', 'C  '],
            key: {
                A: 'modern_industrialization:copper_nugget',
                B: 'minecraft:torch',
                C: 'modern_industrialization:copper_plate',
            },
            id: 'createdeco:yellow_copper_lamp'
        },

        {
            output: 'createdeco:red_copper_lamp',
            pattern: ['A  ', 'B  ', 'C  '],
            key: {
                A: 'modern_industrialization:copper_nugget',
                B: 'minecraft:redstone_torch',
                C: 'modern_industrialization:copper_plate',
            },
            id: 'createdeco:red_copper_lamp'
        },

        {
            output: 'createdeco:green_copper_lamp',
            pattern: ['A  ', 'B  ', 'C  '],
            key: {
                A: 'modern_industrialization:copper_nugget',
                B: 'minecraft:glow_berries',
                C: 'modern_industrialization:copper_plate',
            },
            id: 'createdeco:green_copper_lamp'
        },

        {
            output: 'createdeco:blue_copper_lamp',
            pattern: ['A  ', 'B  ', 'C  '],
            key: {
                A: 'modern_industrialization:copper_nugget',
                B: 'minecraft:soul_torch',
                C: 'modern_industrialization:copper_plate',
            },
            id: 'createdeco:blue_copper_lamp'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});