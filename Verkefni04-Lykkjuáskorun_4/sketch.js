// Hér kemur kóðinn þinn:

function setup() {
  createCanvas(400,400);
  background(255, 215, 0);
  strokeWeight(2);
  frameRate(3);
  colorMode(HSB);
}

//EFSTA RÖÐ: HRINGIR
function draw() {
  for(var x = 50; x < 350; x = x + 25) {
    fill(random(180,350),70,100);
    ellipse(x,150,20,20)
  }

//MIÐJU RÖÐ: FERNINGAR
  fill(random(180,350),70,100);
  for(var x1 = 100; x1 < 300; x1 = x1 + 25) {
      ellipse(x-10,190,20,20);
}

//NEÐSTA RÖÐ: HRINGIR
  for(var x2 = 75; x2 < 325; x2 = x2 + 25) {
    fill(random(180,350),70,100);
    ellipse(x,250,20,20)
  }
}
