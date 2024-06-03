lastRide = "";
neverFold = "";

function preload() {
    lastRide = loadSound("The Last Ride.mp3");
    neverFold = loadSound("Never Fold.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}