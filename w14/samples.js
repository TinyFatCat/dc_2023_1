let x = 0;
let y = 0;
let fps = 60.0;
let durationIwant = 3.0;
let sinAngle = (2.0 * Math.PI * timeToFrames(time)) / (fps * durationIwant);
let amp = 200;
y = amp * Math.sin(sinAngle);

[x, y];
