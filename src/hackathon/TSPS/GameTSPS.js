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

