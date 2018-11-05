var img;
function preload() {
  img = loadImage('files/unicorn.jpg');
}
function setup() {
  createCanvas(420, 600);
  background(0)
  image(img, 0, 0);
}
