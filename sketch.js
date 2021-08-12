
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImage;
var page1;
var start;

var asteroids;
var asteroidGroup;

var asteroid1, asteroid2, asteroid3, asteroid4;
function preload()
{
	backgroundImage = loadImage("4.jpg");
    page1 = loadImage("page1.jpg");
	asteroid1 = loadImage("asteroid4.png");
	asteroid2 = loadImage("asteroid3.png");
	asteroid3 = loadImage("asteroid2.png");
	asteroid4 = loadImage("asteroid2.png");
	asteroidGroup = new Group();
}

function setup() {
	createCanvas(displayWidth, 650);


	engine = Engine.create();
	world = engine.world;

	
	start = createButton('Start', 200, 200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(page1);
  
  fill(255);
  textSize(30);
  text("The Earth is,", 600, 40);
  text("what we all have in common !!!", 490, 75);

  text("Defend the earth, from asteroids and save it !!!", 380, 200);

  
  text("Your target: shoot all the asteroids....", 30, 600);

  if(keyCode === 32){
	  background(backgroundImage);
	  start.hide();

	  if (frameCount % 20 === 0) {
		asteroids = createSprite(random(100, 1000), 0, 100, 100);
		asteroids.velocityX = 6;
		var rand = Math.round(random(1,5));
		switch(rand){
			case 1: asteroids.addImage(asteroid1);
			asteroids.scale = 0.5;
			break;
			case 2: asteroids.addImage(asteroid2);
			asteroids.scale = 0.5;
			break;
			case 3: asteroids.addImage(asteroid3);
			asteroids.scale = 0.5;
			break;
			case 4: asteroids.addImage(asteroid4);
			asteroids.scale = 0.5;
			break;
			
		}
		asteroidGroup.add(asteroids);
  }


   
  drawSprites();
 
  }
}