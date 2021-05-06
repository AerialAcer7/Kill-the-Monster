
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var backGround,backGroundImg;
var gameState = "OnSling";
var boxes;

function preload(){
 backGroundImg = loadImage("images/GamingBackground.png");
}

function setup() {
	createCanvas(800,700);
	
	backGround = createSprite(400,350,width,height);
	backGround.addImage(backGroundImg);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ground = new Box(400,560,600,10);
	 
	 box1 = new Box(400,535,40,40);
	 box2 = new Box(400,495,40,40);
	 box3 = new Box(400,455,40,40);
	 box4 = new Box(400,415,40,40);
	 box5 = new Box(400,375,40,40);
	 box6 = new Box(400,335,40,40);
	 
	 box7 = new Box(350,535,40,40);
	 box8 = new Box(350,495,40,40);
	 box9 = new Box(350,455,40,40);
	 box10 = new Box(350,415,40,40);
	 box11 = new Box(350,375,40,40);
	 box12 = new Box(350,335,40,40);

	 box13 = new Box(450,535,40,40);
	 box14 = new Box(450,495,40,40);
	 box15 = new Box(450,455,40,40);
	 box16 = new Box(450,415,40,40);
	 box17 = new Box(450,375,40,40);
	 box18 = new Box(450,335,40,40);

	 hero = new Hero(150,400,100,100);

     monster = new Monster(575,475,100,100);

	 chain = new Chain(hero.body,{x:150,y:200});

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 
  //Display the bodies here
   ground.display();
   
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   box13.display();
   box14.display();
   box15.display();
   box16.display();
   box17.display();
   box18.display();

   hero.display();
   chain.display();
   monster.display();

   Matter.Body.setStatic(ground.body,true);

}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
 chain.fly();
 gameState = "launched";
}


