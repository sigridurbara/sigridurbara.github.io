// Hér kemur kóðinn þinn:

var kisaX = 100;
var kisaY = 100;
var hradiX = 5;
var hradiY = 3;
var andlitKisu = 115;
//var eyruKisu = 60;
var minnieyruKisu = 20 //inn í eyrun
var auguKisu = 40;


function setup() {
	createCanvas(800,500);
	//rectMode(CENTER);
	//textFont("Courier New",16);
	//textStyle(BOLD);
}

function draw() {
  background(174, 214, 241);
	rectMode(CENTER);
	// Reikna ný hnit út frá hraða kisu:
  kisaX = kisaX //+ hradiX;
  kisaY = kisaY + hradiY;
	// Athuga hvort kisa snertir vegginn hægra megin:
  if ((kisaX > width-andlitKisu/2))  {
    hradiY = hradiY * -1;
		andlitKisu = random(100,130);
	  minnieyruKisu = random(10,50);
	  auguKisu = random(25,60);
		background(245, 183, 177);
	}
//Athuga hvort kisa snertir vegginn vinstra megin:
	if (kisaX < andlitKisu/2){
		hradiY = hradiY * -1;
		andlitKisu = random(100,130);
	  minnieyruKisu = random(10,50);
	  auguKisu = random(25,60);
		background(162, 217, 206);
	}
  // Athuga hvort kisa snertir botninn
  if ((kisaY+andlitKisu/2 > height)){ //< boltiStaerd)) {
    hradiY = hradiY * -1;
		//hradiX = hradiX * -1;
		andlitKisu = random(100,130);
	  minnieyruKisu = random(10,50);
	  auguKisu = random(25,60);
		background(210, 180, 222);
	}
	//Athuga hvort kisa snertir þakið
	if (abs(kisaY-andlitKisu/2 < 0)){
			hradiY = hradiY * -1;
			//hradiX = hradiX * -1;
			andlitKisu = random(100,130);
		  minnieyruKisu = random(10,50);
		  auguKisu = random(25,60);
			background(174, 214, 241);
		}
	kisa(kisaX,kisaY,andlitKisu,minnieyruKisu,auguKisu);


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
  //vinstri veiðihár
  line(x-augu-augu,y,x-35,y+12); //efsta veiðihár
  line(x-augu-augu,y+20,x-38,y+20); //miðju veiðihá
  line(x-augu-augu,y+40,x-35,y+28); //neðsta veiðihár
  //hægri veiðihár
  line(x+35,y+12,x+augu+augu,y); //efsta veiðihár
  line(x+38,y+20,x+augu+augu,y+20); //miðju veiðihár
  line(x+35,y+28,x+augu+augu,y+40); //neðsta veiðihár

}
