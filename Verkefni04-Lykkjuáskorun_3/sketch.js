// Hér kemur kóðinn þinn:

function setup() {
  createCanvas(400,400);
  strokeWeight(2);
  frameRate(2);
}

function draw() {
  background(255, 215, 0);
  for(var x = 10; x < width; x = x+20) {
    fill(random(180,350),70,100);
    for(var y = 10; y < height; y = y+20) {
        ellipse(x, y, 15, 15);
    }
  }
}
