var TSPS = function(){
     this.connection;
    
    //Test is a boolean (spoilers!)
    this.connect: function(test){
        if(test){
	       this.connection = new TSPS.Connection() 
        }else{
           new TSPS.Connection( "192.168.1.15", 7681 );
        }
        
	   this.connection.connect();    
    }
    
	// add listeners
    this.onPersonEntered : function(func){
        this.connection.onPersonEntered = func;    
    }
    this.onPersonMoved : function(func){
        this.connection.onPersonMoved = func;    
    }
    this.onPersonUpdated : function(func){
        this.connection.onPersonUpdated = func;    
    }
    this.onPersonLeft : function(func){
        this.connection.onPersonLeft = func;    
    }
}

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
      
    connect : function(){
   
    }
  }
