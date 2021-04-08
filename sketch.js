const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var groundy,boxdown,paper;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	groundy = new Ground(400,680,800,20);	
    boxdown = new Log(610,660,100,20);
	leftbox = new Log(550, 620,20,100);
	rightbox = new Log(670,620,20,100);
	paper = new Crumple(100,600,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundy.display();
  boxdown.display(); 
  leftbox.display();
  rightbox.display();
  paper.display();
  keyPressed();

  drawSprites();

 
}
function keyPressed() { 
  if (keyDown("UP")) { 
  Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15}); } }
  




