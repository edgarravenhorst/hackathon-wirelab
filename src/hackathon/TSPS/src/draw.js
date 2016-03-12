


GameTSPS.prototype.draw = function(brush, stage) {
  this.connection.onPersonUpdated = function(data){
    var circle = new createjs.Shape();
    circle.graphics.beginFill("DeepSkyBlue").drawCircle(data.boundingrect.x * 1024,  data.boundingrect.y * 768, 10);
    this.stage.addChild(circle);
  }.bind(this);
}
