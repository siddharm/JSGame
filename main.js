var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });



    function preload(){
    game.load.image('bmage', 'assets/black-mage.png');
    }


function create(){
    var s = game.add.sprite(0,0,'bmage');
    
    }

function update(){
    
    }
    

