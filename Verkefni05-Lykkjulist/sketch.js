// Hér kemur kóðinn þinn:

var fjöldiK = 12

function setup() {
  createCanvas(450,600);
  colorMode(HSB);
  background(random(160,360),50,100);
  angleMode(DEGREES);
  //strokeWeight(2);
  //frameRate(3);
  }

function draw() {
  translate(width/2, height/3);
  fill(180,80,100);
  ellipse(0, 0,20,20);
  for (var i = 0; i<fjöldiK; i++){
    angle = 60
    rotate(angle);
    fill(0,0,100);
    ellipse(50,0,50,20);
  }




}
