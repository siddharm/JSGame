var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var platforms;

function preload() {
    "use strict";
   
    //game.load.audio('snekky', assets/audio)
    game.load.image('background', 'assets/images/background.png');
    game.load.image('ground', 'assets/images/ground.png');
    game.load.image('bmage', 'assets/images/black-mage.png');
    
    
}
var snekHead;
var snekSection = new Array();
var snekPath = new Array();
var numSnekSections = 30;
var snekSpacer = 6;

function create() {
    
    
    "use strict";
    
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    game.world.setBounds(0,0,800,600);
    platforms = game.add.group();
    platforms.enableBody = true;
    
    //var bg = game.add.sprite(0, 0, 'background');
    
    //var gr = platforms.create(0, 0, 'ground');
    //gr.scale.setTo(2,2);
    //gr.body.immovable = true;
    
    
    var s = game.add.sprite(0, 0, 'bmage');

    game.physics.enable(bmage, Phaser.physics.ARCADE);

    
    
    
    //richard wus here
    
    //var ledge = platforms.create(-200, 300, 'ground');
    //ledge.body.immovable = true;
}

function update() {
    "use strict";
    
    if (cursors.up.isDown){
        
    }
    if (cursors.dowm.isDown){
        
    }
    if (cursors.left.isDown){
        
    }
    if (cursors.right.isDown){
        
    }
}