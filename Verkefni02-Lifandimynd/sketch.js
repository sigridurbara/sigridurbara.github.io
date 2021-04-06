// Hér kemur kóðinn þinn:

function setup() {
  createCanvas(800,500,);
  //FYLLA SKJÁINN
  //background(0);
    //fill(69, 90, 100 );
    //noStroke();
    //triangle(250,445,400,180,545,445);
    //fill(0);
    //noStroke()
    //rect(348,159,105,100);
}
function draw() {
//BAKGRUNNUR (ALLTAF NÝR BAKGRUNNUR)
  background(0);
    fill(69, 90, 100 );
    noStroke();
    triangle(250,445,400,180,545,445);
    fill(0);
    noStroke()
    rect(348,159,105,100);
//LITLA MIÐJAN
  fill(255, 235, 59);
  noStroke();
  ellipse(random(300, 500), random(100, 250), random(3, 10), random(3, 10));
  fill(255, 235, 59);
  noStroke();
  ellipse(random(300, 500), random(100, 250), random(3, 10), random(3, 10));
  fill(255, 235, 59);
  noStroke();
  ellipse(random(300, 500), random(100, 250), random(5, 15), random(5, 15));
  fill(255, 235, 59);
  noStroke();
  ellipse(random(300, 500), random(100, 250), random(10,17), random(3, 17));
//STÓRA MIÐJAN
  fill(255, 139, 34);
  noStroke();
  rect(random(160,640), random(5,245), random(7,23), random(7,23));
  fill(255, 139, 34);
  noStroke();
  rect(random(160,640), random(5,245), random(7,23), random(7,23));
  fill(255, 139, 34);
  noStroke();
  rect(random(160,640), random(5,245), random(7,23), random(7,23));
  fill(255, 139, 34);
  noStroke();
  rect(random(160,640), random(5,245), random(7,23), random(7,23));
//HÆGRI KANTUR
  fill(255, 87, 34);
  noStroke();
  rect(random(100,300), random(10,330), random(15,30), random(15,30));
  fill(255, 87, 34);
  noStroke();
  rect(random(100,300), random(10,330), random(15,30), random(15,30));
  fill(255, 87, 34);
  noStroke();
  rect(random(100,300), random(10,330), random(15,30), random(15,30));
//VINSTRI KANTUR
  fill(255, 87, 34);
  noStroke();
  rect(random(500,700), random(10,330), random(15,30), random(15,30));
}
