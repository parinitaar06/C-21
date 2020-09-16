var fixedRect, movingRect, obj1, obj2;

function setup() {
  createCanvas(500,500);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  obj1 = createSprite(200,400,80,30);
  obj1.shapeColor = "blue";
  obj1.debug = true;

  obj2 = createSprite(350, 400,80,30);
  obj2.shapeColor = "yellow";
  obj2.debug = true;

  obj1.velocityX = 2;
  obj2.velocityX = -2;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect, fixedRect);
bounceOff(obj1, obj2);
  drawSprites();
}
