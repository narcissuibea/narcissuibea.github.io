

document.getElementById("id_bussines_version").innerHTML="Bussines Version"
window.addEventListener("deviceorientation",on_device_orientation);
window.addEventListener("devicemotion",on_device_motion);

///---------------


function on_device_orientation(e)
{
	document.getElementById("id_z").innerHTML= "z="+Math.round(e.alpha*100)/100;
		document.getElementById("id_x").innerHTML="x="+Math.round(e.beta*100)/100;
	        document.getElementById("id_y").innerHTML="y="+Math.round(e.gamma*100)/100;


}

function on_device_motion(e)
{
	document.getElementById("id_acc_x").innerHTML="acc_x="+Math.round(e.acceleration.x*100)/100;
		document.getElementById("id_acc_y").innerHTML="acc_y="+Math.round(e.acceleration.y*100)/100;
			document.getElementById("id_acc_z").innerHTML="acc_z="+Math.round(e.acceleration.z*100)/100;
 
 document.getElementById("id_acc_g_x").innerHTML="acc_g_x"+Math(e.accelerationIncludingGravity.x*100)/100;
		document.getElementById("id_acc_g_y").innerHTML="acc_g_y"+Math(e.accelerationIncludingGravity.y*100)/100;
			document.getElementById("id_acc_g_z").innerHTML="acc_g_z"+Math(e.accelerationIncludingGravity.z*100)/100;


	
}
//------------------