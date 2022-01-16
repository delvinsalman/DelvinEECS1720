//Moving wheel trial code, adding on daily to see how it can expand! (added new)
function setup() {
  createCanvas(730, 410);
}

function draw() {
  background(150,298,98);
  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  star(0, 20, 80, 150, 55);
  pop();
  fill(255,255,255);

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
    
  }
  endShape(CLOSE);
}
