
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,100,30)
	mango3=new mango(1100,200,30)
	mango4=new mango(1000,200,30)
	mango5=new mango(900,200,30)
	mango6=new mango(1200,200,30)
	mango7=new mango(1050,150,30)
	mango8=new mango(1150,150,30)
	mango9=new mango(950,150,30)

	treeObj=new tree(1050,580);

	stone=new Stone(150,200,20)
	groundObject=new ground(width/2,600,width,20);
	slingshot = new Slingshot(stone.body,{x:220,y:350});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  stone.display();
  slingshot.display();
  



  groundObject.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  
}

function detectollision(lstone,lmango)
{
	mangoBodyPosition=lmango.body.position 
	stoneBodyPosition=lstone.body.position 

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+stone.r)
	{
		Matter.Body.setStatic(lmango.body,false)
	}
}

function keyPressed()
{
	if (keyCode === 32)
	{
		Matter.body.setPosition(stone.body, {x:235,y:420})
		launcherObject.attach(stone.body);
	}
}
function mouseDragged()
 { 
	 Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	slingshot.fly();
}