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
  img.height = screen.height / 100;
  img.width = screen.height;
  document.body.appendChild(img);

  for (let i  = 1; 1 < 100; i++) {
    setTimeout(function() {console.log("ok goober");}, 1000);
    img.height = screen.height / (100 - i);
  }
} catch(err) {
  document.write(err.message);
}