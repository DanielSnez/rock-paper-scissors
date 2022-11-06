//console.log(getComputerChoice())
let playerSelection="SCIssoRs"
let computerSelection=getComputerChoice()

//console.log(playRound(playerSelection, computerSelection))
game()

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
            result = "You lose! Scissors beat paper"
        }
    } else if (playerSelection=="scissors"){
        if (computerSelection=="rock"){
            result = "You lose! Rock beats scissors"
        } else if (computerSelection=="paper"){
            result = "You win! Scissors beats paper"
        } else{
            result = "Draw!"
        }        
    }

    return result
}

function game(){
    let humanScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++){
        playerSelection = prompt("Choose your weapon!")
        computerSelection=getComputerChoice()
        result = playRound(playerSelection, computerSelection)
        if (result.includes("win")==true){
            humanScore++
        } else if (result.includes("lose")==true){
            computerScore++
        } else {
            i--
        }
        console.log(result)
    }

    if (humanScore>computerScore){
        console.log("Human wins!")
    } else if (humanScore<computerSelection){
        console.log("Computer wins!")
    } else {
        console.log("Draw!")
    }
}
