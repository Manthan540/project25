class Ball {
constructor(x,y,radius) {
    this.image = loadImage("paper.png")
var options = {
isStatic : false,
restitution : 0.3,
friction : 0.5,
density : 1.2 
}
this.radius = radius;
this.body = Bodies.circle(x,y,radius,options);
World.add(world, this.body);
}

display() {
var pos =this.body.position;
rectMode(CENTER);
fill("pink");
image(this.image,this.body.position.x,this.body.position.y,50,50);

}

} 