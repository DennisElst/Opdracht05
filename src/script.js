let e1, e2, e3;

function setup() {
  createCanvas(1425, 750);
  noStroke();
  /* Horizontaal, verticaal, grootte */
  e1 = new Eye(65, 100, 120);
  e2 = new Eye(100, 220, 80);
  e13 = new Eye(160, 350, 120);
  e3 = new Eye(250, 150, 220);
  e4 = new Eye(300, 300, 64);
  e18 = new Eye(300, 600, 200);
  e5 = new Eye(470, 100, 176);
  e6 = new Eye(580, 180, 40);
  e7 = new Eye(620, 240, 62);
  e8 = new Eye(450, 300, 188);
  e19 = new Eye(450, 300, 188);
  e9 = new Eye(850, 250, 97);
  e20 = new Eye(160, 500, 97);
  e21 = new Eye(1000, 600, 97);
  e22 = new Eye(700, 500, 400);
  e23 = new Eye(300, 415, 150);
  e24 = new Eye(300, 415, 150);
  e10 = new Eye(920, 100, 175);
  e11 = new Eye(1030, 100, 23);
  e12 = new Eye(1100, 100, 45);
  e14 = new Eye(1000, 230, 80);
  e15 = new Eye(1000, 390, 220);
  e16 = new Eye(1200, 300, 64);
  e17 = new Eye(1320, 100, 176);
  e25 = new Eye(700, 100, 140);
  e26 = new Eye(1350, 250, 80);
  e27 = new Eye(1200, 400, 120);
  e28 = new Eye(1130, 150, 170);
  e29 = new Eye(1200, 300, 64);
  e30 = new Eye(1200, 600, 200);

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
  e13.update(mouseX, mouseY);
  e14.update(mouseX, mouseY);
  e15.update(mouseX, mouseY);
  e16.update(mouseX, mouseY);
  e17.update(mouseX, mouseY);
  e18.update(mouseX, mouseY);
  e19.update(mouseX, mouseY);
  e20.update(mouseX, mouseY);
  e21.update(mouseX, mouseY);
  e22.update(mouseX, mouseY);
  e23.update(mouseX, mouseY);
  e24.update(mouseX, mouseY);
  e25.update(mouseX, mouseY);
  e26.update(mouseX, mouseY);
  e27.update(mouseX, mouseY);
  e28.update(mouseX, mouseY);
  e29.update(mouseX, mouseY);
  e30.update(mouseX, mouseY);


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
  e13.display();
  e14.display();
  e15.display();
  e16.display();
  e17.display();
  e18.display();
  e19.display();
  e20.display();
  e21.display();
  e22.display();
  e23.display();
  e24.display();
  e25.display();
  e26.display();
  e27.display();
  e28.display();
  e29.display();
  e30.display();

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
