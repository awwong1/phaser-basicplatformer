var bootState = {
    preload: function () {
        // load the image
        game.load.image('progressBar', 'assets/progressBar.png');
    },
    create: function () {
        // set some game settings
        game.stage.backgroundColor = '#3498db';
        game.physics.startSystem(Phaser.Physics.ARCADE);
        // Start the load state
        game.state.start('load');
    }
};