class Drop{
    constructor(x, y) {

        var options ={
            restitution:0.2
        }
        this.body = Bodies.circle(x, y, 3,options);       
        this.radius = 3;

        World.add(world, this.body);

    }
    display() {
            if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(0, 400), y:random(0, 400)});
            }

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius,this.radius);
        pop();
    }
};