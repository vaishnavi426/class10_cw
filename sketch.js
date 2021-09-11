
var trex ,trunning, ground, groundImage;
function preload(){
  trunning = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,20); 

  trex.addAnimation("running",trunning);
  trex.scale = 0.5;
  ground = createSprite(300,170,600,3);
  ground.addImage("grd",groundImage);
  ground.velocityX = -2;
}

function draw(){
  background("white");

  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  //add gravity
  trex.velocityY = trex.velocityY+0.5;
  //stop Trex from falling down
  trex.collide(ground);

  //to make the ground look infinite
  if(ground.x<0) {
    ground.x = ground.width/2;
  }

  drawSprites();
}
