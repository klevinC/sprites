var img;
function preload() {
  img = loadImage('files/unicorn.jpg');
}
function setup() {
  canavs(600, 600);
  image(img, 0, 0);
}
