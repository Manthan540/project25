class Dustbin {
    constructor(x,y,width,height) {
      this.image = loadImage("dustbingreen.png")
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      image(this.image,this.body.position.x,this.body.position.y,100,100);
    }
  }