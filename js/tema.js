document.getElementById("id_business_version").innerHTML = "Business version = 2018.01.28.10";

//window.addEventListener("deviceorientation", on_device_orientation);
window.addEventListener("devicemotion", on_device_motion);

var canvas = document.getElementById("id_canvas");
var ctx = canvas.getContext("2d");


var unghiuri={gamma:0,beta:0};

setInterval(deseneaza_cerc,10,unghiuri);


//-----------------------------------------------------
function deseneaza_cerc(u)
{
		ctx.clearRect(0, 0, 600, 600);
		
		//ctx.rect(0, 0, 400, 400);
		//ctx.stroke();
		ctx.strokeRect(0,0,600,600);
		
		
		ctx.beginPath();
		ctx.arc(200 + u.gamma * 500 / 90, 500 + u.beta * 500 / 90, 20, 0, 2 * Math.PI);
		ctx.fillStyle = "##FFFF00";
		//ctx.fill();
		ctx.strokeStyle = "#00FF00";
		ctx.lineWidth = 8;
		ctx.stroke();
}
//-----------------------------------------------------
function on_device_orientation(e)
{
	//deseneaza_cerc(e.gamma, e.beta);
	
	unghiuri.gamma=e.gamma;
	unghiuri.beta=e.beta;
}
//-----------------------------------------------------
function on_device_motion(e)
{
	 unghiuri.beta = Math.atan(e.accelerationIncludingGravity.y / e.accelerationIncludingGravity.z) * 180 / Math.PI;
	 unghiuri.gamma = -Math.atan(e.accelerationIncludingGravity.x / e.accelerationIncludingGravity.z) * 180 / Math.PI;
	
	//deseneaza_cerc(gamma, beta);
}
