const buttons=document.querySelectorAll('button');
const resultEl=document.getElementById("result");
const playerScoreEl=document.getElementById("user-score");
const computerScoreEl=document.getElementById("computer-score");
let playerScore=0;
let computerScore=0;

buttons.forEach(button =>{
    button.addEventListener('click',()=>{const result=playround(button.id,computerplay());
    resultEl.textContent=result;
    

    });
});
function computerplay(){
    const choices=["rock","paper","scissors"]
    const randomchoice=Math.floor(Math.random()*choices.length);
    return choices[randomchoice];

}
function playround(playerSelection,computerSelection){
    if(playerSelection===computerSelection){
        return"it is a tie!"

    }else if(
        (playerSelection==="rock"&&
         computerSelection==="scissors"   
        )||
        (playerSelection===paper &&
        computerSelection==="rock"
        )||
        (playerSelection==="scissors" && computerSelection==="paper")
    ){
        playerScore++;
        playerScoreEl.textContent=playerScore;
        return "you win!"+playerSelection+"beats"+computerSelection;
    }else{
        computerScore++;
        computerScoreEl.textContent=computerScore;
        return "you lose!"+computerSelection+"beats"+playerSelection;
    }
}