var GameTSPS = function(local){
  this.is_local = (typeof $$gamesetup.is_local != 'undefined') ? $$gamesetup.is_local : true;

  if( this.is_local ){
    this.connection = new TSPS.Connection()
  }else{
    this.connection = new TSPS.Connection( $$gamesetup.tsps_ip, $$gamesetup.tsps_port );
  }
  this.connection.connect();

  this.connection.onPersonEntered = this.onEnterFunc;
  this.connection.onPersonMoved = this.onMovedFunc;
  this.connection.onPersonUpdated = this.onUpdatedFunc;
  this.connection.onPersonLeft = this.onLeaveFunc;

  this.onEnterfunc = function(event){console.log(event)}
  this.onPersonMoved = function(event){console.log(event)}
  this.onPersonUpdated = function(event){console.log(event)}
  this.onPersonLeft = function(event){console.log(event)}
}

var tsps = new GameTSPS();

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
