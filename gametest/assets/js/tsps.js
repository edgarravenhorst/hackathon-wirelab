var tsps
$(document).ready( function() {
  tsps = new GameTSPS();
  tsps.connection.connect();
})

var GameTSPS = function(local){
  this.is_local = (typeof $$gamesetup.is_local != 'undefined') ? $$gamesetup.is_local : true;

  if( this.is_local ){
    this.connection = new TSPS.Connection()
  }else{
    this.connection = new TSPS.Connection( $$gamesetup.tsps_ip, $$gamesetup.tsps_port );
  }

  this.connection.onPersonEntered = function(data){}
  this.connection.onPersonMoved = function(data){}
  this.connection.onPersonUpdated = function(data){}
  this.connection.onPersonLeft = function(data){}

}

if(typeof Game != "undefined")
  Game.prototype.tsps = {

    follow: function(stageObj){
      tsps.connection.onPersonUpdated = function(data){
        console.log(stageObj, data.boundingrect.x - data.boundingrect.width/2 * 1024,  data.boundingrect.y - data.boundingrect.height/2 * 768)
        stageObj.stageX = data.boundingrect.x * 1024
        stageObj.stageY = data.boundingrect.y * 768
      }
    },

    catapultAction: function(onCompleteFunc) {
      var velocity, angle;
      //get start point
      //keep an aye out for onleave
      //calculate velocity, angle, etc
      //complete Action
      onCompleteFunc(velocity, angle);
    },

    drawLine: function(brush, stage) {
      tsps.connection.onPersonUpdated = function(data){
        var circle = new createjs.Shape();
        circle.graphics.beginFill("DeepSkyBlue").drawCircle(data.boundingrect.x * 1024,  data.boundingrect.y * 768, 10);
        stage.addChild(circle);
      }
    }
  }
