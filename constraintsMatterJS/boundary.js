function Boundary(x, y, w, h, a) {
  var options = {
    friction: 0.1,
    restitution: 0,
    isStatic: true,
    color: 255,
    angle: a
  }
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);
  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    noStroke();
    fill(options.color);
    rect(0, 0, this.w, this.h);
    pop();
  }
}