let bubbles = [];
let unicorn;

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(width);
    let r = random(10, 50);
    bubbles[i] = new Bubble(x, y, r);
  }
  // unicorn = new Bubble(400, 200, 10);
}

function draw() {
  background(0);
  // if (bubble1.intersects(bubble2)) {
  //   bubble1.changeColor(255);
  // }
  // unicorn.x = mouseX;
  // unicorn.y = mouseY;
  // unicorn.show();
  // unicorn.move();

  for (let b of bubbles) {
    b.show();
    b.move();
    let overlapping = false;
    for (let other of bubbles) {
      if (b !== other && b.intersects(other)) {
        overlapping = true;
      }
    }
    if (overlapping) {
      b.changeColor(255);
    } else {
      b.changeColor(0);
    }
  }

}

class Bubble {
  constructor(x, y, r = 50) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.r + other.r)
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
}