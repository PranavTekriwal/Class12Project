var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  rabbit.depth = 3;

  if(keyIsDown(RIGHT_ARROW)) {

    rabbit.x = rabbit.x + 5;

  }

  if(keyIsDown(LEFT_ARROW)) {

    rabbit.x = rabbit.x - 5;

  }

  edges= createEdgeSprites();
  rabbit.collide(edges);

  spawnApples();

  rabbit.depth = 3;

  drawSprites();
}

function spawnApples() {

  if(frameCount%60 === 0) {

    apple = createSprite(0,0,10,10);
    apple.addImage(appleImg);
    apple.x = random(20,380);
    apple.velocityY = 5
    apple.scale = 0.1;
    apple.depth = 2;

  } 

}