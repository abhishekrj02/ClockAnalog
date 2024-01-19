function myTimerMain(){
    clearInterval(myUTCTimer);

    setInterval(myTimer,1000);
}
function myUTCTimerMain(){
    clearInterval(myTimer);
    setInterval(myUTCTimer,1000);
}
        
function myTimer() {
    
    const date = new Date();
    let second=date.getUTCSeconds();
    let minute=date.getUTCMinutes();
    let hour=date.getUTCHours();
    let sdeg=6*second;
    let mdeg=minute*6;
    let hdeg=hour*6*12;
    
    document.getElementById("test").innerHTML = hour+":"+minute+":"+second;
          
    document.getElementById("second").style.transform="rotate("+sdeg+"deg)";
    document.getElementById("minute").style.transform="rotate("+mdeg+"deg)";
    document.getElementById("hour").style.transform="rotate("+hdeg+"deg)";
}

function myUTCTimer() {
    

    const date = new Date();
    let second=date.getSeconds();
    let minute=date.getMinutes();
    let hour=date.getHours();
    let sdeg=6*second;
    let mdeg=minute*6;
    let hdeg=hour*6*12;
    
    document.getElementById("test").innerHTML = hour+":"+minute+":"+second;
          
    document.getElementById("second").style.transform="rotate("+sdeg+"deg)";
    document.getElementById("minute").style.transform="rotate("+mdeg+"deg)";
    document.getElementById("hour").style.transform="rotate("+hdeg+"deg)";
}