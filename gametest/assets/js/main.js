var game = new Game();
var initGame = game.init.bind(game);

game.update = function(){
  //additional rendering;
}

game.stage.on("stagemousedown", function(evt) {
  var circle = new AnimatedCircle();
  game.stage.addChild(circle);
})

game.stage.on("stagemousemove", function(evt) {
  var circle = new createjs.Shape();
  circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 10);
  circle.x = evt.stageX;
  circle.y = evt.stageY;
  game.stage.addChild(circle);
})
