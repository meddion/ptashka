let bird;
let pipes = [];
let birdImg;
let backgroundImg;
let scoreBoard;

function preload() {
  birdImg = loadImage("assets/bird.png");
  backgroundImg = loadImage("assets/background.png");
}

function setup() {
  createCanvas(800, 600);
  bird = new Bird(width * 0.5, height * 0.5, birdImg);
  scoreBoard = new ScoreBoard("Score:");
}

function draw() {
  imageMode(CORNER);
  background(backgroundImg);

  bird.update();
  bird.display();
  if (bird.outBorders()) scoreBoard.setScoreToZero();

  pipes = pipes.filter(pipe => {
    if (pipe.outBorders()) return false;
    if (pipe.isCollidedWith(bird)) {
      pipe.setColor(255, 0, 0);
      scoreBoard.setScoreToZero();
    }
    pipe.update();
    pipe.display();
    return true;
  });
  if (frameCount % 60 === 0) pipes.push(new Pipe());

  scoreBoard.update();
  scoreBoard.display();
}

function keyTyped() {
  if (key === "w" || key === "W") bird.goUp();
}
