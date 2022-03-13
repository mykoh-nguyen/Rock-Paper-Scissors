let playerScore = 0;
let computerScore = 0;
const playGame=(x)=>{
    let computerPick = "";
    const newPlayerScore = document.getElementById('playerScore')
    const newComputerScore = document.getElementById('computerScore')
    const winnerText= document.getElementById('winner');
    const randomNum = Math.floor(Math.random()*3);
    if(randomNum == 0){
        computerPick="Paper";
    }
    else if(randomNum==1){
        computerPick="Rock";
    }
    else if(randomNum==2){
        computerPick="Scissor";
    }
    if(x == "Paper" && computerPick =="Rock"){
        playerScore +=1;
        winnerText.textContent ="Player Wins"
    }
    if(x == "Paper" && computerPick =="Scissor"){
        computerScore +=1;
        winnerText.textContent ="Computer Wins"
    }
    if(x== "Rock" && computerPick =="Paper"){
        computerScore +=1;
        winnerText.textContent ="Computer Wins"
    }
    if(x == "Rock" && computerPick =="Scissor"){
        playerScore +=1;
        winnerText.textContent ="Player Wins";
    }
    if(x == "Scissor" && computerPick =="Paper"){
        playerScore +=1;
        winnerText.textContent ="Player Wins";
    }
    if(x == "Scissor" && computerPick =="Rock"){
        computerScore +=1;
        winnerText.textContent ="Computer Wins"
    }
    newPlayerScore.textContent =playerScore;
    newComputerScore.textContent =computerScore;

    if(playerScore == 5){
        newGame("YOU WIN!");
    }
    else if(computerScore ==5){
        newGame("Computer Winsgi")
    }
    
    


}

const buttons = document.querySelectorAll('button')

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        playGame(e.target.value);
        
    })
})

const newGame =(y)=>{
    alert(y);
    playerScore = 0;
    computerScore =0;
}
    