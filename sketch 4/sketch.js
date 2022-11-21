let pics = []; // array for my pictures
let n = 0; // used so that when all the pictures are the "sheesh" picture, it takes over the screen.

let sheesh;
let woojinandi = [];

function preload() {
  sheesh = loadImage('data/image25.jpg'); // the last picture is the sheesh picture
  for (let i = 1; i < 24; i++) { 
    woojinandi[i] = loadImage('data/image' + i + '.jpg'); // make an array of all the pictures 
  }
}

function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < 6; i++) { // for the first row of pictures
    let x = 50*i + (100 * (i - 1)); // all of the x positions will be the same 
    let y = 50; // the y positions will be 150 apart from the previous row
    let r = 100;
    let p = new Pic(x, y, r); 
    pics.push(p);
  }

  for (let i = 6; i < 11; i++) { // for the second row, etc.
    let x = 50*(i-5) + (100 * (i - 6));
    let y = 200;
    let r = 100;
    let p = new Pic(x, y, r);
    pics.push(p);
  }

  for (let i = 11; i < 16; i++) {
    let x = 50*(i-10) + (100 * (i - 11));
    let y = 350;
    let r = 100;
    let p = new Pic(x, y, r);
    pics.push(p);
}

  for (let i = 16; i < 21; i++) {
    let x = 50*(i-15) + (100 * (i - 16));
    let y = 500;
    let r = 100;
    let p = new Pic(x, y, r);
    pics.push(p);
}

  for (let i = 21; i < 26; i++) {
    let x = 50*(i-20) + (100 * (i - 21));
    let y = 650;
    let r = 100;
    let p = new Pic(x, y, r);
    pics.push(p);
  }



}

function mousePressed() {
  for (let i = 0; i < pics.length; i++) {
    pics[i].hover(mouseX, mouseY);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < pics.length; i++) {
    pics[i].show();
  }


  for (let i = 1; i < 6; i ++){ //making it so that when you hover, the picture is enlarged and in the center of the screen.
  if(mouseX >= 50 + (50*(i-1)) + (100*(i-1)) && mouseX <= 150 + (50*(i-1)) + (100*(i-1)) && mouseY >= 50 && mouseY <=150){
  	// since it is scaled by 3 , the top left corner is moved down a lot. 
  	push();
  	translate(100 - (450 *(i - 1)),100);
  	scale(3); // s
  	pics[i].show(); // make sure to show the exact picture that the mouse is hovering.
  	pop();
}
}
for (let i = 6; i < 11; i ++){
  if(mouseX >= 50 + (50*(i-6)) + (100*(i-6)) && mouseX <= 150 + (50*(i-6)) + (100*(i-6)) && mouseY >= 200 && mouseY <=300){
  	push();
  	translate(100 - (450 *(i - 6)),- 350); // could not find a consistent y value for each row so I had to play around with the numbers. Thankfully they were all round and easy numbers.
  	scale(3);
  	pics[i].show();
  	pop();
}
}
for (let i = 11; i < 16; i ++){
  if(mouseX >= 50 + (50*(i-11)) + (100*(i-11)) && mouseX <= 150 + (50*(i-11)) + (100*(i-11)) && mouseY >= 350 && mouseY <=450){
  	push();
  	translate(100 - (450 *(i - 11)),- 800);
  	scale(3);
  	pics[i].show();
  	pop();
}
}

for (let i = 16; i < 21; i ++){
  if(mouseX >= 50 + (50*(i-16)) + (100*(i-16)) && mouseX <= 150 + (50*(i-16)) + (100*(i-16)) && mouseY >= 500 && mouseY <=600){
  	push();
  	translate(100 - (450 *(i - 16)),- 1250);
  	scale(3);
  	pics[i].show();
  	pop();
}
}

for (let i = 21; i < 26; i ++){
  if(mouseX >= 50 + (50*(i-21)) + (100*(i-21)) && mouseX <= 150 + (50*(i-21)) + (100*(i-21)) && mouseY >= 650 && mouseY <=750){
  	push();
  	translate(100 - (450 *(i - 21)),- 1700);
  	scale(3);
  	pics[i].show();
  	pop();
}
}

if(n >= 25){
let s = new Sheesh(0,0,800);
s.shake(); // made a new object for the sheesh picture cause I wanted it to shake.


}
}

class Pic {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    // this.x_ = 250;
    // this.y_ = 250;
    this.pic = random(woojinandi); // couldn't figure out how to make the pictures show in order. 
    // I tried to do this.pic = woojinandi[i] but it wouldn't work at all.
    // even if I tried using this.i = i in the constructor and set it up as a parameter.
  }

  hover(posX, posY) {
    if (posX > this.x && posX < this.x + this.r && posY > this.y && posY < this.y + this.r) {
      this.pic = sheesh;
      n = n + 1; // make it so that it everytime a picture changes, it adds one so that when it hits 25, it'll change the whole screen.
    }
  }
 

  show() {
    image(this.pic, this.x, this.y, this.r, this.r);
  }

}

class Sheesh {
constructor(x, y, r) {
	this.x = x;
	this.y = y;
	this.r = r;
	this.pic = sheesh;

}

shake() {
image(this.pic, this.x, this.y, this.r + random(-10,10), this.r + random(-10,10));
}

}








// woojinandi = []

// function preload(){
// for(let i = 0; i < 26; i++) {
// woojinandi[i] = loadImage('data/image' + i + '.jpg');
// }

// }


// function setup(){
// createCanvas(800,800)
// for (let i = 0; i < 10; i++) {
// let x = random(width);
// let y = random(height);
// let r = random(50, 150);

// let p = new Pics(x, y, r);
// pic

// }
// }

// function draw(){
// image(random(woojinandi),0,0);
// }


// class Pics {
// constructor(x, y, r, img) {
// this.x = x;
// this.y = y;
// this.r = r;
// this.us = random(woojinandi);
// }

// display() {
// image(this.us, this.x, this.y, this.r, this.r)

// }



// }