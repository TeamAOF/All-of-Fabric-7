
////////////////////////
/// Made by Team AOF ///
////////////////////////


ServerEvents.tags('item', event => {

  // Farmland
  event.add('c:farmland', 'farmersdelight:rich_soil_farmland')
  event.add('c:farmland', 'farmingforblockheads:fertilized_farmland_rich')
  event.add('c:farmland', 'farmingforblockheads:fertilized_farmland_rich_stable')
  event.add('c:farmland', 'farmingforblockheads:fertilized_farmland_healthy')
  event.add('c:farmland', 'farmingforblockheads:fertilized_farmland_healthy_stable')
  event.add('c:farmland', 'farmingforblockheads:fertilized_farmland_stable')

  // Milk
  event.add('fabric:milk', 'croptopia:milk_bottle')
  event.add('fabric:milk', 'croptopia:soy_milk')
  event.add('c:milks', 'farmersdelight:milk_bottle')

  // Dough
  event.add('c:doughs', 'create:dough')
  event.add('c:doughs', 'bakery:dough')

  // Garlic
  event.add('c:garlic', 'bewitchment:garlic')
  event.add('c:crops/garlic', 'bewitchment:garlic')

  // Bacon
  event.add('c:raw_bacon', 'croptopia:bacon')
  event.add('c:raw_bacon', 'farmersdelight:bacon')
  event.add('c:cooked_bacon', 'croptopia:cooked_bacon')
  event.add('c:cooked_bacon', 'farmersdelight:cooked_bacon')

  // Eggs
  event.add('c:eggs', 'duckling:duck_egg')
  event.add('balm:eggs', 'duckling:duck_egg')
  event.add('naturalist:snake_temp_items', 'duckling:duck_egg')
  event.add('farmersdelight:cabbage_roll_ingredients', 'duckling:duck_egg')
  event.add('c:cooked_eggs', 'farmersdelight:fried_egg')

  // Strawberries
  event.add('c:strawberries', 'bakery:strawberry')

   // Strawberries
   event.add('c:strawberries', 'bakery:strawberry')

  // Cheese
  event.add('c:cheese', 'croptopia:cheese')
  event.add('c:cheeses', 'meadow:piece_of_cheese')

  // Seeds
  event.add('c:seeds', 'supplementaries:flax_seeds')
});
