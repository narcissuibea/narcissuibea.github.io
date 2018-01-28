var d = new Date();

document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".3"; 

var img= document.getElementById("id_img");
img.addEventListener("touchstart", on_touch_start);
img.addEventListener("touchend", on_touch_end);

//---------------------------------------------------

function on_touch_start(e)

{
	e.preventDefault();
	timer_id= setInterval (start_vibrate, 1050);
	
}

//----------------------------------------------------	
	
	function start_vibrate()
	{
    window.navigator.vibrate(20); 

}
//-----------------------------------------------------

function on_touch_end(e)
{
	e.preventDefault();
	clearInterval(timer_id);
}

//---------------------------------------------------------
