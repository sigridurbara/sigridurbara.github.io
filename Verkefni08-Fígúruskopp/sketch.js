// Hér kemur kóðinn þinn:

var kisaX = 10;
var kisaY = 10;
var hradiX = 5;
var hradiY = -6;


function setup() {
	createCanvas(400,500);
	//spadiY = height - 455;
	rectMode(CENTER);
	textFont("Courier New",16);
	textStyle(BOLD);
}

function draw() {
  background(178, 235, 242);
	// Reikna ný hnit út frá hraða kisu:
  boltiX = boltiX + hradiX;
  boltiY = boltiY + hradiY;
	// Athuga hvort kisa snertir vegginn hægra megin:
  if ((boltiX > width-boltiStaerd/2))  {
    hradiX = hradiX * -1;
	}
//Athuga hvort kisa snertir vegginn vinstra megin:
	if (boltiX < boltiStaerd/2){
		hradiX = hradiX * -1;
	}
  // Athuga hvort kisa snertir botninn
  if ((boltiY+boltiStaerd/2 > height)){ //< boltiStaerd)) {
    hradiY = hradiY * -1;
	}
	//Athuga hvort kisa snertir þakið
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

function kisa(x,y,andlit,minnieyru,augu){
	rectMode(CENTER);
	strokeWeight(2);
// ANDLITIÐ
  fill(120, 144, 156);
  rect(mouseX,mouseY,150,andlit,0,0,10,10);
// EYRUN
  //vinstra eyra
  fill(120, 144, 156);
  triangle(mouseX-75,mouseY-andlit/2,mouseX-45,mouseY-andlit/2-50,mouseX-15,mouseY-andlit/2);
  //hægra eyra
  fill(120, 144, 156);
  triangle(mouseX+15,mouseY-andlit/2,mouseX+45,mouseY-andlit/2-50,mouseX+75,mouseY-andlit/2);
  //inn í vinstra eyra
  fill(13, 71, 161);
  triangle(mouseX-55,mouseY-andlit/2,mouseX-45,mouseY-andlit/2-minnieyru,mouseX-35,mouseY-andlit/2);
  //inn í hægra eyra
  fill(13, 71, 161);
  triangle(mouseX+35,mouseY-andlit/2,mouseX+45,mouseY-andlit/2-minnieyru,mouseX+55,mouseY-andlit/2);
//AUGUN
  //vinstra auga
  fill(0, 162, 232);
  ellipse(mouseX-augu/2-14.5,mouseY-augu/2,augu,augu);
  //hægra auga
  fill(0, 162, 232);
  ellipse(mouseX+augu/2+14.5,mouseY-augu/2,augu,augu);
  //vinstri augasteinn
  fill(0);
  ellipse(mouseX-augu/2-14.5,mouseY-augu/2,augu/5,augu/1.5);
  //hægri augasteinn
  fill(0);
  ellipse(mouseX+augu/2+14.5,mouseY-augu/2,augu/5,augu/1.5);
//NEFIÐ
  fill(0);
  triangle(mouseX-4,mouseY+8,mouseX,mouseY+16,mouseX+4,mouseY+8);
//VEIÐIHÁRIN
  //hægri veiðihár
  line(mouseX-augu-augu,mouseY,mouseX-35,mouseY+12); //efsta veiðihár
  line(mouseX-augu-augu,mouseY+20,mouseX-38,mouseY+20); //miðju veiðihá
  line(mouseX-augu-augu,mouseY+40,mouseX-35,mouseY+28); //neðsta veiðihár
  //vinstri veiðihár
  line(mouseX+35,mouseY+12,mouseX+augu+augu,mouseY); //efsta veiðihár
  line(mouseX+38,mouseY+20,mouseX+augu+augu,mouseY+20); //miðju veiðihár
  line(mouseX+35,mouseY+28,mouseX+augu+augu,mouseY+40); //neðsta veiðihár

}


  }
//Litur á bakgrunn
	if(stig<0){
		background(127,140,141);
	}
	if(stig>0 && stig>3){
		background(255,200,0);
	}
	if(stig>2 && stig<8){
		background(243,156,18);
	}
	if(stig>7 && stig<15){
		background(231,76,60);
	}
	if(stig>14){
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
