class Game{
  constructor(){

  }
  getState(){
      database.ref("gameState").on("value",function(data){
          gameState1 = data.val()
      })
  }
  updateState(state){
      database.ref("/").update({
          gameState:state
      })
  }
  start(){
      if(gameState1===0){
          player = new Player()
          player.getCount()
          form = new Form()
          form.display()
      }
      car1 = createSprite(200,200)
      car1.addImage(car1Image)
      car2 = createSprite(400,200)
      car2.addImage(car2Image)
      car3 = createSprite(600,200)
      car3.addImage(car3Image)
      car4 = createSprite(800,200)
      car4.addImage(car4Image)
      cars = [car1,car2,car3,car4]
      finishLine = false
  }
  play(){
      form.hideForm();
      Player.getPlayerInfo();
      player.getendPlayerCount();
      if(allPlayersInfo !== undefined){
      background(groundImage);
      image(trackImage ,0 ,-displayHeight*4 ,displayWidth ,displayHeight*5)
      var index = 0;
      var x = 200;
      var y ;
      //var ypos = 130
      for(var plr in allPlayersInfo){
          index+= 1
          x+=200
          y = displayHeight-allPlayersInfo[plr].distance
          cars[index-1].x = x
          cars[index-1].y = y
          if(index === player.index){
            fill("red")
            ellipse(x, y, 100, 100)
            camera.position.x = displayWidth/2
            camera.position.y = cars[index-1].y
          }
          //ypos+= 20
          //textSize(15)
          //text(allPlayersInfo[plr].name +" : "+allPlayersInfo[plr].distance ,200 , ypos)
      }
    }
      if(keyDown(DOWN_ARROW)&& player.index!== null){
          player.distance+= 10
          player.updatePlayerInfo()
      }
      if(player.distance > 3670 && finishLine === false){
          endingCount += 1
          player.updateendPlayerCount(endingCount)
          player.rank = endingCount
          player.updatePlayerInfo()
          finishLine = true
          gameState1 = 2
      }
      drawSprites();
  }
  end(){
      console.log("Game Over");
      Player.getPlayerInfo();
      textAlign(CENTER)
      textSize(50)
      for(var plr in allPlayersInfo){
          if(allPlayersInfo[plr].rank === 1){
              text("First : "+allPlayersInfo[plr].name,150,150)
          }
          else if(allPlayersInfo[plr].rank === 2){
              text("Second : "+allPlayersInfo[plr].name,150,200)
          }
          else if(allPlayersInfo[plr].rank === 3){
            text("Third : "+allPlayersInfo[plr].name,150,250)
         }
         else{
            text("Fourth : "+allPlayersInfo[plr].name,150,300)
         }

      }
  }
}