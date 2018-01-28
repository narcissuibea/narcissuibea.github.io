document.getElementById("id_business_version").innerHTML = "Business version = 2017.11.28.0";

//window.addEventListener("deviceorientation", on_device_orientation);
window.addEventListener("devicemotion", on_device_motion);


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(50,20);
ctx.quadraticCurveTo(230, 30, 50, 100);
ctx.stroke();

ctx.fillStyle = 'blue';
// start point
ctx.fillRect(50, 20, 10, 10);
// end point
ctx.fillRect(50, 100, 10, 10);

ctx.fillStyle = 'red';
// control point
ctx.fillRect(230, 30, 10, 10);

