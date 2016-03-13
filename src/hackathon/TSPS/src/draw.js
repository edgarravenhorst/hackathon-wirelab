


GameTSPS.prototype.draw = function(brush, stage) {
    var colors = ["#E81300","#FFFA00","#00FF1F","#1700E8","#FF00B5"];
  this.connection.onPersonUpdated = function(data){

    var circle = new createjs.Shape();
                var fill = colors[data.id % (colors.length-1)];
    circle.graphics.beginFill(fill).drawCircle(data.boundingrect.x * 1024,  data.boundingrect.y * 768, 10);
    this.stage.addChild(circle);
  }.bind(this);
}
