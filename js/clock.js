const clock = document.querySelector('h2#clock');

function getTime(){
    const time = new Date();
    const hour      = String(time.getHours()).padStart(2, "0");
    const minutes   = String(time.getMinutes()).padStart(2, "0");
    const seconds   = String(time.getSeconds()).padStart(2, "0");
    const mon = parseInt(time.getMonth);

    clock.innerHTML = `${hour}:${minutes}:${seconds}`;
}

function init(){
    setInterval(getTime, 1000);
}

init();