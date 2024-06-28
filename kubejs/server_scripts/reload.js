ServerEvents.loaded((event) => {
    event.server.runCommandSilent('reload');
});