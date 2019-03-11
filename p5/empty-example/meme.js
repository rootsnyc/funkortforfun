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
    
  greeting = createElement('h2', 'is this a _________?');
  greeting.position(250, 320);

    
  label = 'astrology';
    
  butterfly= 'you';
    

  textAlign(CENTER);
  textStyle(BOLD);
  textSize(25);
  
  textFont('Times New Roman')
}

function draw() {
  background(img);
  fill(value);
  text(label, 170,220);
  text(butterfly, 560,65)
  }


function greet() {
  const name = input.value();
  greeting.html('is this a ' + name + '?');
  input.value('');
}

function keyPressed() {
   if (event.keyCode === 13) {
       greet();
    }
  
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}