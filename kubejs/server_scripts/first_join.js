PlayerEvents.loggedIn((event) => {

  if (!event.player.stages.has('starting_items')) {

    event.player.stages.add('starting_items')

    event.player.give('heracles:quest_book')
    event.player.inventory.clear('patchouli:guide_book')
  }
});