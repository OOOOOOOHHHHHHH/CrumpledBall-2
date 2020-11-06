class Dustbin{
    constructor(x,y){
        var options = {
            isStatic :true,
            friction :0.5,
            density :1.5  
        }
        this.body = Bodies.circle(x,y,10,options);
        this.radius= 70;
        World.add(world, this.body);                 
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius);
        pop();

    }
  
}