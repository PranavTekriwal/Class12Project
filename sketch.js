var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var leaf;
var redleafImg;
var greenleafImg;
var orangeleafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  redleafImg = loadImage("redImage.png");
  greenleafImg = loadImage("leaf.png");
  orangeleafImg = loadImage("orangeLeaf.png");
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
  spawnLeaves();

  rabbit.depth = 4;

  drawSprites();
}

function spawnApples() {

  if(frameCount%60 === 0) {

    apple = createSprite(0,0,10,10);
    apple.addImage(appleImg);
    apple.x = random(20,380);
    apple.velocityY = 5
    apple.scale = 0.1;
    apple.depth = 3;

  } 

}

function spawnLeaves() {

  if(frameCount%100 === 0) {

    var leafType = Math.round(random(1,4));

    if(leafType === 1) {

      leaf = createSprite(0,0,10,10);
      leaf.addImage(greenleafImg);
      leaf.x = random(20,380);
      leaf.velocityY = 3
      leaf.scale = 0.1;
      leaf.depth = 2;

    } else {

      if(leafType === 2) {

        leaf = createSprite(0,0,10,10);
        leaf.addImage(redleafImg);
        leaf.x = random(20,380);
        leaf.velocityY = 3
        leaf.scale = 0.1;
        leaf.depth = 2;

      } else {

        if(leafType === 3) {

          leaf = createSprite(0,0,10,10);
          leaf.addImage(orangeleafImg);
          leaf.x = random(20,380);
          leaf.velocityY = random(2,5);
          leaf.scale = 0.1;
          leaf.depth = 2;

        }

      }

    }

  }

  


  console.log(leafType);
}