
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var score=0;

function preload()
{
	
}

function setup() {
	createCanvas(900, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    ground=new Ground(390,300, 200, 20);
    
    ground2=new Ground(690,300, 200, 20);

    b1= new Block(330,235, 30,40);
    b2= new Block(360,235, 30,40);
    b3= new Block(390,235, 30,40);
    b4= new Block(420,235, 30,40);
    b5= new Block(450,235, 30,40);

    b6= new Block(360,195, 30,40);
    b7= new Block(390,195, 30,40);
    b8= new Block(420,195, 30,40);

    b9= new Block(390,155, 30,40);



    c1= new Block(630,235, 30,40);
    c2= new Block(660,235, 30,40);
    c3= new Block(690,235, 30,40);
    c4= new Block(720,235, 30,40);
    c5= new Block(750,235, 30,40);

    c6= new Block(660,195, 30,40);
    c7= new Block(690,195, 30,40);
    c8= new Block(720,195, 30,40);

    c9= new Block(690,155, 30,40);

    polygon= new Polygon(100,200,50);

    rope= new Rope(polygon.body, {x:100, y:150});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");


  ground.display();
  ground2.display();
     
polygon.display();
rope.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  

  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();
  c6.display();
  c7.display();
  c8.display();
  c9.display();



  // b1.score();
  // b2.score();
  // b3.score();
  // b4.score();
  // b5.score();
  // b6.score();
  // b7.score();
  // b8.score();
  // b9.score();

  // c1.score();
  // c2.score();
  // c3.score();
  // c4.score();
  // c5.score();
  // c6.score();
  // c7.score();
  // c8.score();
  // c9.score();


 

//text ("Score: "+ score, 50,40);
  drawSprites();
 
}

function mouseDragged(){

  Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY});

}

function mouseReleased(){
rope.fly();
}

function keyPressed(){
if(keyCode===32){
    Matter.Body.setPosition (polygon.body,{x:100, y:200});
    rope.attach(polygon.body);
}
}



