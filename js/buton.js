var d = new Date();

document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".99";


 var x = document.getElementById("myBtn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);


//-------------------------------------------------------------------------
function myFunction() {
    document.getElementById("demo").innerHTML += "Moused over!<br>";
}

//-------------------------------------------------------------------------


function mySecondFunction() {
    document.getElementById("demo").innerHTML += "Clicked!<br>";
}


//-------------------------------------------------------------------------
function myThirdFunction() {
    document.getElementById("demo").innerHTML += "Moused out!<br>";
}


//-------------------------------------------------------------------------