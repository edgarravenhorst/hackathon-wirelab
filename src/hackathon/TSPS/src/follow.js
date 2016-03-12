GameTSPS.prototype.follow = function(stageObj){
  this.connection.onPersonUpdated = function(data){
    console.log(stageObj, data.boundingrect.x - data.boundingrect.width/2 * 1024,  data.boundingrect.y - data.boundingrect.height/2 * 768)
    stageObj.stageX = data.boundingrect.x * 1024
    stageObj.stageY = data.boundingrect.y * 768
  }
}
