var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  
  fixedRect = createSprite(400, 200, 80, 50);
  fixedRect.shapeColor = "purple";
  movingRect = createSprite(600,200,50,80);
  movingRect.shapeColor = "purple";
  
}

function draw() {
  background("#BC8F8F");  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  console.log(movingRect.x - fixedRect.x);

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  else{
    fixedRect.shapeColor = "purple";
    movingRect.shapeColor = "purple";
  }

  drawSprites();
}