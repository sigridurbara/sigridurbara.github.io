// Hér kemur kóðinn þinn:

//fjöldiK = fjöldi krónublaða

function setup() {
  createCanvas(500,500);
  colorMode(HSB);
  //angleMode(DEGREES);
  //frameRate(2);
  }

function draw() {
  bakgrunnur();
  //blóm();

function bakgrunnur(){
  push();
  background(0,0,100);
  translate(width/2,height/2);
  if(mouseX>width/3 && mouseY>height/2);
    for(var x = width/2; x < height+200; x = x+50) {
      fill(random(180,350),65,100);
      for(var y = width/2+50; y < height+200; y = y+50){
      angle = 50
      rotate(angle);
      triangle(0,0,);
      }

    }
  }
}
