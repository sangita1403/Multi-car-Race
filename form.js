class Form {
  constructor(){
     this.inputBox = createInput()
     this.button = createButton("PLAY")
     this.greeting = createElement("h3")
     this.reset = createButton("Reset")
  }
  hideForm(){
    this.greeting.hide();
    this.button.hide();
    this.inputBox.hide();
  }
  display(){
     var title = createElement("h2")
     title.html("Multi Player Car Racing Game")
     title.position(displayWidth/2 -50,20)

     
     this.inputBox.position(displayWidth/2 -40,displayHeight/2 -60)

     
     this.button.position(displayWidth/2 +40,displayHeight/2) 
     this.reset.position(displayWidth -100,20)
     this.reset.mousePressed(()=>{
       player.updateCount(0);
       game.updateState(0);
       player.updateendPlayerCount(0);
       database.ref('/').update({
         Players : null
       })
     })
     this.button.mousePressed(()=>{
         this.inputBox.hide()
         this.button.hide()
         player.name = this.inputBox.value()
         this.greeting.html("Hello "+player.name)
         this.greeting.position(displayWidth/2 -60,displayHeight/4)
         PlayerCount1 += 1
         player.index = PlayerCount1
         player.updateCount(PlayerCount1)
         player.updatePlayerInfo()
     })
  }
}