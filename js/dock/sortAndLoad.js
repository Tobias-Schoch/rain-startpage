function loadLinks() {
    if (linkArray === null) {
        linkArray = [];
        localStorage.setItem('linkArray', JSON.stringify(linkArray));
    } else {
        linklength = linkArray.length - 1;
        for (var i = 0; i < linkArray.length; i++) {
            var parent = document.getElementById('dock-element');
            newChild = '<li class="list-group-items"><a class="linksrc" href="' + linkArray[i][0] + '"><img class="imagesrc" src="img/icons/' + linkArray[i][1] + '.png"/></a></li>';
            linkArray[i][2] = linklength;
            linklength -= 1;
            parent.insertAdjacentHTML('afterbegin', newChild);
        }
    }
}

function sortLinks() {
    $('#dock-element').sortable();
    document.addEventListener('mousemove', function (event) {
        linksrc = document.getElementsByClassName('linksrc');
        imagesrc = document.getElementsByClassName('imagesrc');
        linkArray = [];
        for (var i = 0; i < linksrc.length; i++) {
            imageArray = imagesrc[i].src.split('/');
            imageArray = imageArray[imageArray.length - 1];
            imageArray = imageArray.substring(0, imageArray.length - 4);
            linkArray.push([linksrc[i].href, imageArray]);
        }
        linkArray.reverse();
        localStorage.setItem('linkArray', JSON.stringify(linkArray));
    });
}


