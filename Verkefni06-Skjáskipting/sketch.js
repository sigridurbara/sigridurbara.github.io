// Hér kemur kóðinn þinn:


function setup() {
  createCanvas(500,500);
  colorMode(RGB);
  noStroke();
  frameRate(2);
  }

function draw() {
  background(255);
  grænnFerningur();
  fjólubleikurFerningur();
  fjólublárFerningur();


function grænnFerningur(){
  push();
  //background(0);
  fill(34, 139, 34,95);
  if(mouseX>width/2 && mouseY<height/3){
    rect(width/2,-5,width/2,height/3+5);
  }
  else{
    fill(143, 188, 139);
    rect(width/2,-5,width/2,height/3+5);
  }
  pop();
}

function fjólubleikurFerningur(){
  push();
  fill(106, 90, 205);
  if(mouseX<width/2 && mouseY>height-50){
    rect(0,height-50,width/2,height-50);
  }
  else{
    fill(139, 0, 139);
    rect(0,height-50,width/2,height-50);
  }
  pop();
}

function fjólublárFerningur(){
  push();
  fill(147, 112, 219,80);
  rect(width/2,height/3,width/2,height/3*2);
  pop();
}

function fjólubláBlóm(){
  push();
  //translate x-hnit : fjólubláBlóm
  //var x = random(width/2+20,width/2-20);
  //translate y-hnit : fjólubláBlóm
  //var y = random(height/3+20,height/3*2-20);
  translate(300,300);
  fill(204, 101, 192, 127);
  stroke(127, 63, 120);
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, random(10,15),random(60,70));
    rotate(PI/5)
  }
}
pop();

}
