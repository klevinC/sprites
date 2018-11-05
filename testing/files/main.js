var img;
function preload() {
  img = loadImage('files/unicorn.jpg');
}
function setup() {
  createCanvas(900, 600);
  background(0)
  image(img, 0, 0);
}
