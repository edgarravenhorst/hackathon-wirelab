

var GameTSPS = function(local){
  this.is_local = (typeof $$gamesetup.is_local != 'undefined') ? $$gamesetup.is_local : true;

  if( this.is_local ){
      this.connection = new TSPS.Connection()
  }else{
    this.connection = new TSPS.Connection( $$gamesetup.tsps_ip, $$gamesetup.tsps_port );
  }

    this.connection.connect();

  this.onEnterfunc = function(data){console.log(data)}
  this.onPersonMoved = function(data){console.log(data)}
  this.onPersonUpdated = function(data){console.log(data)}
  this.onPersonLeft = function(data){console.log(data)}

  this.connection.onPersonEntered = this.onEnterFunc;
  this.connection.onPersonMoved = this.onMovedFunc;
  this.connection.onPersonUpdated = function(person){console.log(person)};
  this.connection.onPersonLeft = this.onLeaveFunc;


}

$(document).ready( function() {
    var tsps = new GameTSPS();
});

if(typeof Game != "undefined")
  Game.prototype.tsps = {

    followAxis: function(obj, axis, delay){

    },

    catapultAction: function(onCompleteFunc) {
      var velocity, angle;
      //get start point
      //keep an aye out for onleave
      //calculate velocity, angle, etc
      //complete Action
      onCompleteFunc(velocity, angle);
    },

    startDrawing: function(radius, timeout) {

    }
  }
