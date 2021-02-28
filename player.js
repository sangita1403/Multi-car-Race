class Player{
  constructor(){
   this.index = null;
   this.distance = 0;
   this.name = null;
   this.rank = 0
  }
  getCount(){
      database.ref("PlayerCount").on("value",(data)=>{
          PlayerCount1 = data.val()
      })
  }
  updateCount(Count){
      database.ref("/").update({
          PlayerCount : Count
      })
  }
  static getPlayerInfo(){
      database.ref("Players").on("value",(data)=>{
          allPlayersInfo = data.val()
      })
  }
  updatePlayerInfo(){
      var playerIndex = "Players/player"+this.index
      database.ref(playerIndex).set({
         name : this.name,
         distance : this.distance,
         rank : this.rank
      })
  }
  getendPlayerCount(){
      database.ref("endPlayerCount").on("value",(data)=>{
         endingCount = data.val()
      })
  }
  updateendPlayerCount(Count){
      database.ref("/").update({
         endPlayerCount : Count
      })
  }
}