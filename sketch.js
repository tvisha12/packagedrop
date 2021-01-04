var helicopterIMG, helicopterSprite, packageSprite,packageIMG,package;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxsprite = createSprite(width/2,height-45,150,20);
	
	boxsprite2 = createSprite(width/2.5,height=615,20,100);

    boxsprite3 = createSprite(width/1.7,height=615,20,100); 

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	
	 
	Engine.run(engine);


	  console.log(packageBody.type);
	  console.log(packageBody.position);
}


function draw() {
  rectMode(CENTER);
  background(0);
 	packageSprite.x= packageBody.position.x 
  	packageSprite.y= packageBody.position.y 
  drawSprites();
   packageSprite.display;
   //createEdgeSprite;
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	//Matter.Body.setStatic(< body Name >, false);
	Matter.Body.setStatic(packageBody,false);
	
  }
}


