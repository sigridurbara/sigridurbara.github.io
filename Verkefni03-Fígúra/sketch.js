// Hér kemur kóðinn þinn:

var andlit = 115;
var eyru = 60;
var minnieyru = 20 //inn í eyrun
var augu = 40;

function setup() {
  createCanvas(800,500);
  rectMode(CENTER);
}
function draw() {
  background(178, 235, 242);
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

function mousePressed() {
	andlit = random(100,130);
  minnieyru = random(10,50);
  augu = random(25,60);

}
