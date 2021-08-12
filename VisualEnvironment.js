ArrayList<Rect> rects = new ArrayList();

PImage img;

var[] m_x = new float [2];
var[] m_y = new float [2];
var now_x;
var now_y;
var old_x;
var old_y;

var next_x;
var next_y;

var X, Y;

var r = 20;

var p= false;


var size;
var count = 0;

function setup() {
    createCanvas(800, 600);
  
  img = loadImage("gameover.png");

  for (var i = 0; i < 2; i++) {
    m_x[i] = 0;
    m_y[i] = 0;
  }
  old_x = 0;
  old_y = 0;

  next_x = 0;
  next_y = 0;

  X = width/2;
  Y = height/2;

  size = 5;
  for (var i = 0; i < size; i++) {
    rects.add(new Rect());
  }
}

function draw() {

  if (count != size) {
    background(#C1F9FF);

    if (p == true) {
      now_x = mouseX - pmouseX;
      now_y = mouseY - pmouseY;
    }

    if (now_x != 0 || now_y != 0) {
      next_x = now_x + old_x;
      next_y = now_y + old_y;
    }

    X += next_x/100;
    Y += next_y/100;
    println(next_x/500, next_y/500);

    fill(255);
    ellipse(X, Y, r * 2, r * 2);

    fill(#C9DBDE, 100);
    noStroke();
    rect(width - 300, height - 400, 300, 400);

    for (var i = 0; i < size; i++) {
      if (dist(X, Y, rects.get(i).posX, rects.get(i).posY) < r) {
        fill(255, 0, 0);
        rects.get(i).draw();
        delay(500);
        rects.get(i).posX = -100;
        rects.get(i).posY = -100;
        count++;
      }
      rects.get(i).draw();
    }
  }
  
  if((X < 0 || width < X) || (Y < 0 || height < Y)){
    image(img, 0, 0);
  }

  if (count == size) {
    background(255);
    textSize(80);
    fill(255, 0, 0);
    text("Congratulations!", 100, height/2);
  }

  old_x = next_x;
  old_y = next_y;
}

function mousePressed() {
  if (width - 300 < mouseX && mouseX < width) {
    if (height - 400 < mouseY && mouseY < height) {
      p = true;
    }
  } else {
    p = false;
  }
}

function mouseReleased() {
  p = false;
}


class Rect{
    var posX;
    var posY;
    var w = 30;
    var h = 20;
    
    constructor(){
      posX = random(width);
      posY = random(height);
    }
    
    draw(){
      fill(255);
      rect(posX, posY, w, h);
    }
  }