let t = 0; // time variable

function setup() {
  createCanvas(1300, 500);
  noStroke();
  fill(252, 22, 22);
}

function draw() {
  background(20, 20); // translucent background (creates trails)

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 100) {
    for (let y = 0; y <= height; y = y + 100) {
      // starting point of each circle depends on mouse position
      let xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      let yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      let angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      let myX = x + 30 * cos(2 * PI * t + angle);
      let myY = y + 30 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 10); // draw particle
    }
  }

  t = t + .01; // update time
}