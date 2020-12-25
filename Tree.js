class Tree{
    constructor(x, y, width, height) {
      this.body = Bodies.rectangle(x, y, width, height, {isStatic: true});
      this.x = this.x;
      this.y = this.y;
      this.width = 500;
      this.height = 500;
      this.image = loadImage("tree.png");
      //World.add(world, this.body);
    }
  
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }