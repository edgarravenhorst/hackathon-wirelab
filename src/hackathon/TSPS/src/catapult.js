GameTSPS.prototype.catapult = function(onCompleteFunc, startPos) {
  startPos = startPos || {x:$$gamesetup.gameWidth/2, y:$$gamesetup.gameHeight/2}

  return {
    velocity:0,
    angle:0,
    x: startPos.x,
    y: startPos.y,

    start: function(){
      game.tsps.onUpdate(this.update)
      game.tsps.onLeave(this.stop);
    },

    update: function(data){
      var lx = (startPos.x - data.boundingrect.x * $$gamesetup.gameWidth) + (data.boundingrect.width * $$gamesetup.gameWidth / 2)
      var ly = (startPos.y - data.boundingrect.y * $$gamesetup.gameHeight) + (data.boundingrect.height * $$gamesetup.gameHeight)
      var diagonal = Math.sqrt(Math.abs((lx*lx) + (ly*ly)))

      console.log(lx, ly, diagonal);

      this.velocity = startPos.y

    },

    stop: function(data){
      onCompleteFunc();
    }
  }
}
