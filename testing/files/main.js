var img;
function preload() {
  img = loadImage('files/unicorn.jpg');
}
function setup() {
  createCanavs(600, 600);
  image(img, 0, 0);
}
