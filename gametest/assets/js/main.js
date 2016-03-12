var game = new Game();
var initGame = game.init.bind(game);


$(document).ready( function() {

  var persons = [];

  /*game.tsps.catapult(function(){
    alert('Shoot!');


  }).start();*/

  game.stage.addEventListener("stagemouseup", function(evt){

    var circle = new createjs.Shape();
    circle.graphics.beginFill("green").drawCircle(50,50, 20);
    game.stage.addChild(circle);
  });


  game.tsps.onEnter(function(data){
    var circle = new createjs.Shape();
    circle.graphics.beginFill("green").drawCircle(data.boundingrect.x * $$gamesetup.gameWidth/2, data.boundingrect.y * $$gamesetup.gameHeight/2, 20);
    game.stage.addChild(circle);

    game.tsps.follow(circle, {x:20, y:20});
    persons[data.id] = (circle);
  })

  game.tsps.onLeave(function(data){
    game.stage.removeChild(persons[data.id]);
  })




  game.update = function(){
  }
})
