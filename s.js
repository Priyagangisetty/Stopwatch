
const display =document.querySelector(".display");
let isrunning = false;
let timer = null;
let starttime = 0;
let ellapsedtime = 0;


function start(){
    if(!isrunning){
        starttime = Date.now() - ellapsedtime;
        timer = setInterval(update,10);
        isrunning = true;
    }
}
function stop(){
    if(isrunning){
        clearInterval(timer);
        ellapsedtime = Date.now() - starttime;
        isrunning = false;
    }
}
function reset(){
    clearInterval(timer);
    isrunning = false;
    timer = null;
    starttime = 0;
    ellapsedtime = 0;
    display.textContent = `00:00:00:00`

}
function update(){
    currenttime = Date.now();
    ellapsedtime = currenttime - starttime;
    let hours = Math.floor(ellapsedtime / (1000*60*60));
    let minutes = Math.floor(ellapsedtime / (1000*60) % 60);
    let secs = Math.floor(ellapsedtime / (1000) % 60);
    let ms = Math.floor(ellapsedtime % 1000 / 10);

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    secs = String(secs).padStart(2,"0");
    ms = String(ms).padStart(2,"0");

    display.textContent = `${hours}:${minutes}:${secs}:${ms}`;
}