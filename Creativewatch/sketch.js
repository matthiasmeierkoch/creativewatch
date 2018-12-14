function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);

    angleMode(DEGREES);


}

function draw() {
    background(0);
    noFill();
    stroke(color(255, 0, 0));
    strokeWeight(20);

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
  
    
    //Millisekunden
    arc(width / 2, height / 2, 700, 700, 0, angleMil);

    //Sekunden
    arc(width / 2, height / 2, 600, 600, 0, angleSec);

    //Minuten
    arc(width / 2, height / 2, 500, 500, 0, angleMin);

    //Stunden
    arc(width / 2, height / 2, 400, 400, 0, angleHr);

    //Tage
    arc(width / 2, height / 2, 300, 300, 0, angleDay);

    //Months
    arc(width / 2, height / 2, 200, 200, 0, angleMonth);

    }
