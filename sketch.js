const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var drop = [];
var maxDrops = 100;
var umbrella;

var lightning;
var lightImg1, lightImg2, lightImg3, lightImg4;

function preload(){
  lightImg1 = loadImage("1.png");
  lightImg2 = loadImage("2.png");
  lightImg3 = loadImage("3.png");
  lightImg4 = loadImage("4.png");
}


function setup() {
  createCanvas(480,800);

   engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(240, 630, 150, 280);
}

function draw() {
  background(0); 
   Engine.update(engine);

if(frameCount%100 === 0){
      for(var a=0; a<maxDrops; a++){
      drop.push(new Drop(random(0,480),random(0, 480)));
    }
  }

if(frameCount%50===0){
  spawnLight();
}

//drop display();...
for(var a = 0; a < drop.length; a++){
  drop[a].display();
}

umbrella.display();

  drawSprites();
}

function spawnLight(){
  lightning = createSprite(240, 50);
  var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: lightning.addImage(lightImg1);
              break;
      case 2: lightning.addImage(lightImg2);
              break;
      case 3: lightning.addImage(lightImg3);
              break;
      case 4: lightning.addImage(lightImg4);
              break;
    default: break;
    }
  lightning.lifetime = 20;
}