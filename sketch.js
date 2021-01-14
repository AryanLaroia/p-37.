var canvas;
var monkey, monkeyImg;
var bgdImg;


function preload(){
monkeyImg = loadImage("pic.png");
bgdImg = loadImage("xyz.jpg");
}

function setup(){

  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  monkey = createSprite(900,500,10,10);
  monkey.scale = 0.3;
  monkey.addImage("weber", monkeyImg);
}

function draw(){
  background(bgdImg);
  camera.x = monkey.x;
  if(keyDown("LEFT_ARROW")){
monkey.x = monkey.x - 10; 
  }
  
  
  drawSprites();
}