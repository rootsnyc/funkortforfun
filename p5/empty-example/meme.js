let input, button, greeting, label, butterfly, img;
let value = 0;

function setup() {
    
  img = loadImage('meme.jpg');
  createCanvas(710, 400);

  input = createInput();
  input.position(250, 370);

  button = createButton('submit');
  button.position(input.x + input.width, 370);
  button.mousePressed(greet);

  label = 'astrology';
  //label.position(150,70);
    
  butterfly= 'you';
//  butterfly.position(560,65)
    
  greeting = 'is this a ______?';
//  greeting.position(250, 300);

  textAlign(CENTER);
  textSize(30);
  textFont('Helvetica')
}

function draw() {
  background(img);
  fill(value);
  text(label, 170,220);
  text(butterfly, 560,65)
  text(greeting,350,350)
  }


function greet() {
  const name = input.value();
  greeting.html('is this a ' + name + '?');
  input.value('');
}

function keyPressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}