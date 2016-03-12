var game = new Game();
var initGame = game.init.bind(game);


$(document).ready( function() {
  var circle = new createjs.Shape();
  circle.graphics.beginFill("red").drawCircle(512, 384, 10);
  game.stage.addChild(circle);

  game.tsps.follow(circle);
  game.tsps.draw(new createjs.Shape, game.stage);

  game.update = function(){

  }
})
