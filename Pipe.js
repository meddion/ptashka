const PIPE_HOLE_SIZE = 60;
const PIPE_WIDTH = 40;

class Pipe {
  constructor() {
    this.x = width;
    this.velocity = -5;
    this.color = color(115, 191, 46);

    const upperLengthScale = random(0.3, 0.7);
    const bottomLengthScale = 1 - upperLengthScale;
    this.upperBorder = upperLengthScale * height - PIPE_HOLE_SIZE;
    this.lowerBorder = bottomLengthScale * height - PIPE_HOLE_SIZE;
  }

  setColor(r, g, b) {
    this.color = color(r, g, b);
  }

  outBorders() {
    return this.x + PIPE_WIDTH < 0;
  }

  isCollidedWith(bird) {
    const x = bird.position.x + bird.radius;
    const y = bird.position.y;
    return (
      x >= this.x &&
      x <= this.x + PIPE_WIDTH + bird.radius &&
      (height - this.lowerBorder <= y + bird.radius ||
        this.upperBorder >= y - bird.radius)
    );
  }

  update() {
    this.x += this.velocity;
  }

  display() {
    imageMode(CORNER);
    noStroke();
    fill(this.color);
    rect(this.x, 0, PIPE_WIDTH, this.upperBorder); // upper
    rect(this.x, height, PIPE_WIDTH, -this.lowerBorder); // lower
  }
}
