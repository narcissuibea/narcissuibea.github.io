document.getElementById("id_business_version").innerHTML = "Business version = 2018.01.28.10";

//window.addEventListener("deviceorientation", on_device_orientation);
window.addEventListener("devicemotion", on_device_motion);





function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}