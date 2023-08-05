let player = () => {
    let answer = prompt("Choose Rock, Paper or Scissors right now!");
    return answer.toLowerCase();
}

let computer = () => {
    let a = ["rock", "paper", "scissors"];
    return a[Math.floor(Math.random() * a.length)];
}

let playRound = (playerGround, computerGround) => {
    if (playerGround === computerGround) {
        return [`It's a tie! You both chose ${playerGround}!`, "nor"]
    }
    else if (
        (playerGround === "rock" && computerGround === "scissors") ||
        (playerGround === "paper" && computerGround === "rock") ||
        (playerGround === "scissors" && computerGround === "paper")
        ) {
        return [`You win! ${playerGround} beats ${computerGround}!`, 'player'];
    } 
    else {
        return [`Computer wins! ${computerGround} beats ${playerGround}!`, "computer"];
    }
};

let game = () => {
    let p = 0,
        c = 0;
    for (let i = 1; i <= 5; i++) {
        let response = playRound(player(), computer());
        console.log(response[0]);
        if (response[1] === "player") {
            p++;
        }
        else if (response[1] === "computer") {
            c++;
        }
    }
    if (p > c) {
        return "You are winner!"
    }
    else if (p < c) {
        return "Computer is winner!"
    }
    else {
        return "Tie!"
    }
};

console.log(game());
