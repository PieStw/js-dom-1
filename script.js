function click(){
    const path = document.getElementById("lamp").src;
    document.getElementById("lamp").src = path.includes("white_lamp") ? "./img/yellow_lamp.png" : "./img/white_lamp.png";
    document.getElementById("button").innerHTML = path.includes("white_lamp") ? "Spegni" : "Accendi";
}


document.getElementById("button").addEventListener("click", click);