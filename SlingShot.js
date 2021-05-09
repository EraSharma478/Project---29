class SlingShot {
    constructor(bodyA, pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
         } // properties of a constraint
        this.pointB=pointB;
        this.sling=Constraint.create(options); // creating a constraint
    World.add(world,this.sling); //adding constraint to the world
    }
    
    display(){
        if(this.sling.bodyA!=null){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        stroke("yellow");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
                                    }
    }
     
    fly(){
        this.sling.bodyA=null;
    }
    
    }