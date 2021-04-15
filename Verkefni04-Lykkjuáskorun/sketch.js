// Hér kemur kóðinn þinn:

function setup() {
  createCanvas(400,400);
  background(255, 215, 0);
  strokeWeight(2)
  frameRate(3);
  colorMode(HSB)
}

function draw() {
  for(var x = 10; x < width; x = x+20){
    fill(random(180,350),70,100);
    for(var y = 10; y < height; y = y+20){
        ellipse(x, y, 15, 15);
    }
  }
}
