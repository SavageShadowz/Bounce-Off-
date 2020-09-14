var fixRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixRect = createSprite(600, 400, 50, 80);
  fixRect.shapeColor = "green";
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";

  movingRect.velocityY = -5;
  fixRect.velocityY = 5;
}

function draw() {
  background(0,0,0);  

  if(movingRect.x - fixRect.x < fixRect.width/2 + movingRect.width/2 && fixRect.x - movingRect.x < fixRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX*(-1);
    fixRect.velocityX = fixRect.velocityX*(-1);
  }

  if(movingRect.y - fixRect.y < fixRect.height/2 + movingRect.height/2 && fixRect.y - movingRect.y < fixRect.height/2 + movingRect.height/2) {
    movingRect.velocityY = movingRect.velocityY*(-1);
    fixRect.velocityY = fixRect.velocityY*(-1);
  }
  drawSprites();

}