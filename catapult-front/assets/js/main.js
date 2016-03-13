var game = new Game();
var initGame = game.init.bind(game);
var socket = game.websocket("192.168.1.147", "8080", "catapult");

var monsters = [];

for (var i=0; i < 5; i++){
  var bottle = new createjs.Bitmap("assets/images/beugel.png");
  //bottle.scaleX = bottle.scaleY = 0.5;
  bottle.x = 230 * i + 100;
  bottle.y=180;
  game.stage.addChild(bottle);
}

var mon1 = new createjs.Bitmap("assets/images/monster01.png");
//bottle.scaleX = bottle.scaleY = 0.5;
mon1.x = 200;
mon1.y=180;
game.stage.addChild(mon1);

var mon2 = new createjs.Bitmap("assets/images/monster02.png");
//bottle.scaleX = bottle.scaleY = 0.5;
mon2.x = 400;
mon2.y=180;
game.stage.addChild(mon2);


var mon3 = new createjs.Bitmap("assets/images/monster03.png");
mon3.scaleX = mon3.scaleY = 0.5;
mon3.x = 600;
mon3.y=180;
game.stage.addChild(mon3);


var mon4 = new createjs.Bitmap("assets/images/monster04.png");
//bottle.scaleX = bottle.scaleY = 0.5;
mon4.x = 800;
mon4.y=180;
game.stage.addChild(mon4);

var crosshair = new createjs.Bitmap("assets/images/crossfire.png");
crosshair.scaleX = crosshair.scaleY = 0.5;
game.stage.addChild(crosshair);

socket.listen = function(event){

  var data = JSON.parse(event.data);

  if (data.type == "shot"){

    var velocity = $$gamesetup.gameHeight - ((data.velocity-100)/675) * $$gamesetup.gameHeight;

    game.set('velocity', velocity);
    game.set('shotX', data.shotX);
    initShotFired();
  }

  if (data.type == "aim"){
    crosshair.x = $$gamesetup.gameWidth - (data.crosshairX/675) * $$gamesetup.gameWidth
    crosshair.y = $$gamesetup.gameHeight - (data.crosshairY/675) * $$gamesetup.gameHeight
  }

};

socket.connect();

var initShotFired = function() {
  var shot = new createjs.Shape();
  shot.graphics.beginFill("green").drawCircle(0, 0, 50);

  shot.x = (game.get("shotX")/675) * $$gamesetup.gameWidth + crosshair.getBounds().width/4;;
  shot.y = crosshair.y + crosshair.getBounds().height/4;

  createjs.Tween.get(shot, {override:true}).to(
    {
      y: shot.y + 100,
      alpha: 0
    }, 500);

  game.stage.addChild(shot);
}

var updateCrosshair = function(){

}
