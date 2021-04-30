// Hér kemur kóðinn þinn:

var boltiX = 300;
var boltiY = 300;
var hradiX = 5;
var hradiY = -6;
var boltiStaerd = 10;
var stig = 0;
var spadiBreidd = 120;
var spadiThykkt = 15;
var spadiY = 7;

function setup() {
	createCanvas(400,500);
	//spadiY = height - 455;
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
  // Athuga hvort boltinn snertir botninn
  if ((boltiY+boltiStaerd/2 > height)){ //< boltiStaerd)) {
    hradiY = hradiY * -1;
	}
	//Athuga hvort boltinn snertir þakið
	if (abs(boltiY-boltiStaerd/2 < 0)){
		stig = stig-1;
		if(hradiX>5){
		hradiY = hradiY * -1;
		hradiX = hradiX-2
		hradiY = hradiY-2
		}
			else{
				hradiY = hradiY * -1;
				hradiX = hradiX * -1;
	 	}
  }
  //Athuga hvort boltinn snertir spaðann
	if (abs(boltiX-boltiStaerd/2 > mouseX - spadiBreidd/2 &&
    boltiX+boltiStaerd < mouseX + spadiBreidd/2 &&
		boltiY-boltiStaerd < spadiY+boltiStaerd/2 - spadiThykkt/2)) {
		stig = stig+1;
			if(hradiX<15){
				hradiY = hradiY * -1.01;
				hradiX = hradiX * -1.02;
			}
			else{
				hradiY = hradiY * -1;
			}
  }
//Litur á bakgrunn
	if(stig<0){
		background(127,140,141);
	}
	if(stig>0 && stig>3){
		background(255,200,0);
	}
	if(stig>3 && stig<8){
		background(243,156,18);
	}
	if(stig>8 && stig<15){
		background(231,76,60);
	}
	if(stig>15){
		background(52,152,219);
	}


	//Ef boltinn fer út af

	//teikna boltann
		push();
			noStroke();
			//angleMode(DEGREES);
			//angle = 45
	  //miðjan á boltanum
	    fill(23, 165, 137);
	    rect(boltiX, boltiY, boltiStaerd, boltiStaerd) //0, 0,7,7);
	  //armarnir
			//armar hægra megin við miðju
	      fill(255);
	      ellipse(boltiX+20,boltiY-5,10,5);
	      ellipse(boltiX+20,boltiY+5,10,5);
			//armar vinstra megin við miðju
				ellipse(boltiX-20,boltiY+5,-10,5);
				ellipse(boltiX-20,boltiY-5,-10,5);
			//armar fyrir ofan miðju
				ellipse(boltiX+5,boltiY-20,5,10);
				ellipse(boltiX-5,boltiY-20,5,10);
			//armar fyrir neðan miðju
				ellipse(boltiX+5,boltiY+20,5,10);
				ellipse(boltiX-5,boltiY+20,5,10);
			pop();


	// Teikna boltann
  //fill(236,36,94);
  //rect(boltiX, boltiY, boltiStaerd, boltiStaerd);

	// Teikna spaðann
  fill(46, 204, 113); //upphaflegi liturinn: fill(3,123,227);
  rect(mouseX,spadiY,spadiBreidd,spadiThykkt);
  fill (0);
  ellipse(mouseX, spadiY, 3,3);
	// Teikna stigin
  fill(0);
  text("Stig: " + stig,10,480);


}
