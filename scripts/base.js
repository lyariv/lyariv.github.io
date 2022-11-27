function toggleNavPanel(){
    var panel = document.getElementById('nav'), navarrow = document.getElementById("hamburger"), maxH="400px";
    if(panel.style.height == maxH){
        panel.style.height = "0px";
        panel.style.display = "none";
        navarrow.innerHTML = "&#9776;";
    } else {
        panel.style.height = maxH;
        panel.style.display = 'block';
        navarrow.innerHTML = "&#9652;";
    }
}

var el = document.getElementById("hamburger");
el.addEventListener("click", toggleNavPanel, false);