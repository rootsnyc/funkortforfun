let img;
let r, g, b;

function setup() {
    r = random(255);
    g = random(255);
    b = random(255);
    var cnv = createCanvas(720, 400);
    cnv.style('display', 'block');
    cnv.parent('content');
  img = loadImage('bckgrnd.JPG');
}

function draw() {
    noStroke();
    image(img,0,0,width, height);
    translate(width/2, height/2);
    
    rotate(PI/6);
    translate(-10,-10)
    
    //hair
    fill(r,g,b);
    rect(-130,-130, 260, 225, 145);
    
    //face
    fill(195,135,91);
    ellipse(0,0,170,200); 
    
    //bangs
    fill(r,g,b);
    ellipse(-60,-65,30,30);
    fill(r,g,b);
    ellipse(-45,-80,30,30);
    fill(r,g,b);
    ellipse(-25,-95,30,30);
    fill(r,g,b);
    ellipse(10,-100,30,30);
    fill(r,g,b);
    ellipse(30,-92,30,30);
    fill(r,g,b);
    ellipse(50,-72,30,30);
    fill(r,g,b);
    ellipse(70,-52,30,30);
    fill(r,g,b);
    ellipse(80,-30,30,30);
    fill(r,g,b);
    ellipse(-80,-45,30,30);
    
    //left eye
    fill(255);
    translate(40,-15);
    ellipse(0,0,30,30);
    //left pupil
    fill(0);
    //ellipse(0,0,15,15); 
    ellipse(map(mouseX, 0, width, -3, 3),0,15,15); 
    
    //right eye
    fill(255); 
    translate(-80,0);
    ellipse(0,0,30,30);
    //right pupil
    fill(0);
    //ellipse(0,0,15,15); 
    ellipse(map(mouseX, 0, width, -2,2 ),0,15,15); 
    
    //nose
    noFill();
    stroke(153,103,56);
    strokeWeight(3);
    arc(40, 30, 25, 30, 180,660);
    
     //nose ring
    noStroke();
    fill(225,191,1);
    ellipse (35,25,5,5)
    
    //mouth
    noStroke();
    fill(0);
    ellipse (41,65,30,15); 
}

// When the user clicks the mouse
function mousePressed() {
    console.log("test");
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}