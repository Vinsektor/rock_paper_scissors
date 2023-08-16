const gameContainer = document.querySelector('.container');
const userResult = document.querySelector('.player_hand img');
const cpuResult = document.querySelector('.comp_hand img');
const RESULT = document.querySelector('.result');
const optionImages = document.querySelectorAll('.option_image');

// const player = () => {
//     const ANSWER = prompt('Choose Rock, Paper or Scissors right now!');
//     return ANSWER.toLowerCase();
// };

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
        // eslint-disable-next-line no-console
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

optionImages.forEach((image, index) => {
    image.addEventListener('click', (e) => {
        let ans = '';
        image.classList.add('active');
        setTimeout(() => image.classList.remove('active'), 1500);
        // Define choosing
        if (index === 0) {
            ans = 'rock';
        } else if (index === 1) {
            ans = 'paper';
        } else {
            ans = 'scissors';
        }

        // eslint-disable-next-line no-multi-assign
        userResult.src = 'images/rock.png';
        cpuResult.src = 'images/rock.png';
        RESULT.textContent = 'Wait...';

        gameContainer.classList.add('start');

        setTimeout(() => {
            const cpuImages = {
                rock: 'images/rock.png',
                paper: 'images/paper.png',
                scissors: 'images/scissors.png',
            };
            const compAns = computer();
            const response = playRound(ans, compAns);
            const imageSrc = e.target.src;

            gameContainer.classList.remove('start');
            RESULT.textContent = response[0];

            userResult.src = imageSrc;
            cpuResult.src = cpuImages[`${compAns}`];
        }, 1900);
    });
});
