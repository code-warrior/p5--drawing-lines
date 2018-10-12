'use strict';

function setup() {
    // Setup code goes here.
    // This function runs once.
    // The default canvas size, which is implied here, is 100 × 100 in pixels.
    // The 1-pixel gray border around the box is generated by style.css.
}

function draw() {
    stroke(255, 0, 255);
    strokeWeight(4);
    line(5, 5, 95, 95);
    line(95, 5, 5, 95);
}
