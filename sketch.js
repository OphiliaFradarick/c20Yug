var movingRect, fixedRect;

function setup(){
  createCanvas(1400, 800);

  fixedRect = createSprite(300,300, 50, 80);
  fixedRect.shapeColor = "orange";
  fixedRect.debug = true;

  movingRect = createSprite(500,500,80,30);
  movingRect.shapeColor = "orange";
  movingRect.debug = true;
}

function draw(){
  background(0);

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/ 2
     && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/ 2 ){
      
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";

  }

  else{
    movingRect.shapeColor = "orange";
    fixedRect.shapeColor = "orange";
  }

  drawSprites();

}