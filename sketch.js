var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var ground, invisible;
var survivaltime = 0;
var GameState;
var PLAY, END;
var end;
var spawnFood,spawnObstacle;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(500, 500);

  PLAY = 1;
  GameState = PLAY;
  END = 0;

  FoodGroup = new Group();
  ObstacleGroup = new Group();

  monkey = createSprite(70, 370, 50, 50);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(250, 405, 1000, 10);
  ground.x = ground.width / 2;

  invisible = createSprite(250, 407, 1000, 10);
  invisible.x = invisible.width / 2;
}


function draw() {
  background("white");


  if (GameState === PLAY) {

    if (ground.x < 0) {
      ground.x = ground.width / 2;
    }

    if (invisible.x < 0) {
      invisible.x = invisible.width / 2;
    }

    invisible.velocityX = -5;



    if (keyDown("space")) {
      monkey.velocityY = -20;
    }
    monkey.velocityY = monkey.velocityY + 0.9;

    score = Math.round(frameCount / 3);
    survivalTime = Math.ceil(frameCount / frameRate());
    ground.velocityX = -(5 + 2 + score / 100);

    if (monkey.isTouching(ObstacleGroup)) {
      GameState = END;
    }
spawnFood();
    spawnObstacle();
    monkey.collide(ground);
    drawSprites();
  }

}

function spawnFood() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(400, 120, 40, 10);
   banana.y = Math.round(random(80, 120));
    banana.addImage(bananaImage);
   banana.scale = 0.1;
   banana.velocityX = -3;
  }
}


function spawnObstacle() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(300, 120, 40, 10);
    obstacle.y = Math.round(random(80, 120));
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = 3;
  }
}