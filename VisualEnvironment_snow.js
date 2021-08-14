let img;
let img_snow;

// var m_x = new Array(2);
// var m_y = new float [2];
var now_x;
var now_y;
var old_x;
var old_y;

var next_x;
var next_y;

var X, Y;

var r = 20;

var p = false;

var movecount = 100;

// let width, height;

function setup() {
  createCanvas(displayWidth,displayHeight);

  img = loadImage("snow_tate.png");
  img_snow = loadImage("snowball_stroke.png");

  // for (var i = 0; i < 2; i++) {
  //   m_x[i] = 0;
  //   m_y[i] = 0;
  // }
  old_x = 0;
  old_y = 0;

  next_x = 0;
  next_y = 0;

  X = displayWidth/2;
  Y = displayHeight/2;

  now_x = 0;
  now_y = 0;

  // width = displayWidth;
  // height = displayHeight;


}

function draw() {

  
  image(img, 0, 0, displayWidth, displayHeight);

  if (p === true) {
    now_x = mouseX - pmouseX;
    now_y = mouseY - pmouseY;
  }

  


  if (now_x != 0 || now_y != 0) {
    if(-1000 < next_x && next_x < 1000){
      next_x = now_x + old_x;
    }
    if(-1000 < next_y && next_y < 1000){
      next_y = now_y + old_y;
    }

  }
  
  X += next_x/movecount;
  Y += next_y/movecount;


  
  // println(next_x, next_y);

  pushMatrix();
    translate(X, Y);
    rotate(radians(theta_x));
    fill(235, 252, 252);
    noStroke();
    img_snow.resize(r * 2, r * 2);
    image(img_snow, 0, 0);
  popMatrix();
  //fill(235, 252, 252);
  //noStroke();
  // ellipse(X, Y, r * 2, r * 2);
  //ellipse(X, Y, 20,20);
  //console.log(r);
  
  if(next_x > 0){
    next_x--;
  }if(next_x < 0){
    next_x++;
  }
  if(next_y > 0){
    next_y--;
  }if(next_y < 0){
    next_y++;
  }
  if(next_x != 0 || next_y != 0){
    r += 0.01;
  }


  if (X < 0) {
    X = width;
  }
  if (width < X) {
    X = 0;
  }
  if (Y < 0) {
    Y = height;
  }
  if (height < Y) {
    Y = 0;
  }

  old_x = next_x;
  old_y = next_y;
}

function mousePressed() {
  movecount = movecount + 10;
  p = true;
}

function mouseReleased() {
  p = false;
}