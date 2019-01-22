// Food
//
// A class to represent food, mostly just involves the ability to be
// a random size and to reset

class Food extends Agent {

  // Constructor
  //
  // Pass arguments on to the super() constructor (e.g. for Agent)
  // Also set a minimum and maximum size for this food object which it
  // will vary between when it resets
  constructor(x,y,minSize,maxSize, maxSpeed) {
    super(x,y,random(minSize,maxSize),'#f7abb9');
    this.minSize = minSize;
    this.maxSize = maxSize;
    this.maxSpeed = maxSpeed;
    this.vx = random(-this.maxSpeed, this.maxSpeed);
    this.vy = random(-this.maxSpeed, this.maxSpeed);
  }

  // reset()
  //
  // Set position to a random location on the canvas
  // Set the size to a random size within the limits
  reset() {
    this.x = random(0,width);
    this.y = random(0,height);
    this.size = random(this.minSize,this.maxSize);
    this.vx = random(-this.maxSpeed,this.maxSpeed);
    this.vy = random(-this.maxSpeed,this.maxSpeed);
  }

  update() {

   this.x = this.x + this.vx;
   this.y = this.y + this.vy;

  // Allow the food to wrap
    if(this.x >= windowWidth){
      this.x = 2;
    }
    if(this.x <= 0){
      this.x = windowWidth-2;
    }
    if(this.y >= windowHeight){
      this.y = 2;
    }
    if(this.y <= 0){
      this.y = windowWidth-2;
    }

    //changes velocity randomly every 50 frames
    if (frameCount % 50 === 0){
      this.vx = (random(-this.maxSpeed,this.maxSpeed));
      this.vy = (random(-this.maxSpeed,this.maxSpeed));
    }
  }
}
