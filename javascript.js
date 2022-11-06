//console.log(getComputerChoice())
const playerSelection="SCIssoRs"
const computerSelection=getComputerChoice()

console.log(playRound(playerSelection, computerSelection))

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3)+1
    if (choice == 1){
        return "rock"
    } else if (choice == 2) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection=playerSelection.toLowerCase()
    console.log(playerSelection)
    console.log(computerSelection)
    
    if (playerSelection=="rock"){
        if (computerSelection=="rock"){
            result = "Draw!"
        } else if (computerSelection=="paper"){
            result = "You lose! Paper beats rock"
        } else{
            result = "You win! Rock beats scissors"
        }
    } else if (playerSelection=="paper"){
        if (computerSelection=="rock"){
            result = "You win! Paper beats rock"
        } else if (computerSelection=="paper"){
            result = "Draw!"
        } else{
            result = "You Lose! Scissors beat paper"
        }
    } else if (playerSelection=="scissors"){
        if (computerSelection=="rock"){
            result = "You Lose! Rock beats scissors"
        } else if (computerSelection=="paper"){
            result = "You win! Scissors beats paper"
        } else{
            result = "Draw!"
        }        
    }

    return result
}