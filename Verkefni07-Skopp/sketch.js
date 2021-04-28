// Hér kemur kóðinn þinn:

var boltiX = 300;
var boltiY = 300;
var hradiX = 5;
var hradiY = -6;
var boltiStaerd = 20;
var stig = 0;
var spadiBreidd = 120;
var spadiThykkt = 10;
var spadiY;

function setup() {
	createCanvas(400,500);
	spadiY = height - 455;
	rectMode(CENTER);
	textFont("Courier New",16);
	textStyle(BOLD);
}

function draw() {
  background(255,200,0);
	// Reikna ný hnit út frá hraða boltans:
  boltiX = boltiX + hradiX;
  boltiY = boltiY + hradiY;
	// Athuga hvort boltinn snertir vegginn hægra megin:
  if ((boltiX > width-boltiStaerd/2))  {
    hradiX = hradiX * -1;
	}
//Athuga hvort boltinn snertir vegginn vinstra megin:
	if (boltiX < boltiStaerd/2){
		hradiX = hradiX * -1;
	}
  // Athuga hvort boltinn snertir þakið
  if ((boltiY+boltiStaerd/2 > height)){ //< boltiStaerd)) {
    hradiY = hradiY * -1;
  }
  //Athuga hvort boltinn snertir spaðann
	if (boltiX-boltiStaerd/2 > mouseX - spadiBreidd/2 &&
    boltiX+boltiStaerd < mouseX + spadiBreidd/2 &&
		boltiY+boltiStaerd < spadiY - spadiThykkt/4) { //LAGA!!!!!!!!!
    hradiY = hradiY * -1;
		stig = stig+1;

  }
	//Ef boltinn fer út af


	// Teikna boltann
  fill(236,36,94);
  rect(boltiX, boltiY, boltiStaerd, boltiStaerd);
	// Teikna spaðann
  fill(46, 204, 113); //upphaflegi liturinn: fill(3,123,227);
  rect(mouseX,spadiY,spadiBreidd,spadiThykkt);
  fill (0);
  ellipse(mouseX, spadiY, 3,3);
	// Teikna stigin
  fill(0);
  text("Stig: " + stig,10,20);


}
