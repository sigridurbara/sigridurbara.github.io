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
  ellipse(mouseX-augu/2-17.5,mouseY-augu/2,augu,augu);
  //hægra auga
  fill(0, 162, 232);
  ellipse(mouseX+augu/2+17.5,mouseY-augu/2,augu,augu);

  //ellipse(mouseX,mouseY - bukur/2, 80,80);
  // AUGUN
  //fill(100);
  //ellipse (mouseX - 25,mouseY - bukur/2, 20,40);
  //ellipse (mouseX + 25,mouseY - bukur/2, 20,40);
  // VEIÐIHÁRIN
  //line (mouseX - 20, mouseY + bukur/2, mouseX - 20, mouseY + bukur/2 + 50);
  //line (mouseX + 20, mouseY + bukur/2, mouseX + 20, mouseY + bukur/2 + 50);
}

//function mousePressed() {
	//bukur = random (50,150);
//}
