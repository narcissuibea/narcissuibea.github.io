document.getElementById("id_business_version").innerHTML = "Business version = 2017.11.28.2";

//window.addEventListener("deviceorientation", on_device_orientation);
window.addEventListener("devicemotion", on_device_motion);


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var image = document.getElementById('source');

ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);


