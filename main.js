var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var platforms;

function preload() {
    "use strict";
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    game.load.image('background', 'assets/background.png');
    game.load.image('ground', 'assets/ground.png');
    game.load.image('bmage', 'assets/black-mage.png');
}


function create() {
    "use strict";
    platforms = game.add.group();
    platforms.enableBody = true;
    
    var bg = game.add.sprite(0, 0, 'background');
    var gr = platforms.create(0, game.world.height-100, 'ground');
    var s = game.add.sprite(0, 0, 'bmage');

    gr.body.immovable = true;
    
    //var ledge = platforms.create(-200, 300, 'ground');
    //ledge.body.immovable = true;
}

function update() {
    "use strict";
}