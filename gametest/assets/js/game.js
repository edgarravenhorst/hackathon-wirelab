var Game = function(){

  this.tsps = {}
  this.stage = this.tsps.stage = new createjs.Stage("gameCanvas");

  this.properties = {};

  this.init =  function(){
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", this.ontick.bind(this));
  }

  this.ontick = function(event){
    this.stage.update(event);
    if (this.update) this.update();
  }

  this.get = function(prop){
    return this.properties[prop];
  }

  this.set = function(prop, value){
    return this.properties[prop] = value;
  }

  this.tsps.follow = function(stageObj){
    tsps.connection.onPersonUpdated = function(data){
      console.log(stageObj, data.boundingrect.x - data.boundingrect.width/2 * 1024,  data.boundingrect.y - data.boundingrect.height/2 * 768)
      stageObj.stageX = data.boundingrect.x * 1024
      stageObj.stageY = data.boundingrect.y * 768
    }
  }

  this.tsps.catapultAction = function(onCompleteFunc) {
    var velocity, angle;
    //get start point
    //keep an aye out for onleave
    //calculate velocity, angle, etc
    //complete Action
    onCompleteFunc(velocity, angle);
  }

  this.tsps.drawLine = function(brush, stage) {
    tsps.connection.onPersonUpdated = function(data){
      var circle = new createjs.Shape();
      circle.graphics.beginFill("DeepSkyBlue").drawCircle(data.boundingrect.x * 1024,  data.boundingrect.y * 768, 10);
      this.stage.addChild(circle);
    }.bind(this);
  }
}

