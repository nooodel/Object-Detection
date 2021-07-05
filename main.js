img = "";

function preload() {
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw() {
    image(img, 0, 0, 640, 420);
    fill("#4287f5");
    noFill();
    stroke("#07b32c");
    strokeWeight(5);
    rect(30, 60, 450, 350);
    strokeWeight(1);
    text("Dog", 45, 75);
}