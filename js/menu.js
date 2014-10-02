var menuState = {
    create: function () {
        // Add a background image
        game.add.image(0, 0, 'background');

        // Display the name of the game off screen so we can move in in
        var nameLabel = game.add.text(game.world.centerX, -50, 'Super Coin Box',
            { font: '50px Arial', fill: '#ffffff' });
        nameLabel.anchor.setTo(0.5, 0.5);
        game.add.tween(nameLabel).to({y: 80}, 1000).easing(Phaser.Easing.Bounce.Out).start();

        // Store high score into the database, keep persistent
        if (!localStorage.getItem('bestScore')) {
            localStorage.setItem('bestScore', 0);
        }
        if (localStorage.getItem('bestScore') < game.global.score) {
            localStorage.setItem('bestScore', game.global.score);
        }

        // Show the score at the center of the screen
        var scoreText = 'score: ' + game.global.score + '\nbest score: ' + localStorage.getItem('bestScore');
        var scoreLabel = game.add.text(game.world.centerX, game.world.centerY,
            scoreText, { font: '25px Arial', fill: '#ffffff' });
        scoreLabel.anchor.setTo(0.5, 0.5);

        // Show start game instructions
        var startLabel = game.add.text(game.world.centerX, game.world.height - 80,
            'press the up arrow or W to begin',
            { font: '25px Arial', fill: '#ffffff' });
        startLabel.anchor.setTo(0.5, 0.5);
        game.add.tween(startLabel).to({angle: -2}, 500).to({angle: 2}, 500).loop().start();

        // Add mute button
        this.muteButton = game.add.button(20, 20, 'mute', this.toggleSound, this);
        this.muteButton.input.useHandCursor = true; // onHover mouse == hand icon
        if (game.sound.mute) {
            this.muteButton.frame = 1;
        }

        // Handle music persistent on
        if (game.global.musicOn == 0) {
            this.music = game.add.audio('music');
            this.music.loop = true;
            this.music.play();
            game.global.musicOn = 1;
        }

        // Create phaser keyboard variable, up arrow key
        var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        // When 'upKey' is pressed, call start function once
        upKey.onDown.addOnce(this.start, this);
        // Added 'w' is pressed, call Start function once
        game.wasd.up.onDown.addOnce(this.start, this);
    },

    start: function () {
        // Start the game
        game.state.start('play');
    },

    toggleSound: function () {
        game.sound.mute = !game.sound.mute;
        this.muteButton.frame = game.sound.mute ? 1 : 0;
    }
};
