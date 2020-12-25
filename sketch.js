
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, ground, stone, boy, boyImage, slingshot;

function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {

	createCanvas(1200, 800);
	
	engine = Engine.create();
	world = engine.world;

	boy = createSprite(300, 700, 10, 50);
	boy.addImage(boyImage);
	boy.scale = 0.1;

	ground = new Ground(width/2, 780, 1200, 40);

	tree = new Tree(900, 550, 500, 500);

	stone = new Stone(240, 640, 50, 50);

	mango1 = new Mango(950, 400, 50, 50)
	mango2 = new Mango(800, 500, 50, 50)
	mango3 = new Mango(970, 460, 50, 50)
	mango4 = new Mango(1050, 480, 50, 50)
	mango5 = new Mango(875, 425, 50, 50)

	slingshot = new Slingshot(stone.body,{x:250,y:640});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  


	tree.display();
	stone.display();
	ground.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	slingshot.display();

  drawSprites();
  detectCollision(this.stone, this.mango2);
 
}


function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){

    slingshot.fly();
 
}

function detectCollision(istone, imango){
	stoneBodyPosition = istone.body.position;
	mangoBodyPosition = imango.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance <= imango.r + istone.r){
		Matter.Body.setStatic(imango.body, false);
	}
}