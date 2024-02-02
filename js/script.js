const check = document.getElementById('check');
const result = document.getElementById('result');
const input = document.querySelector('input');
const num = document.getElementById('secretnum');
const title = document.querySelector('.title');
const scroe = document.getElementById('score');
const highScore = document.getElementById('highScore');
const againBtn = document.getElementById('againBtn');

const secretNum = Math.floor(Math.random() * 20) + 1;

let count = 0;

function checking() {
    userNum = +input.value;
    if (activeScoreValue === 16) {
        title.innerHTML = 'Game Over!';
        result.innerHTML = 'No more attempts...';
        document.body.style.backgroundColor = '#802626';
        input.disabled = true;
        input.value = '';
        input.style.backgroundColor = '#802626';
        check.disabled = true;
    }

    if (userNum > secretNum) {
        result.textContent = 'Take smaller...';
        activeScoreValue--;
        scroe.innerHTML = activeScoreValue
        input.value = '';
    } else if (userNum < secretNum) {
        result.textContent = 'Take bigger...';
        activeScoreValue--;
        scroe.innerHTML = activeScoreValue;
        input.value = '';
    } else {
        result.textContent = 'Well done!';
        document.body.style.backgroundColor = '#125800';
        num.textContent = secretNum;
        input.style.backgroundColor = '#125800';
        highScore.textContent = Number(count);
        title.textContent = 'You win!';
        if (activeScoreValue > highScoreValue) {
            highScoreValue = activeScoreValue;
        } else {
            highScoreValue = highScoreValue;
        }
        highScore.innerHTML = highScoreValue;
        check.disabled = true;
    }
}


function limitInputNumber() {
    let inputNumber = +input.value;
    if (inputNumber > 20) {
        input.value = 20;
    } 
}

check.addEventListener('click', checking) 
input.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 13) {
        checking();
    }
})

againBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = '#4c3434';
    input.style.backgroundColor = '#4c3434';
    title.innerHTML = 'Catch the Number!';
    num.innerText = '?';
    scroe.innerHTML = starterScore;
    activeScoreValue = starterScore;
    input.value = '';
    result.innerHTML = 'Result...'
    check.disabled = false;
    input.disabled = false;
})

input.addEventListener('input', limitInputNumber);


const starterScore = 20;
let activeScoreValue = 20;
let highScoreValue = 0;
score.textContent = activeScoreValue;
highScore.innerHTML = highScoreValue;








