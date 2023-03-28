/*if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) {
  elem.msRequestFullscreen();
}*/
const ico = 'icons/splashIco.svg';

const img = document.createElement('img');
img.src = ico;
img.alt = "OSnB";
img.height = 100;
img.width = 100;
document.appendChild(img);