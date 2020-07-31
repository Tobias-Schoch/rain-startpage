// Holds links and images
var linkArray = JSON.parse(localStorage.getItem('linkArray'));

// Checks if Darkmode is enabled
var darkMode = localStorage.getItem('darkMode');

// Checks if menue was open
var menue = localStorage.getItem('menue');

// Get classes and id's
var linksrc = document.getElementsByClassName('linksrc');
var imagesrc = document.getElementsByClassName('imagesrc');
var localexport = document.getElementById('local');
var dock_container = document.getElementById('dock-container');
var getLocal = document.getElementById('getLocal');
var importLocal = document.getElementById('importLocal');
var addUrl = document.getElementById('addUrl');
var deleteUrl = document.getElementById('deleteUrl');
var localimport = document.getElementById('local2');
var urlUrl = document.getElementById('urlUrl');
var iconUrl = document.getElementById('iconUrl');
var exportLocal = JSON.stringify(localStorage);
var myEl = document.getElementById('test');
var switchColor = document.getElementById('switchColor');
var newChild;

var lightDock = "rgba(255,255,255,0.5)";
var darkDock = "rgba(0,0,0,0.5)";

localexport.value = exportLocal;

