const DOWNWARD_ACCELERATION = 0.55;
const UPWARD_ACCELERATION = 40;

class Bird {
  constructor(x, y, texture) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    // for rendering
    this.radius = 20;
    this.texture = texture;
    this.textureSize = this.radius * 4;
  }

  goUp() {
    this.velocity.y -= UPWARD_ACCELERATION;
  }

  outBorders() {
    return (
      this.position.y <= this.radius || this.position.y >= height - this.radius
    );
  }

  update() {
    this.velocity.y += DOWNWARD_ACCELERATION;
    this.position.add(this.velocity);
    this.velocity.limit(5);
    if (this.position.y + this.radius > height)
      this.position.y = height - this.radius;
    else if (this.position.y - this.radius < 0) this.position.y = this.radius;
  }

  display() {
    imageMode(CENTER);
    noStroke();
    image(
      this.texture,
      this.position.x,
      this.position.y,
      this.textureSize,
      this.textureSize
    );
  }
}
