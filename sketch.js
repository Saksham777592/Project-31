const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;
//const Events = Matter.Events;

var ground;

var divisions = [];

var divBalls1 = [];
var divBalls2 = [];
var divBalls3 = [];
var divBalls4 = [];
var divBalls5 = [];

var balls = [];

var i;

var a, b, c, d, e, f, g;

function setup() {
    createCanvas(500, 500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(250, 470, 500, 20);
   
    //we are asking the computer to create divisions as long as i is less than width
    for(i = 0; i<= width; i = i + 120) {
        divisions.push(new Division(i, 380, 10, 150));
    }
    
    for(i = 0; i<= width; i = i + 45) {
        divBalls1.push(new divBall(i, 50, 10))
    }

    for(i = 0; i<= width; i = i + 45) {
        divBalls2.push(new divBall(i, 100, 10));
    }

    for(i = 0; i<= width; i = i + 45) {
        divBalls3.push(new divBall(i, 150, 10));
    }

    for(i = 0; i<= width; i = i + 45) {
        divBalls4.push(new divBall(i, 200, 10));
    }

    for(i = 0; i<= width; i = i + 45) {
        divBalls5.push(new divBall(i, 250, 10));
    }

    Engine.run(engine);
}

function draw() {
    background("black");

    ground.display();

    //divisions.length is the length of the array divisions
    for(a = 0; a < divisions.length; a++) {
        divisions[a].display();
    }

    for(b = 0; b < divBalls1.length; b++) {
        divBalls1[b].display();
    }

    for(c = 0; c < divBalls2.length; c++) {
        divBalls2[c].display();
    }

    for(d = 0; d < divBalls3.length; d++) {
        divBalls3[d].display();
    }

    for(e = 0; e < divBalls4.length; e++) {
        divBalls4[e].display();
    }

    for(f = 0; f < divBalls5.length; f++) {
        divBalls5[f].display();
    }
  
    if(frameCount%60 === 0) {
       balls.push(new Ball(random(100, 400), 20, 10));
    }

    for(g = 0; g < balls.length; g++) {
        balls[g].display();
    }
}