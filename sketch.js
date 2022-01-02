var ball;
var ball_options;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var down, left, right;
var top_wall, left_wall, right_wall;

function setup() {
	createCanvas(1000, 600);
	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);
	ellipseMode(RADIUS);
	//Create the Bodies Here.
  down = new Ground(500,575,1000,50);
  right = new Ground(900,500,25,100);
  left = new Ground(700,500,25,100);
  top_wall = new Ground(500,25,1000,50);
  left_wall = new Ground(25,300,50,1000);
  right_wall = new Ground(975,300,50,1000)
	ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
	}
	
	ball = Bodies.circle(200,120,20,ball_options);
	World.add(world, ball);
	
	
	Engine.run(engine);
}


function draw() {
Engine.update(engine);
  background("black");
fill("white")
ellipse(ball.position.x, ball.position.y, 20);
fill(127)
down.display();
fill("yellow");
right.display();
left.display();
fill(127)
top_wall.display();
right_wall.display();
left_wall.display();
zForce();
}

function zForce(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.5, y:-0.5})
	}
  }