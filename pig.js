class Pig
{
    constructor(x,y)
    {
        var options={restitution:1,friction:0.3,density:1.0}
       this.body=Bodies.rectangle(x,y,width,50,50,options);
       World.add(world,this.body);
       this.width=50;
       this.height=50;

    }
    display()
    {
        push();
        translate(this.body.position.x,this.body.position.y);
        //angleMODE(RADIANS);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();

    }



}