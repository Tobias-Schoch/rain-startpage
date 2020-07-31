if (menue === "1") {
    hideMenue();
    localStorage.setItem('menue', "1");
} else {
    showMenue();
    localStorage.setItem('menue', "0");
}

function displayMenu() {
    document.addEventListener("keydown", function onEvent(event) {
        var menue = localStorage.getItem('menue');
        if (event.key === 'Escape') {
            if (menue === "0") {
                hideMenue();
            } else {
                showMenue();
            }
        }
    });
    myEl.addEventListener('click', function () {
        var menue = localStorage.getItem('menue');
        if (menue === "1") {
            showMenue();
        } else {
            hideMenue();
        }
    }, false);
}

function showMenue() {
    localStorage.setItem('menue', "0");
    document.getElementById("mySidenav").style.width = "250px";
}
function hideMenue() {
    localStorage.setItem('menue', "1");
    document.getElementById("mySidenav").style.width = "0";
}