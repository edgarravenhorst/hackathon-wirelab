var game = new Game();
var initGame = game.init.bind(game);


$(document).ready( function() {

  var persons = [];

  game.tsps.onEnter(function(data){
    var circle = new createjs.Shape();
    circle.graphics.beginFill("green").drawCircle(data.boundingrect.x * $$gamesetup.gameWidth/2, data.boundingrect.y * $$gamesetup.gameHeight/2, 20);
    game.stage.addChild(circle);

    game.tsps.follow(circle);
    persons[data.id] = (circle);
  })

  game.tsps.onLeave(function(data){
    game.stage.removeChild(persons[data.id]);
  })


  game.update = function(){
  }
})
