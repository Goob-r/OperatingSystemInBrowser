/*if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) {
  elem.msRequestFullscreen();
}*/
try {
  const img = document.createElement('img');
  img.src = "system/icons/splashIco.svg";
  img.height = screen.height;
  img.width = screen.height;
  img.style.position = "absolute";
  img.style.left = (screen.width / 2) - (img.width / 2);
  document.body.appendChild(img);
} catch(err) {
  console.innerHtml = err.message;
}