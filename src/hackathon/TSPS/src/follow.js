GameTSPS.prototype.follow = function(stageObj, offset){
  offset = offset || {x:0,y:0}

  this.onUpdate(function(data){
    createjs.Tween.get(stageObj, {override:true}).to(
      {
        x: (data.boundingrect.x - data.boundingrect.width/2) * $$gamesetup.gameWidth/2 + offset.x,
        y: (data.boundingrect.y + data.boundingrect.height) * $$gamesetup.gameHeight/2 + offset.y
      }, 200);
  });
}
