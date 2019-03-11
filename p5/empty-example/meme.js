let input, button, greeting, label, butterfly, img;

function setup() {
    
  img = loadImage('meme.JPG');
  createCanvas(710, 400);

  input = createInput();
  input.position(250, 370);

  button = createButton('submit');
  button.position(input.x + input.width, 370);
  button.mousePressed(greet);

  label = createElement('h1', 'astrology');
  label.position(150,70);
    
  butterfly=createElement('h1', 'you')
  butterfly.position(560,65)
    
  greeting = createElement('h1', 'is this a ______?');
  greeting.position(250, 300);

  textAlign(CENTER);
  textSize(50);
}

function draw() {
  background(img);
  }



function greet() {
  const name = input.value();
  greeting.html('is this a ' + name + '?');
  input.value('');
}
