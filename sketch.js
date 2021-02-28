
var database;
var gameState1 = 0;
var PlayerCount1;
var form,player,game;
var allPlayersInfo;
var endingCount = 0;
var car1,car2,car3,car4;
var cars;
var car1Image,car2Image,car3Image,car4Image,groundImage,trackImage;
var finishLine;

function preload(){
    car1Image = loadImage("images/car1.png");
    car2Image = loadImage("images/car2.png");
    car3Image = loadImage("images/car3.png");
    car4Image = loadImage("images/car4.png");
    groundImage = loadImage("images/ground.png");
    trackImage = loadImage("images/track.jpg");
}

function setup(){
    database = firebase.database();
    createCanvas(displayWidth-20,displayHeight-30);
    game = new Game()
    game.getState()
    game.start()
}

function draw(){
    background("white");
    if(PlayerCount1 === 4 && endingCount === 0){
        game.updateState(1)
    }
    if(gameState1 === 1){
        game.play()
    }
    if(endingCount === 4){
        game.updateState(2)
    }
    if(gameState1 === 2 && endingCount === 4){
        game.end()
    }
}
