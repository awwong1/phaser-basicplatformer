var menuState = {
  create: function() {
    // Add a background image
    game.add.image(0, 0, 'background');
    
    // Display the name of the game
    var nameLabel = game.add.text(game.world.centerX, 80, 'Super Coin Box',
                                  { font: '50px Arial', fill: '#ffffff' });
    nameLabel.anchor.setTo(0.5, 0.5);
    
    // Show the score at the center of the screen
    var scoreLabel = game.add.text(game.world.centerX, game.world.centerY,
                                   'score: ' + game.global.score,
                                   { font: '25px Arial', fill: '#ffffff' });
    scoreLabel.anchor.setTo(0.5, 0.5);
    
    // Show start game instructions
    var startLabel = game.add.text(game.world.centerX, game.world.height - 80,
                                   'press the up arrow to begin',
                                   { font: '25px Arial', fill: '#ffffff' });
    startLabel.anchor.setTo(0.5, 0.5);
    
    // Create phaser keyboard variable, up arrow key
    var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    // When 'upKey' is pressed, call start function once
    upKey.onDown.addOnce(this.start, this);
  },
  
  start: function() {
    // Start the game
    game.state.start('play');
  }
};