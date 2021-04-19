// Hér kemur kóðinn þinn:

var fjöldiK = 15

function setup() {
  createCanvas(450,600);
  colorMode(HSB);
  background(random(160,360),50,100);
  angleMode(DEGREES);
  //frameRate(3);
  }

function draw() {
  bakgrunnur();
  blóm();
function bakgrunnur(){
  push();
  for(var x = 30; x < width; x = x+20) {
    fill(random(180,350),70,100);
      for(var y = 10; y < height; y = y+20) {
      ellipse(x, y, 15, 15);

    }
  }
  pop();
}

function blóm(){
  push();
  translate(width/2, height/3);
//stilkurinn
  fill(115,100,40);
  noStroke();
  rect(-2,0,4,140);
//miðjan í blóminu
  fill(180,80,100);
  ellipse(0, 0,20,20);
//krónublöðin
  for (var i = 0; i<fjöldiK; i++){
    angle = 24
    rotate(angle);
    fill(0,0,100);
    strokeWeight(1);
    stroke(115,100,40);
    ellipse(35,0,50,10);
  }
  pop();
  }
}
