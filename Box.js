class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.visibility=255;
  }


  score(){
    if(this.Visiblity<0 && this.Visiblity>-105){
       score++;
    }
  }
  
display(){

  if(this.body.speed <3){
    super.display();

}
else{
  World.remove(world, this.body);
  push();
  this.visibility = this.visibility-5;
  pop();
}

}

}