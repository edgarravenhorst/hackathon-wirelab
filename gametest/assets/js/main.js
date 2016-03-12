var game = new Game();
var initGame = game.init.bind(game);


$(document).ready( function() {
  game.update = function(){
    //additional rendering;
  }

  var circle = new createjs.Shape();
  circle.graphics.beginFill("DeepSkyBlue").drawCircle(512, 384, 10);
  game.stage.addChild(circle);

  game.tsps.follow(circle);
  game.tsps.drawLine(new createjs.Shape, game.stage);

  game.stage.on("stagemousedown", function(evt) {
    var circle = new AnimatedCircle();
    game.stage.addChild(circle);
  })

})
