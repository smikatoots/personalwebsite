openCity('background');


function openCity(cityName) {
    document.getElementById('default').style.display = "none";
    var i;
    var x = document.getElementsByClassName('aboutitem');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";

}
