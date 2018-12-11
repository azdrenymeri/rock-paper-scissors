
var userScore =0;
var computerScore = 0;

function computerPlay(){
var generatedValue = Math.floor(Math.random() * 3)+1;
    switch(generatedValue){
        case 1:
        return "Rock";
        case 2:
        return "Paper";
        case 3:
        return "Scissors";
    }
}

function   playerSelection(){
    var userInput = prompt("Rock,Paper,Scissors ? ");
    if(userInput != undefined){
        userInput = userInput.toLowerCase();

        if(userInput == "rock"){
            return "Rock";
        }else if(userInput == "paper"){
            return "Paper";
        }else if(userInput == "scissors"){
            return "Scissors";
        }else {
            alert("Wrong Input "+userInput);
            playerSelection();
        }

    }else{
        var conf = confirm("Are you sure you want to stop the game ?")
       if(conf){
           return null;
       }else{
           playerSelection();
       }
    }
}
function playRound(playerSelection,computerPlay){
    if((playerSelection == "Rock" && computerPlay == "Scissors") || 
        (playerSelection == "Paper" && computerPlay == "Rock") || (playerSelection == "Rock" && computerPlay == "Scissors")){
            userScore++;
            return "User wins !. "+playerSelection+" beats "+computerPlay;
        }else if(playerSelection == computerPlay){
            return "Draw "+playerSelection+" = "+computerPlay;
        }else {
            computerScore++;
            return "Computer Wins !. "+computerPlay+" beats "+playerSelection;
          
        }
}

function game(numberOfRounds = 5){ // default value 5
    for(var i = 0;i<=numberOfRounds;i++){
        const comPlay = computerPlay();
        const userPlay = playerSelection();
        if(userPlay != null){
            console.log(playRound(userPlay, comPlay));
        }else{
            break;
        }   
    }
    if(userScore > computerScore){
        console.log("User wins the game huurrayy !");
        console.log("User Score: "+userScore+"\nComputer score: "+computerScore);
    }else if(computerScore > userScore){
        console.log("Computer wins the game ");
        console.log("User Score: " + userScore + "\nComputer score: " + computerScore);
    }else if(userScore == 0 && computerScore == 0){
        console.log("Game stopped ! ");
    }else{
        console.log("There is a draw !");
        console.log("User Score: " + userScore + "\nComputer score: " + computerScore);
    }
}

//launching the game
game();
