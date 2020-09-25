class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 5
        }
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            rectMode(CENTER);
            stroke(19,125,135);
            
            //if(pointA.x < 200) {
                strokeWeight(5);

                line(pointA.x, pointA.y, pointB.x -10, pointB.y);
              //  line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
               
            
            /*else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                
            }
           */
            
            pop();
        }
    
    }
}