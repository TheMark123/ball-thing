const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;

var btn1;
var btn2;

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

  btn1 = createImg('right.png');
  btn1.position(220,30);
  btn1.size(50,50);
  btn1.mouseClicked(hForce);
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
  ground =new Ground(600,800,1200,40);
  left = new Ground(0,400,40,800);
  right = new Ground(1200,400,40,800);
  top_wall = new Ground(600,0,1200,20);
  trash1 = new Ground(1000, 760,20,100)
trash2 = new Ground(900, 760, 20, 100)
  var ball_options = {
    isStatic=false,
    restitution: 0.3,
    friction=0,
    density=1.2

    
    
  }

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);

  ellipse(ball.position.x,ball.position.y,20);

  ground.show();
  top_wall.show();
  left.show();
  right.show();
  trash1.show()
  trash2.show()
  Engine.update(engine);
}



function hForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}