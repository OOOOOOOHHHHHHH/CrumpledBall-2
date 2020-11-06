const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var paperBall;

function preload()
{
}
var engine, world	

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	paperBall = new Paper(20 ,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperBall.display();
  drawSprites();
 
}



