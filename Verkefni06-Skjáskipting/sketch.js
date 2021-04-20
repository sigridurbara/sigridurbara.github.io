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
  fjólubláBlóm();
  línur();


function grænnFerningur(){
  push();
  noStroke();
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

function fjólubleikurFerningur(){
  push();
  noStroke();
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
  noStroke();
  fill(147, 112, 219,80);
  rect(width/2,height/3,width/2,height/3*2);
  pop();
}


function fjólubláBlóm(){
  if(mouseIsPressed){
    push();
    translate(350,300);
    fill(204, 101, 192, 127);
    stroke(127, 63, 120);
  //blómið
    for(let i = 0; i < 20; i++){
      rotate(PI/5)
      ellipse(0, 30, random(10,15),random(60,70));
    }
  //innri hringur
    for(let j = 0; j < 20; j++){
      rotate(PI/5);
      ellipse(100,80,random(5,10),random(40,50));
    }
  //ytri hringur
    for(let j = 0; j < 20; j++){
      rotate(PI/5);
      ellipse(140,150,random(7),random(25,35));
    }
  pop();

  }
}

function línur(){
  //if(){
  push();
  strokeWeight(2);
  stroke(0);
  line(0,67,50,0);
  line(0,133,100,0);
  line(0,215,165,0);
  line(0,298,225,0);
  line(0,380,250,43);
  line(0,450,250,120);
  line(60,450,250,195);
  line(120,450,250,270);
  line(175,450,250,350);
  //}
}

}
