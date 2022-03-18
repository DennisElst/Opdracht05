let e1, e2, e3;

function setup() {
  createCanvas(1425, 750);
  noStroke();
  /* Horizontaal, verticaal, grootte */
  e1 = new Eye(65, 100, 120);
  e2 = new Eye(100, 220, 80);
  e3 = new Eye(250, 150, 220);
  e4 = new Eye(300, 300, 64);
  e5 = new Eye(470, 100, 176);
  e6 = new Eye(564, 200, 40);
  e7 = new Eye(620, 210, 62);
  e8 = new Eye(700, 100, 188);
  e9 = new Eye(850, 100, 97);
  e10 = new Eye(1000, 100, 175);
  e11 = new Eye(1220, 100, 23);
  e12 = new Eye(1400, 100, 45);

}

function draw() {
  background(102);
  e1.update(mouseX, mouseY);
  e2.update(mouseX, mouseY);
  e3.update(mouseX, mouseY);
  e4.update(mouseX, mouseY);
  e5.update(mouseX, mouseY);
  e6.update(mouseX, mouseY);
  e7.update(mouseX, mouseY);
  e8.update(mouseX, mouseY);
  e9.update(mouseX, mouseY);
  e10.update(mouseX, mouseY);
  e11.update(mouseX, mouseY);
  e12.update(mouseX, mouseY);

  e1.display();
  e2.display();
  e3.display();
  e4.display();
  e5.display();
  e6.display();
  e7.display();
  e8.display();
  e9.display();
  e10.display();
  e11.display();
  e12.display();

}

function Eye(tx, ty, ts) {
  this.x = tx;
  this.y = ty;
  this.size = ts;
  this.angle = 0;

  this.update = function(mx, my) {
    this.angle = atan2(my - this.y, mx - this.x);
  };

  this.display = function() {
    push();
    translate(this.x, this.y);
    fill(255);
    ellipse(0, 0, this.size, this.size);
    rotate(this.angle);
    fill(46, 46, 46);
    ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
    pop();
  };
}
