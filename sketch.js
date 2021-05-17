const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
//preload the images here
bgimg=loadImage("skybg.jpg");
}

function setup() {
  createCanvas(1300, 800);
  engine = Engine.create();
  world = engine.world;
  
  // create sprites here
  box1 = new Block(800,100,50,50);
  box2 = new Block(800,100,50,50);
  box3 = new Block(800,100,50,50);
  box4 = new Block(800,100,50,50);
  box5 = new Block(800,100,50,50);
  box6 = new Block(800,100,50,50);

  box7= new Block(700, 100, 50, 50);
  box8= new Block(700, 100, 50, 50);
  box9= new Block(700, 100, 50, 50);
  box10= new Block(700, 100, 50, 50);
  box11= new Block(700, 100, 50, 50);
  box12= new Block(700, 100, 50, 50);

  box13 = new Block(600, 100, 50, 50);
  box14 = new Block(600, 100, 50, 50);
  box15 = new Block(600, 100, 50, 50);
  box16 = new Block(600, 100, 50, 50);
  box17 = new Block(600, 100, 50, 50);
  box18 = new Block(600, 100, 50, 50);
  box19 = new Block(600, 100, 50, 50);
  box20 = new Block(600, 100, 50, 50);

  

  ground = new Ground(10, 600, width+width/2+90, 25);

  monster = new Monster(1000, 250, 100);

  hero = new Hero(200, 100, 40);

  fly= new Fly(hero.body, {x:300, y:50});

}

function draw() {
  background(bgimg);
  Engine.update(engine);

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
  box19.display();
  box20.display();

  hero.display();

  monster.display();


  fill(37, 247, 58);
    stroke("black")
    strokeWeight(2);
    textSize(50)
    text("KILL THE MONSTER", 700, 200)
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY});
}

