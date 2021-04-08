// Hér kemur kóðinn þinn:

var andlit = 115;
var eyru = 60;
var augu = 30;

function setup() {
  createCanvas(800,500);
  rectMode(CENTER);
}
function draw() {
  background(179, 157, 219);
// ANDLITIÐ
  fill(84, 110, 122);
  rect(mouseX,mouseY,150,andlit,0,0,10,10);
// EYRUN
  //vinstra eyra
  fill(84, 110, 122);
  triangle(mouseX-75,mouseY-andlit/2,mouseX-45,mouseY-andlit/2-eyru,mouseX-15,mouseY-andlit/2);
  //hægra eyra
  fill(84, 110, 122);
  triangle(mouseX+15,mouseY-andlit/2,mouseX+45,mouseY-andlit/2-eyru,mouseX+75,mouseY-andlit/2);
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
