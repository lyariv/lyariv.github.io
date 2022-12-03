function toggleNavPanel(){
    var panel = document.getElementById('nav-dialog'), 
    navarrow = document.getElementById("hamburger"), maxH="400px";

    if(panel.open){
        panel.hide();
    } else {
        panel.showModal();
    }
}

var el = document.getElementById("hamburger");
el.addEventListener("click", toggleNavPanel, false);