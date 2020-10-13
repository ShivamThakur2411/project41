class Umbrella {
    constructor(x, y, width, height) {
        var options = {
            isStatic:true,
            friction: 0
            }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("walking1.png");
        
        World.add(world, this.body);
    }
    display() {
        imageMode(CENTER);
         var pos = this.body.position;
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}