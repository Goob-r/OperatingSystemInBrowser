try {
  if (document.body.requestFullscreen) {
    document.body.requestFullscreen();
  } else if (document.body.webkitRequestFullscreen) {
    document.body.webkitRequestFullscreen();
  } else if (document.body.msRequestFullscreen) {
    document.body.msRequestFullscreen();
  }
} catch(err) {
  document.write(err.message);
}

try {
  const img = document.createElement('img');
  //img.src = "system/icons/splashIco.svg";
  img.src = "https://www.w3schools.com/css/img_lights.jpg";
  img.style.position = "absolute";
  img.height = img.width = window.innerHeight;
  img.style.left = ((window.innerWidth / 2) - (img.width / 2)) + "px";
  img.style.top = ((window.innerHeight / 2) - (img.height / 2)) + "px";
  document.body.appendChild(img);
  setInterval(() => {
    let v = 1;
    for (let i = 10; i > 0; i -= 1) {
      setInterval(() => {
        img.style.opacity = i / 10;
      }, v * 100);
      v++;
      
    }
  }, 3000);
} catch(err) {
  document.write(err.message);
}
