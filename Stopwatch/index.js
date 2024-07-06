const timerEl=document.getElementById("timer");
const startButtonEL=document.getElementById("start")
const stopButtonEL=document.getElementById("stop")
const resetButtonEL=document.getElementById("reset")
let startTime=0
let elapseTime=0
let TimerInterval;

function startTimer(){
    startTime=Date.now()-elapseTime

    TimerInterval=setInterval(()=>{
        elapseTime=Date.now()-startTime
        timerEl.textContent=formatTime(elapseTime);

    },10)
}
function formatTime(elapseTime){
    const miliseconds=Math.floor((elapseTime % 1000)/10);
    const seconds=Math.floor((elapseTime % 1000*60)/1000);
    return miliseconds >9 ?miliseconds:"0"+miliseconds;
    

}
function stopTimer(){
    console.log("stop")
}
function resetTimer(){
    console.log("reset")
}

startButtonEL.addEventListener("click",startTimer)
stopButtonEL.addEventListener("click",stopTimer)
resetButtonEL.addEventListener("click",resetTimer)