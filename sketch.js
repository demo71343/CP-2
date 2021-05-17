
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImage = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	dustbin = createSprite(610,590,190,10);
	dustbin.addImage(dustbinImage);
	dustbin.scale = 0.45;

	paper = new Paper(150,350);
	ground = new Ground(600,675,1200,20);
	
	
	console.log(paper);

	dustbin1 = new Dustbin(610,660,100,10);
	dustbin2 = new Dustbin(570,630,10,70);
	dustbin3 = new Dustbin(650,630,10,70);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 
  background("lightyellow");
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}


function keyPressed(){
	
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-65})
	}
}


