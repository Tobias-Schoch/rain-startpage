function addUrlFunction() {
    addUrl.addEventListener('click', function () {
        linkArray.push([urlUrl.value, iconUrl.value, linkArray.length]);
        localStorage.setItem('linkArray', JSON.stringify(linkArray));
        location.reload();
    }, false);
}

function deleteUrlFunction() {
    deleteUrl.addEventListener('click', function () {
        var e = document.getElementById("delUrl");
        var strUser = e.options[e.selectedIndex].value;
        strUser = strUser * -1 - 1;
        linkArray.splice(strUser, 1);
        localStorage.setItem('linkArray', JSON.stringify(linkArray));
        location.reload();
    }, false);
}

function getLinks() {
    for (var i = 0; i < linkArray.length; i++) {
        var parent = document.getElementById('delUrl');
        newChild = '<option value="' + linklength +'">' + linkArray[i][1] + '</option>';
        linkArray[i][2] = linklength;
        linklength -= 1;
        parent.insertAdjacentHTML('afterbegin', newChild);
    }
}