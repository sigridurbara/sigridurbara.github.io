// Hér kemur kóðinn þinn:



function setup() {
  createCanvas(500,500);
  colorMode(RGB);
  //angleMode(DEGREES);
  frameRate(2);
  }

function draw() {
  background(0);
  grænnFerningur();

function grænnFerningur(){
  push();
  //background(0);
  fill(34, 139, 34);
  if(mouseX>width/2 && mouseY<height/3){
    rect(width/2,-5,width/2,height/3+5);
  }
  else{
    fill(143, 188, 139);
    rect(width/2,-5,width/2,height/3+5);
  }
  pop();
}

function fjólublárFerningur(){
  push();
  fill(139, 0, 139);
  if(mouseX<width/2 && mouseY>height-100){
    rect(0,height,width/2,height-100);
  }
  else{
    fill(106, 90, 205);
    rect(0,height,width/2,height-100);
  }
}





  //}
}
