//Moving wheel trial code, adding on daily to see how it can expand! (added new)
//I will be adding something everyday to make something in the end, so one day can be it moving and the next can be the colors, etc. 
//ADDED coloring, making it move quicker (speed), and making it style diferent from how a orignal star would look.
//Update, the code keeps crashing. :)))))
//Trying more on P5.js.
//Also trying more new things.
//Trying to add tokens.
//Backup code for the P5.js libary.
//Rings of color.
//Intro to py/tokens.

function setup() {
createCanvas(730, 410);
}

function draw() {
  background(150,298,98);
  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  star(10, 20, 100, 150, 55);
  star(20, 210, 10, 150, 55);
  pop();
  fill(255,255,255);
  Smooth();

}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
    pop();
    fill(255,255,255);
    fill(255,255);
    
  }
  endShape(CLOSE);
}

