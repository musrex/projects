/* Array keeps track of how often Random nums are picked */
let randomCounts = [];
let total = 20

function setup() {
  createCanvas(640, 240)

  for (let i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }
}

function draw() {
  background(255);

/* Picking the random number from randomCounts */
  let index = floor(random(randomCounts.length));
  randomCounts[index]++;
  stroke(0);
  fill(127);
  let w = width / randomCounts.length;

/* Graphing results */
  for (let x = 0; x < randomCounts.length; x++) {
    rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
  }
  
}
