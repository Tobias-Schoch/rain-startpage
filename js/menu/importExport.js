function exportLocalStorage() {
    getLocal.addEventListener('click', function () {
        exportLocal = JSON.stringify(localStorage);
        var copyText = localexport;
        copyText.select();
        document.execCommand("copy");
    }, false);
}

function importLocalStorage() {
    importLocal.addEventListener('click', function () {
        Object.assign(localStorage, JSON.parse(localimport.value));
        location.reload();
    }, false);
}
