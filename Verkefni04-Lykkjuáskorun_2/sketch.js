// Hér kemur kóðinn þinn:

function setup() {
  createCanvas(400,400);
  background(255, 215, 0);
  strokeWeight(2);
  frameRate(2);
  colorMode(HSB);
}
//Default mode er ellipseMode(CENTER)
function draw() {
  for(var x = 300; x < width; x = x-15) {
    fill(random(180,350),70,100);
    for(var y = 300; y < height; y = y-15) {
        ellipse(200, 200, x, y);
    }
  }
}
