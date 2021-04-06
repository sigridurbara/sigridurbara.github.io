// Hér kemur kóðinn þinn:

function setup() {
  createCanvas(800,500,);
  //background(0);
    //fill(69, 90, 100 );
    //noStroke();
    //triangle(250,445,400,180,545,445);
    //fill(0);
    //noStroke()
    //rect(348,159,105,100);
}
function draw() {
  //BAKGRUNNUR->B.
  background(0); //B.
    fill(69, 90, 100 ); //B.
    noStroke(); //B.
    triangle(250,445,400,180,545,445); //B.
    fill(0); //B.
    noStroke() //B.
    rect(348,159,105,100); //B.
  //LITLA MIÐJAN->LM.
  fill(255, 235, 59); //LM.
  noStroke(); //LM.
  ellipse(random(300, 500), random(100, 250), random(3, 10), random(3, 10)); //LM.
  fill(255, 235, 59); //LM.
  noStroke(); //LM.
  ellipse(random(300, 500), random(100, 250), random(3, 10), random(3, 10)); //LM.
  fill(255, 235, 59); //LM.
  noStroke(); //LM.
  ellipse(random(300, 500), random(100, 250), random(5, 15), random(5, 15)); //LM.
  fill(255, 235, 59); //LM.
  noStroke(); //LM.
  ellipse(random(300, 500), random(100, 250), random(10,17), random(3, 17)); //LM.
  //STÓRA MIÐJAN->SM.
  fill(255, 87, 34); //SM.
  noStroke(); //SM.
  rect(random(160,640), random(5,245), random(7,23), random(7,23)); //SM.
  fill(255, 87, 34); //SM.
  noStroke(); //SM.
  rect(random(160,640), random(5,245), random(7,23), random(7,23)); //SM.
  fill(255, 87, 34); //SM.
  noStroke(); //SM.
  rect(random(160,640), random(5,245), random(7,23), random(7,23)); //SM.
  fill(255, 87, 34); //SM.
  noStroke(); //SM.
  rect(random(160,640), random(5,245), random(7,23), random(7,23)); //SM.
  //HÆGRI KANTUR->HK.
  fill(229, 57, 53);
  noStroke();
  
}
