/*if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) {
  elem.msRequestFullscreen();
}*/
const ico = "system/icons/splashIco.svg";

try {
  const img = document.createElement('img');
  img.src = ico;
  img.height = 100;
  img.width = 100;
  document.body.appendChild(img);
} catch(err) {
  document.write(err.message);
}