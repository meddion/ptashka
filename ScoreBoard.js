class ScoreBoard {
  constructor(title) {
    this.title = title;
    this.score = 0;
  }

  setScoreToZero() {
    this.score = 0;
  }

  update() {
    if (frameCount % 60 === 0) this.score++;
  }

  display() {
    textSize(32);
    fill(255, 255, 255);
    text(this.title + " " + this.score, 10, 30);
  }
}
