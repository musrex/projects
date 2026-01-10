let walker;

function setup() {
  createCanvas(640, 240)
  walker = new Walker();
  background(255)
}

function draw() {
  //noStroke();
  //fill(r, g, b);
  //circle(x, y, 16);

  walker.step();
  walker.show();
}
class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.oldx = this.x
    this.oldy = this.y
    this.xoff = 0;
    this.yoff = 10000;
  }

  step() {
    noiseDetail(8, .75);
    this.x += map(noise(this.xoff), 0, 1, -1, 1);
    this.y += map(noise(this.yoff), 0, 1, -1, 1);

    this.xoff += 0.01;
    this.yoff += 0.01;
  }

  show() {
    strokeWeight(4);
    stroke(0);
    line(this.oldx, this.oldy, this.x, this.y);
    this.oldx = this.x;
    this.oldy = this.y;
  }

}

//var slider = document.getElementById("standardDeviation");
//var output = document.getElementById("output");

//output.innerHTML = slider.value;

//slider.oninput = function() {
//  output.innerHTML = this.value;
//}



function acceptreject() {
  while (true) {

    let r1 = random(1);
    let p = r1;
    let r2 = random(1);
    if (r2 < p) {
      return r1;
    }
  }
}
