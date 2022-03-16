var canvas;
var backgroundImage, fuelImage, obstacleImage, starImage, rocketImage, ufoImage;
var fuel, obstacle, star, rocket, ufo;

function preload() {
  backgroundImage = loadImage('assets/background.jpg');
  fuelImage = loadImage('assets/Fuel.png');
  obstacleImage = loadImage('assets/obstacle.png');
  starImage = loadImage('assets/Star.png');
  rocketImage = loadImage('assets/rocket.png');
  ufoImage = loadImage('assets/UFO.png');
}

function setup() {
  createCanvas(800,450);
}

function draw() {
  background(200);
  image(backgroundImage, 0, 0, 800, 450);
}