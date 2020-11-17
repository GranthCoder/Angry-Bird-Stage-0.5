const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,ground,pig1,pig2,log1,log2,log3,log4,bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,345,70,70);
    box2 = new Box(900,345,70,70);
    box3 = new Box(700,270,70,70);
    box4 = new Box(900,270,70,70);
    box5 = new Box(800,155,70,70);

    ground = new Ground(600,380,1200,20);

    pig1 = new Pig(800,355);
    pig2 = new Pig(800,280);

    log1 = new Log(800,315,280,PI/2);
    log2  = new Log(800,195,280,PI/2);
    log3 = new Log(725,130,130,PI/7);
    log4 = new Log (875,130,130,-(PI/7))

    bird = new Bird(200,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    log2.display();
    box3.display();
    box4.display();
    pig2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}