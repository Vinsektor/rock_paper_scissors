const player = () => {
    const ANSWER = prompt('Choose Rock, Paper or Scissors right now!');
    return ANSWER.toLowerCase();
};

const computer = () => {
    const A = ['rock', 'paper', 'scissors'];
    return A[Math.floor(Math.random() * A.length)];
};

const playRound = (playerGround, computerGround) => {
    if (playerGround === computerGround) {
        return [`It's a tie! You both chose ${playerGround}!`, 'nor'];
    } if (
        (playerGround === 'rock' && computerGround === 'scissors')
        || (playerGround === 'paper' && computerGround === 'rock')
        || (playerGround === 'scissors' && computerGround === 'paper')
    ) {
        return [`You win! ${playerGround} beats ${computerGround}!`, 'player'];
    }
    return [`Computer wins! ${computerGround} beats ${playerGround}!`, 'computer'];
};

const game = () => {
    let p = 0;
    let c = 0;
    for (let i = 1; i <= 5; i++) {
        const response = playRound(player(), computer());
        console.log(response[0]);
        if (response[1] === 'player') {
            p += 1;
        } else if (response[1] === 'computer') {
            c += 1;
        }
    }
    if (p > c) {
        return 'You are winner!';
    } if (p < c) {
        return 'Computer is winner!';
    }
    return 'Tie!';
};

// const opt = document.querySelectorAll('.options span');
// function changeOpacity(e) {
//     this.classList.add('.option_target');
// }

// function removeOpacity(e) {
//     this.classList.remove('.option_target');
// }

// opt.forEach((element) => {
//     element.addEventListener('mouseover', changeOpacity);
// });
