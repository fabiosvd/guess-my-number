'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  }
  // When player guess wrong number
  if (guess !== secretNumber && guess && score > 0) {
    // Reduce score by one
    score--;
    document.querySelector('.score').textContent = score;

    // If the guess was lower than the secretNumber return 'Too low!' if higher, return 'Too high!'
    document.querySelector('.message').textContent =
      guess < secretNumber ? '📉 Too low!' : '📈 Too high!';

    // When player loses the game
    if (score === 0) {
      document.querySelector('.message').textContent = '💥 You lost the game!';
    }
  }
  // When player wins
  else if (score != 0) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').textContent = '?';
});
