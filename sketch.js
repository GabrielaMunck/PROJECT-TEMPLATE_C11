var ship
var sea
var seaImg
var shipImg1

function preload(){
seaImg = loadImage("sea.png"); 
shipImg1 = loadAnimation("ship-1.png","ship-1.png", "ship-2.png","ship-1.png");
}

function setup(){
  createCanvas(400,400);
  var ship = createSprite(200,200);
  sea=createSprite(400,200); 
  sea.addImage(seaImg); 
  sea.velocityX = -5; 
  sea.scale=0.3;
  ship.addAnimation("movingShip",shipImg1); 
  ship.scale =0.25;
}

function draw() {
  background("blue");
    drawSprites();
    
    if (sea.x < 0){
      sea.x = sea.width/2
      
      
    }
 
}
