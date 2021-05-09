class Ground{
    constructor(x,y,width,height){
      var options={
      isStatic:true
    }
    this.ground=Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.ground);
      this.width=width;
      this.height=height;
    }
    display(){
      var pos=this.ground.position;
      fill("lime");
       rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
    }
  }