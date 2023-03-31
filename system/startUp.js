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
  img.height = window.innerHeight;
  img.width = window.innerHeight;
  img.style.left = ((window.innerWidth / 2) - (img.width / 2)) + "px";
  img.style.top = ((window.innerHeight / 2) - (img.height / 2)) + "px";
  document.body.appendChild(img);
  setInterval(() => {
    img.remove
  }, 3000);
  
  const errorOutput = document.createElement('p');
  errorOutput.position = "absolute";
  errorOutput.top = "0px";
  errorOutput.left = "0px";
  errorOutput.id = "errorOut";
} catch(err) {
  document.write(err.message);
}

try {
  const taskbar = document.createElement('div');
  taskbar.width = window.innerWidth;
  taskbar.style.position = "absolute";
  taskbar.style.bottom = "0px";
  taskbar.id = "taskbar";
} catch(err) {
  document.getElementById("errorOut").innerHtml = err.message;
}
