/*if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) {
  elem.msRequestFullscreen();
}*/
const console = document.createElement('p');
document.body.appendChild(console);

try {
  const img = document.createElement('img');
  img.src = "system/icons/splashIco.svg";
  img.height, img.width = screen.height;
  document.body.appendChild(img);
} catch(err) {
  console.innerHtml = err.message;
}