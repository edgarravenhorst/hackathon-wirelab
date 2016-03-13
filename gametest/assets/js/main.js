var game = new Game();
var initGame = game.init.bind(game);


$(document).ready( function() {

  var persons = [];

  var catapult = false;

  var person = new createjs.Shape();
  person.graphics.beginFill("green").drawCircle(0,0, 50);
  game.stage.addChild(person);

  var line_left = new createjs.Shape();
  game.stage.addChild(line_left);

  var line_right = new createjs.Shape();
  game.stage.addChild(line_right);

  game.stage.addEventListener("stagemousemove", function(evt){
    person.x = evt.stageX;
    person.y = evt.stageY;
  });

  $("#gameCanvas").on("mouseenter", function(){
    game.stage.addChild(person);
    persons[0] = person;
  });
  $("#gameCanvas").on("mouseout", function(){
    game.stage.removeChild(person);
    persons.splice(0, 1);
  });

  game.tsps.onEnter(function(data){
    var circle = new createjs.Shape();
    circle.graphics.beginFill("#ccc").drawCircle(0, 0, 20);
    game.stage.addChild(circle);

    game.tsps.follow(circle, {x:0, y:0});
    persons[data.id] = (circle);
  })

  game.tsps.onLeave(function(data){
    game.stage.removeChild(persons[data.id]);
    persons.splice(data.id, 1);
  })

  game.update = function(){
    for (var firstKey in persons) break;
    var person = persons[firstKey];

    if(person){

      if(!catapult){
        alert('test')
        game.tsps.catapult(person, function(){
          alert('Shoot!');
        })
      }

      var x = person.x
      var y = person.y

      line_left.graphics.clear();
      line_left.graphics.setStrokeStyle(3);
      line_left.graphics.beginStroke("#ccc");
      line_left.graphics.moveTo(0, $$gamesetup.gameHeight/2);
      line_left.graphics.lineTo(x, y);
      line_left.graphics.endStroke();

      line_right.graphics.clear();
      line_right.graphics.setStrokeStyle(3);
      line_right.graphics.beginStroke("#ccc");
      line_right.graphics.moveTo($$gamesetup.gameWidth, $$gamesetup.gameHeight/2);
      line_right.graphics.lineTo(x, y);
      line_right.graphics.endStroke();
    }else{
      catapult = false;
    }
  }
})
