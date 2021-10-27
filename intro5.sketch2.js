


function setup(){
    createCanvas(400, 400);
    // background(0);
}

function draw(){
    background(0, 20);

    let pos = createVector(200, 200);  //creates a vector at a position x, y
    let mouse = createVector(mouseX, mouseY);  // vector moves according to the x, y position of the mouse

    let v = p5.Vector.sub(mouse, pos); // vector subtraction

    // let m = v.mag();
    // v.div(m);

    // v.normalize();    // like unit vectors, scales a vector of any length down to a mag length of 1
    // v.mult(100);  //multiplies a vector by a magnitude of 100

    // v.setMag(50);  //lets the magnitude of a vector equal 50
    v.normalize().mult(50);  // normalizes a vector then multiplies it by 50

    // background(m);
    translate(width/2, height/2); // sets origin to the center of the canvas
    strokeWeight(4);
    stroke(255);
    line(0, 0, v.x, v.y);// creates a line with a vector cooridnate of v.x, v.y


}