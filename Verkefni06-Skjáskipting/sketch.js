// Hér kemur kóðinn þinn:

//fjöldiK = fjöldi krónublaða
var y = 10x + height/3

function setup() {
  createCanvas(450,600);
  //colorMode(HSB);
  background(0,0,100);
  //angleMode(DEGREES);
  //frameRate(2);
  }

function draw() {
  bakgrunnur();
  blóm();

function bakgrunnur(){
  push();
  translate(width/3,height/3);
  if(mouseX>width/3 && mouseY>height/2);
    for(var x = 20; x < width-20; x = x+20) {
    fill(random(180,350),65,100);
      for(var y = 20; y < height-20; y = y+20) {
      ellipse(x, y, 15, 15);

    }
  }
  pop();
}

function blóm(){
  push();
  translate(width/2, height/3);
//stilkurinn
  fill(180,80,100);
  noStroke();
  stroke(0,0,0);
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
    stroke(0,0,0);
    ellipse(35,0,50,10);
  }
  pop();
  }
}
