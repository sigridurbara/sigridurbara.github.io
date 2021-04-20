// Hér kemur kóðinn þinn:



function setup() {
  createCanvas(500,500);
  colorMode(RGB);
  //angleMode(DEGREES);
  frameRate(2);
  }

function draw() {
  bakgrunnur();
  //blóm();

function bakgrunnur(){
  push();
  background(0);
  //translate(width/2,height/2);
  fill(34, 139, 34);
  if(mouseX>width/2 && mouseY<height/3){
    rect(width/2,-5,width/2,height/3+5);
  }



    //}
  }
}
