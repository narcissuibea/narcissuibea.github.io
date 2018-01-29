var d = new Date();

document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".9"; 





//--------------------------------------

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}