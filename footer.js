document.getElementById("footerbuttondown").onclick = function() { shrink() };
document.getElementById("footerbuttonup").onclick = function() { expand() };
document.getElementById("footer").style.height = "15px";
document.getElementById("footerbuttondown").style.visibility = "hidden";
document.getElementById("footerbuttonup").style.visibility = "visible";


function shrink() {
    if (document.getElementById("footer").style.height = "350px") {

        document.getElementById("footer").style.height = "15px";
        document.getElementById("footerbuttondown").style.visibility = "hidden";
        document.getElementById("footerbuttonup").style.visibility = "visible";
        document.getElementById("footercont").style.opacity = "0";
        document.getElementById("footercont").style.visibility = "hidden";

    }
}

function expand() {
    if (document.getElementById("footer").style.height = "15px") {

        document.getElementById("footer").style.height = "350px";
        document.getElementById("footerbuttondown").style.visibility = "visible";
        document.getElementById("footerbuttonup").style.visibility = "hidden";
        document.getElementById("footercont").style.opacity = "1";
        document.getElementById("footercont").style.visibility = "visible";


    }
}