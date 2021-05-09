class Polygon{
    constructor(x,y,radius){
      var options={
      restitution : 0.8 ,
     friction : 0.3 ,
     density : 1.0 
    }
    this.box=Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world,this.box);
      this.image = loadImage("polygon.png")
    }
    display(){
      var pos=this.box.position;
      var angle = this.box.angle ;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      fill("lime");
       imageMode(CENTER);
    image(this.image,0,0,this.radius,this.radius);
    pop();
    }
  }