class Polygon{
    constructor(x, y, r){
      var options={
          friction:1,
          density:1.2,
          restitution:1
      }
      this.r=r;
      this.body=Matter.Bodies.circle(x,y,this.r,options);
      this.image=loadImage("polygon.png");
      World.add (world, this.body);
    }

    display(){
        imageMode (CENTER);
        image (this.image,this.body.position.x, this.body.position.y, this.r, this.r);
    }
}