var cat; 
var mouse;
var bgImg;

function preload() {
    //load the images here
    cat1=loadAnimation("images/cat1.png")
    mouse1=loadAnimation("images/mouse1.png")
    mouse3=loadAnimation("images/mouse2.png","images/mouse3.png")
    cat2=loadAnimation("images/cat2.png","images/cat3.png")
    mouse4=loadAnimation("images/mouse4.png")
    cat3=loadAnimation("images/cat4.png")
    bg=loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat= createSprite(870,600);
cat.addAnimation("running",cat1);
cat.scale=0.2;

mouse=createSprite(200,600);
mouse.addAnimation("jumping",mouse1);
mouse.scale=0.15;
}

function draw() {

    background("images/garden.png");
    //Write condition here to evalute if tom and jerry collide
    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if( keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeassing");
    mouse.frameDelay=25;

    cat.velocityX=-5;

}

}
