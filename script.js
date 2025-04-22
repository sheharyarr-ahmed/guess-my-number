'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 21;
// document.querySelector('.highscore').textContent = 1;
// document.querySelector('.guess').value = 44;
// console.log(document.querySelector('.guess').value);
const secretNumber = Math.trunc(Math.random() * 20) + 1; //state variable also
let score = 20; // this variable is called state variable as it holds the application state.
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value);
  //   document.querySelector('.message').textContent =
  //     'going in the right direction';
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '❌ Not a number!'; //this is an scenario to tell how to react if someboady entered nothing and pressed on click.
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '✅ Correct Number';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '💩 You lost the game';
      document.querySelector('.message').textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💩 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💩 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
