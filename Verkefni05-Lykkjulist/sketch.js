// Hér kemur kóðinn þinn:

var fjöldiK = 15

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
    angle = 24
    rotate(angle);
    fill(0,0,100);
    ellipse(35,0,50,10);
  }
  fill(115,100,40);




}
