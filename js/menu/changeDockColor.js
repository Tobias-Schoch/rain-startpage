function changeDockColor() {
    document.addEventListener("keydown", function onEvent(event) {
        menue = localStorage.getItem('menue');
        if (event.key === 'd' && menue === "1") {
            darkMode = localStorage.getItem('darkMode');
            if (darkMode === "1") {
                localStorage.setItem('darkMode', "0");
                dock_container.style.backgroundColor = darkDock;
            } else {
                localStorage.setItem('darkMode', "1");
                dock_container.style.backgroundColor = lightDock;
            }
        }
    });
    switchColor.addEventListener('click', function () {
        darkMode = localStorage.getItem('darkMode');
        if (darkMode === "1") {
            localStorage.setItem('darkMode', "0");
            dock_container.style.backgroundColor = darkDock;
        } else {
            localStorage.setItem('darkMode', "1");
            dock_container.style.backgroundColor = lightDock;
        }
    }, false);
}
