const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var score=0;

function preload() {
  // backgroundImg = loadImage("sprites/bg.png");
  getBackgroundImage();
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  polygon=new Polygon(50,100,20);

  slingshot =new SlingShot(polygon.body,{x:75,y:200});

  ground=new Ground(400,380,800,20);

  stand1=new Ground(400,310,300,10);
  stand2=new Ground(700,170,300,10);


  //level one
  block1=new Box(300,275,30,40);
  block2=new Box(330,275,30,40);
  block3=new Box(360,275,30,40);
  block4=new Box(390,275,30,40);
  block5=new Box(420,275,30,40);
  block6=new Box(450,275,30,40);
  block7=new Box(480,275,30,40);

  //level two
  block8=new Box(330,235,30,40);
  block9=new Box(360,235,30,40);
  block10=new Box(390,235,30,40);
  block11=new Box(420,235,30,40);
  block12=new Box(450,235,30,40);

  //level three
  block13=new Box(360,195,30,40);
  block14=new Box(390,195,30,40);
  block15=new Box(420,195,30,40);

  //top
  block16=new Box(390,155,30,40);

  //level one-2
  block17=new Box(630,135,30,40);
  block18=new Box(660,135,30,40);
  block19=new Box(690,135,30,40);
  block20=new Box(720,135,30,40);
  block21=new Box(750,135,30,40);

  //level two-2
  block22=new Box(660,95,30,40);
  block23=new Box(690,95,30,40);
  block24=new Box(720,95,30,40);

  //top-2
  block25=new Box(690,55,30,40);
  
}

function draw() {
  Engine.update(engine);
  background(0);

  

  textSize(16);
  fill("white");
  text("Drag the Hexagonal Stone and Release it to launch it towards the blocks", 100,20);
  fill("gold");
  text("Press SPACE to play again", 600,350);
  text("SCORE:"+score,100,40);

  stand1.display();
  stand2.display();

 fill("lightblue");
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  fill("lightpink");
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  fill("lightgreen");
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  fill("grey");
  block16.display();
  block16.score();
  fill("lightblue");
  block17.display();
  block17.score();
  block18.display();
  block18.score();
  block19.display();
  block19.score();
  block20.display();
  block20.score();
  block21.display();
  block21.score();
  fill("lightpink");
  block22.display();
  block22.score();
  block23.display();
  block23.score();
  block24.display();
  block24.score();
  fill("lightgreen");
  block25.display();
  block25.score();

  ground.display();
  slingshot.display();
  polygon.display();

  







  drawSprites();

}

function mouseDragged(){
Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingshot.attach(polygon.body);
  }
}


async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/Mexico_City");
  var responseJSON = await response.json();
  var date = responseJSON.datetime;
  var hour = date.slice(11,13);
  if(hour>=06  && hour<=15){
  bg= "dayTime.png";
  
  }else{
  bg="moon.png";
  }
  backgroundImg=loadImage(bg);
  
  }