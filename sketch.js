var boy,boyImg,mango,mango1,mango2,mango3,mango4,mango5,mangoImg , tree,treeImg,stone,stoneImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	mangoImg=loadImage("Plucking/mango.png");
	boyImg=loadImage("Plucking/boy.png");
    treeImg=loadImage("Plucking/tree.png");
	stoneImg=loadImage("Plucking/stone.png");
}

function setup() {
	createCanvas(800, 700);

	mango=createSprite(900,400,20,20);
    mango .addImage=mangoImg;

	tree=createSprite(900,800,40,40);
	tree.addImage=treeImg;

    stone=createSprite(200,800,20,20);
	stone. addImage=stoneImg;

	boy=createSprite(300,800,20,20);
	boy.addImage=boyImg;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
var  options ={
	isStatic:false,
	restitution:0,
	friction:1,
	density:1.2
}

var options={
	isStatic:true,
	restitution:0,
	friction:1,
}

detectollision(stoneObj,mango1);
detectollision(stoneObj,mango2);
detectollision(stoneObj,mango3);
detectollision(stoneObj,mango4);
detectollision(stoneObj,mango5);

mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode=== 32){
		matter.body.setPosition(stoneObj.body,{x:235,y:420})
        launcherObject.attach(stoneObj.body);
	}
}

function detectollision (Lstone,Lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if (distance<=lmango.r+lstone.r)
	{
		Matter.body.setStatic(lmango.body,false);
	}
}











