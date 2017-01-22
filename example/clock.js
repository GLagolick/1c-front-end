/*var R = 300 / 2,
    d, angle, pX, pY, qX, qY
var d, angle, pX, pY, qX, qY;
var context = canvas.getContext("2d");
for (d = 0; d < 60; ++d) {
    angle = (d / 60) * (2 * Math.PI);
    pX = Math.cos(angle) * R;
    pY = -Math.sin(angle) * R;
    qX = 0.9 * pX;
    qY = 0.9 * pY;
    pX += R;
    pY += R;
    qX += R;
    qY += R;
    angle = new Path2D;
    context.fill(angle);
}
*/
var canvas = document.getElementById("sandbox"),
    context = canvas.getContext("2d"),
    circle;

function drawLine(angle, a, b, style, width) {
    var R = 300 / 2,
        pX, pY, qX, qY
    pX = Math.cos(angle) * R;
    pY = -Math.sin(angle) * R;
    qX = a * pX;
    qY = b * pY;
    var
}

circle = new Path2D();
circle.arc(150, 150, 140, 0, 2 * Math.PI);
context.stroke(circle);
