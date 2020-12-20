class Block{
    constructor(x,y,width,height){
        var options={
            'isStatic':false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.Visibility=225
        this.body= Matter.Bodies.rectangle(x,y, width, height, options);
        World.add (world, this.body);

    }

    display(){
        if(this.body.speed<5){
            stroke ("white");
            strokeWeight (1);
            var r=random (1,250);
            var g=random (1,240);
            var b=random (1,250);

            fill (rgb (r,g,b));
            rect(this.body.position.x, this.body.position.y, this.width, this.height);

            

        }
        else{
            World.remove (world, this.body);
            push ();
            this.Visibility=this.visibility-5;
            pop ();
            score=score+1;
            
        }
       
    }

  
}