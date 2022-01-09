const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var topwall
var bottomwall
var leftwall
var rightwall
var ball
var button

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  topwall =new Walls(200,20,400,40)
  bottomwall =new Walls(200,380,400,40)
  leftwall =new Walls(20,200,40,400)
  rightwall =new Walls(380,200,40,400)
  
  var ballOptions = {restitution : 3, density : 0.5, frictionAir : 0.3}
  ball = Bodies.circle(200,200,35,ballOptions)
  World.add(world,ball)

  button = createImg('push.png')
  button.position(50,100)
  button.size(20,20)
  button.mouseClicked(press)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  topwall.display()
  bottomwall.display()
  leftwall.display()
  rightwall.display()
  ellipse(ball.position.x, ball.position.y, 35, 35)
  
}

function press(){
  Matter.Body.applyForce(ball,{x:0, y:0},{x : 70, y : 70})
}