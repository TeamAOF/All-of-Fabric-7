PlayerEvents.loggedIn(event => {
        if (!event.player.stages.has('first_join')) {


        event.player.stages.add('first_join')
  }
});