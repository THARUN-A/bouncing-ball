const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var ball;

function setup() {
  var canvas = createCanvas(800,400);
engine = Engine.create();
world = engine.world;

var options ={
  isStatic:true
}
ground = Bodies.rectangle(400,390,800,20,options); //x,y,w,h
World.add(world,ground);

var options ={
  restitution:1.0
}
ball = Bodies.circle(400,200,50,options); 
World.add(world,ball);
 
//console.log(object.position.x);
//console.log(object.position.y);
}

function draw() {
  background("black"); 
  Engine.update(engine)
  
  rectMode(CENTER)
  fill("brown");
  rect(ground.position.x,ground.position.y,800,20)

  ellipseMode(RADIUS)
  fill("blue");
  ellipse(ball.position.x,ball.position.y,50,50)
}