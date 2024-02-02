function generateRandomNumber() {
    return Math.floor(Math.random() * 20 + 1);
}

function checkNumber() {
    let inputNumber = +input.value;
    if (isNaN(inputNumber) || inputNumber === 0) {
        console.log(inputNumber);
        hintText.innerHTML = 'Enter the number, plz!';
        return;
    }
    if (activeScoreValue === 16) {
        title.innerHTML = 'Game Over!';
        document.body.style.backgroundColor = 'red';
        input.disabled = true;
        input.value = '';
    }
    if (inputNumber === randomNumber) {
        document.body.style.backgroundColor = 'green';
        randomNumberBox.innerHTML = randomNumber;
        highscoreValue =
            activeScoreValue > highscoreValue
                ? activeScoreValue
                : highscoreValue;
        highScore.innerHTML = highscoreValue;
        input.value = '';
        hintText.innerHTML = 'You won!';
    } else {
        getHint();
        input.value = '';
        activeScoreValue--;
        activeScore.innerHTML = activeScoreValue;
    }
}

function getHint() {
    let inputNumber = +input.value;
    if (randomNumber - inputNumber > 0) {
        if (randomNumber - inputNumber > 2) {
            hintText.innerHTML = 'Take bigger';
        } else {
            hintText.innerHTML = 'Take bigger';
        }
    } else {
        if (randomNumber - inputNumber < -2) {
            hintText.innerHTML = 'Take smaller';
        } else {
            hintText.innerHTML = 'Take smaller';
        }
    }
}

function limitInputNumber() {
    let inputNumber = +input.value;
    if (inputNumber > 20) {
        input.value = 20;
    } else if (inputNumber < 1) {
        input.value = 1;
    }
}

// Accessing to DOM objects
const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
const input = document.querySelector('.input');
const randomNumberBox = document.querySelector('.random-number');
const hintText = document.querySelector('.hint');
const activeScore = document.querySelector('.active-score');
const highScore = document.querySelector('.highscore');
const title = document.querySelector('.title');

let randomNumber = generateRandomNumber();
console.log(randomNumber);

checkBtn.addEventListener('click', checkNumber);

input.addEventListener('input', limitInputNumber);

againBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = '#4c3434';
    randomNumberBox.innerHTML = '?';
    activeScore.innerHTML = starterScore;
    activeScoreValue = starterScore;
    randomNumber = generateRandomNumber();
    console.log(randomNumber);
    input.disabled = false;
    title.innerHTML = 'Catch the Number!';
});

const starterScore = 20;
let activeScoreValue = 20;
let highscoreValue = 0;
activeScore.innerHTML = activeScoreValue;
highScore.innerHTML = highscoreValue;