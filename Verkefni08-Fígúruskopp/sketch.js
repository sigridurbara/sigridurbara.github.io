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
}

function kisa(x,y,andlit,minnieyru,augu){
	rectMode(CENTER);
	strokeWeight(2);
// ANDLITIÐ
  fill(120, 144, 156);
  rect(x,y,150,andlit,0,0,10,10);
// EYRUN
  //vinstra eyra
  fill(120, 144, 156);
  triangle(x-75,y-andlit/2,x-45,y-andlit/2-50,x-15,y-andlit/2);
  //hægra eyra
  fill(120, 144, 156);
  triangle(x+15,y-andlit/2,x+45,y-andlit/2-50,x+75,y-andlit/2);
  //inn í vinstra eyra
  fill(13, 71, 161);
  triangle(x-55,y-andlit/2,x-45,y-andlit/2-minnieyru,x-35,y-andlit/2);
  //inn í hægra eyra
  fill(13, 71, 161);
  triangle(x+35,y-andlit/2,x+45,y-andlit/2-minnieyru,x+55,y-andlit/2);
//AUGUN
  //vinstra auga
  fill(0, 162, 232);
  ellipse(x-augu/2-14.5,y-augu/2,augu,augu);
  //hægra auga
  fill(0, 162, 232);
  ellipse(x+augu/2+14.5,y-augu/2,augu,augu);
  //vinstri augasteinn
  fill(0);
  ellipse(x-augu/2-14.5,y-augu/2,augu/5,augu/1.5);
  //hægri augasteinn
  fill(0);
  ellipse(x+augu/2+14.5,y-augu/2,augu/5,augu/1.5);
//NEFIÐ
  fill(0);
  triangle(x-4,y+8,x,y+16,x+4,y+8);
//VEIÐIHÁRIN
  //hægri veiðihár
  line(x-augu-augu,y,x-35,y+12); //efsta veiðihár
  line(x-augu-augu,y+20,x-38,y+20); //miðju veiðihá
  line(x-augu-augu,y+40,y-35,y+28); //neðsta veiðihár
  //vinstri veiðihár
  line(x+35,y+12,x+augu+augu,y); //efsta veiðihár
  line(x+38,y+20,x+augu+augu,y+20); //miðju veiðihár
  line(x+35,y+28,x+augu+augu,y+40); //neðsta veiðihár

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
