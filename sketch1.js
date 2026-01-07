class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.oldx = this.x
    this.oldy = this.y
    this.xoff = 0;
    this.yoff = 10000;
  }

  show() {
    stroke(0);
    line(this.oldx, this.oldy, this.x, this.y);
    strokeWeight(4);
    this.oldx = this.x;
    this.oldy = this.y;
  }

  step() {

    this.x = map(noise(this.xoff), 0, 1, 0, width);
    this.y = map(noise(this.yoff), 0, 1, 0, height);

    this.xoff += 0.01;
    this.yoff += 0.01;


    //Gausion random walk:
    //let stepx = randomGaussian();
    //let stepy = randomGaussian();

    // Levi flight
    //let stepx;
    //let stepy;
    //let r = random(1);
    //if (r < 0.01) {
    //  stepx = random(-10, 10);
    //  stepy = random(-10, 10);
    //} else {
    //  stepx = random(-1, 1);
    //  stepy = random(-1, 1);
    //}

    //acceptreject()

    //let step = map(noise(4), 0, 1, 0, width);
    //let stepx = acceptreject() * step;
    //if (random([false, true])) {
    //  stepx *= -1;
    //}
    //let stepy = acceptreject() * step;
    //if (random([false, true])) {
    //  stepy += -1;
    //}
    //this.x += stepx;
    //this.y += stepy;

    //Follows mouse
    //const p = random();
    //if (p < 0.1) this.x++;
    //else if (p < 0.2) this.x--;
    //else if (p < 0.3) this.y++;
    //else if (p < 0.4) this.y--;
    //else {
    // move 15% of the way towards the mouse each frame
    //this.x = lerp(this.x, mouseX, STEP);
    //this.y = lerp(this.y, mouseY, STEP);
    //}
    //this.x = constrain(this.x, 0, width);
    //this.y = constrain(this.y, 0, height);
  }
}

//var slider = document.getElementById("standardDeviation");
//var output = document.getElementById("output");

//output.innerHTML = slider.value;

//slider.oninput = function() {
//  output.innerHTML = this.value;
//}

function setup() {
  createCanvas(windowWidth, windowHeight)

  walker = new Walker();
  background(255)
}

let tx = 0;
let ty = 10000;

function draw() {
  //let x = map(noise(tx), 0, 1, 0, width);
  //let y = map(noise(ty), 0, 1, 0, height);
  //ellipse(x, y, 16, 16);
  //tx += 0.01;
  //ty += 0.01;

  //let x = randomGaussian(320, slider.value);
  //let y = randomGaussian(200, slider.value);

  //let RANDOM_DISTRIBUTION = 100;

  //let r = randomGaussian(127, RANDOM_DISTRIBUTION);
  //let g = randomGaussian(127, RANDOM_DISTRIBUTION);
  //let b = randomGaussian(127, RANDOM_DISTRIBUTION);


  // the math to implement the above is simple
  // you could also do:
  // let num = 60 * randomGaussian() + 320;

  noStroke();
  //fill(r, g, b);
  //circle(x, y, 16);

  walker.step();
  walker.show();
}

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
