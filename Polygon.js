class Polygon{
    constructor(x, y, r) {
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':2
        }
        
        this.r = r;
        this.image=loadImage("images.png");
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
      }
      display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y, 50, 50);
      }
}