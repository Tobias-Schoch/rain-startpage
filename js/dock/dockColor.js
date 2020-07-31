function dockColor() {
    if (darkMode === "1") {
        localStorage.setItem('darkMode', "1");
        dock_container.style.backgroundColor = lightDock;
    } else {
        localStorage.setItem('darkMode', "0");
        dock_container.style.backgroundColor = darkDock;
    }
}

