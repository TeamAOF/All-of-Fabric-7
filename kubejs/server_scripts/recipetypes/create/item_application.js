ServerEvents.recipes(event => {
    event.custom({
        "type": "create:item_application",
        "ingredients": [
            {
                "tag": "c:stripped_logs",
            },
            {
                "item": "create:refined_radiance",
            },
        ],
        "results": [
            {
                "item": "create:refined_radiance_casing"
            },
        ],
    })
    
    event.custom({
        "type": "create:item_application",
        "ingredients": [
            {
                "tag": "c:stripped_logs",
            },
            {
                "item": "create:shadow_steel",
            },
        ],
        "results": [
            {
                "item": "create:shadow_steel_casing"
            },
        ],
    })
})