// The Nature of Code
// Exercise 0.8

function setup() {
  createCanvas(640, 240)

  loadPixels();
  let xoff = 0.0;

  for (let x = 0; x < width; x++) {
    let yoff = 0.0;

    for (let y = 0; y < height; y++) {
      const bright = map(noise(xoff, yoff), 0, 1, 0, 255);
      set(x, y, floor(bright));
      yoff += .01;
    }
    xoff += .01;
  }
  updatePixels();
}

function draw() { }





