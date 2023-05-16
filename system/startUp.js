import taskbar from 'test.css';

try {
 async function startUp() {
   const img = document.createElement("img");
   img.src = "system/icons/splashIco.svg";
   img.style.position = "absolute";
   img.height = window.innerHeight;
   img.width = window.innerHeight;
   img.style.left = window.innerWidth / 2 - img.width / 2 + "px";
   img.style.top = window.innerHeight / 2 - img.height / 2 + "px";
   document.body.appendChild(img);
    const response = await fetch("system/sysData/systemOptions.json");
   const systemOptions = await response.json();


   var taskbarColor = systemOptions.taskbar.color;


   const taskbar = document.createElement("div");
   taskbar.width = window.innerWidth;
   taskbar.style.position = "absolute";
   /*if (systemOptions.taskbar.position == "bottom") {
     taskbar.style.bottom = "0px";
   } else {
     taskbar.style.top = "0px";
   }*/
   /*alert("rgba(" + taskbarColor[0] + "," + taskbarColor[1] + "," + taskbarColor[2] + "," + taskbarColor[3] + ")");*/
   taskbar.style.backgroundColor = "rgb(0, 0, 0,)";
   document.body.appendChild(taskbar)
    img.remove();
 }


 startUp();
} catch (err) {
 alert("WARN \nCOULD NOT START UP:" + err.message);
}
