const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  
  base=new Ground(390,260,250,20);
  
  block8=new Box(330,235,30,40);
  block9=new Box(360,235,30,40);
  block10=new Box(390,235,30,40);
  block11=new Box(420,235,30,40);
  block12=new Box(450,235,30,40);
 
  block13=new Box(420,195,30,40);
  block14=new Box(390,195,30,40);
  block15=new Box(360,195,30,40);

  block16=new Box(390,155,30,40);
 
  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot=new SlingShot(polygon,{x:100,y:200});


  
}

function draw() {
  background(180);  
  Engine.update(engine);
  ellipse(polygon.position.x,polygon.position.y,20);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
block15.display();
block16.display();
base.display();
slingshot.display();
  drawSprites();

}
function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed() {
  if (keyCode===32) {
      slingshot.attach(polygon);
  }
}