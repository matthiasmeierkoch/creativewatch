function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    frameRate(30);
    angleMode(DEGREES);
    //noCursor();


}

function draw() {

    var mil = millis();
    var sec = second();
    var min = minute();
    var hr = hour();
    var d = day();
    var m = month();

    var angleMil = map(mil, 0, 1000, 0, 360);
    var angleSec = map(sec, 0, 60, 0, 360);
    var angleMin = map(min, 0, 60, 0, 360);
    var angleHr = map(hr, 0, 24, 0, 360);
    var angleDay = map (d, 0, 7, 0, 360)
    var angleMonth = map (m, 0, 12, 0, 360)

    background(0,0,0,10);
    noFill();
    stroke(color(255, 255, 255));
    strokeWeight(2);
    


    
    // milliseconds
    // arc(width / 2, height / 2, hr*5, hr*5, 0, angleMil);

    // milliseconds
    push();
	translate(width/2,height/2);
    rotate(angleMil);
    ellipse(50,0,hr*5,hr*5);
    pop();
    angleMil=angleMil+1;

    //seconds
    fill(250, 5);
    arc(width / 2, height / 2, hr*20, hr*20, 0, angleSec);
    
    //cursor
    //ellipse(mouseX, mouseY, 10, 10);

    // hours
    rect(width / 2 - hr*20 / 2, height / 2 - hr *20/ 2, hr * 20, hr * 20);

    //Day
    rect(width/2-240,height/2-240, 480, 480);

    //minutes
    translate(width/2, height/2);
    rotate(angleMin);
    line(0, 0, 0, -hr*10);


    //rotating triangle
    // translate(width/2, height/2);
    // rotate(angleMin);
    // triangle(0, -hr*10, -hr*10, hr*10, hr*10, hr*10);
 
 

    }
