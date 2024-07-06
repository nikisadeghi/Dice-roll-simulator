const startEL=document.getElementById("start")
const stopEL=document.getElementById("stop")
const resetEL=document.getElementById("reset")
const timerEL=document.getElementById("timer")
let interval;
let timeLeft=10;
function updateTimer(){
    let minutes=Math.floor(timeLeft/60)
    let seeconds=timeLeft % 60
    let formattedTime=`${minutes.toString().padStart(2,"0")}:${seeconds.toString().padStart(2,"0")}`;
   

    timerEL.innerHTML=formattedTime

}
function startTimer() {
    interval = setInterval(()=>{
        timeLeft--;
        updateTimer();
        if(timeLeft===0){
            clearInterval(interval);
            alert("time's up");
            timeLeft=1500;
            updateTimer();
        }
    
    
    },1000)
}
function stopTimer(){
    clearInterval(interval);
}
function resetTimer(){
    clearInterval(interval);
    timeLeft=1500;
    updateTimer();

}

startEL.addEventListener("click",startTimer);
stopEL.addEventListener("click",stopTimer);
resetEL.addEventListener("click",resetTimer);