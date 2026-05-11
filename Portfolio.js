function opentab(tabname) {
    var tablinks = document.getElementsByClassName("tab-link");
    var tabcontents = document.getElementsByClassName("tab-content");
    
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("after-Link");
    }
    
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add("after-Link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}