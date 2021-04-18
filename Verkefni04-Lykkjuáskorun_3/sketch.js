// Hér kemur kóðinn þinn:

function setup() {
  createCanvas(400,400);
  strokeWeight(2);
  frameRate(2);
}

function draw() {
  background(255, 215, 0);
  fill(255,0,100);
  for(var y = 20; y < height; y = y+30) {
    fjöldi = random(13);
    for(var k = 0; k < fjöldi; k++){
      ellipse(15 + k*30,y,10,10);

      }
    }
  }
