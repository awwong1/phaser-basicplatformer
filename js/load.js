var loadState = {
    preload: function () {
        // Add 'loading...' label onto the screen
        var loadingLabel = game.add.text(game.world.centerX, 150, 'loading...',
            { font: '30px Arial', fill: '#ffffff' });
        loadingLabel.anchor.setTo(0.5, 0.5);

        // Display the progress bar
        var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
        progressBar.anchor.setTo(0.5, 0.5);
        game.load.setPreloadSprite(progressBar);

        // Load all our assets
        // game.load.image('player', 'assets/player.png');
        game.load.spritesheet('player', 'assets/player2.png', 20, 20);
        game.load.image('enemy', 'assets/enemy.png');
        game.load.image('coin', 'assets/coin.png');
        game.load.image('wallV', 'assets/wallVertical.png');
        game.load.image('wallH', 'assets/wallHorizontal.png');
        game.load.image('pixel', 'assets/pixel.png');
        game.load.spritesheet('mute', 'assets/muteButton.png', 28, 22);
        game.load.audio('jump', ['assets/jump.ogg', 'assets/jump.mp3'], true);
        game.load.audio('coin', ['assets/coin.ogg', 'assets/coin.mp3'], true);
        game.load.audio('dead', ['assets/dead.ogg', 'assets/dead.mp3'], true);
        game.load.audio('music', ['assets/music.ogg', 'assets/music.mp3'], true);

        // Load a new assets that will be used in the menu state
        game.load.image('background', 'assets/background.png');
    },

    create: function () {
        // Goto the menu state
        game.state.start('menu');
    }
};
