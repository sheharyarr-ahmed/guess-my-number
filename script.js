'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 21;
// document.querySelector('.highscore').textContent = 1;
// document.querySelector('.guess').value = 44;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20) + 1; //state variable also
let score = 20; // this variable is called state variable as it holds the application state.
let highScore = 0;
// the beneath function is created and will be used wherever it is needed instead of writing console.log('') again in th ecase .message class
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value);
  //   document.querySelector('.message').textContent =
  //     'going in the right direction';
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when no input is entered
  if (!guess) {
    displayMessage('🛑 No number');
    //this is an scenario to tell how to react if someboady entered nothing and pressed on click.
    //when player guesses the correct number
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.message').textContent = '✅ Correct Number';
    displayMessage('✅ Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //   when the guess is not equals to secret number / the concept of refactoring was done here
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '📈 Too high' : '📉 Too low';
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = '💩 You lost the game';
      displayMessage('💩 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }

  //     //when the entered number is higher than the secret number
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too high';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💩 You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //     //when the entered number is lower than the secret number
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💩 You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = score;
  //   document.querySelector('.number') = secretNumber;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').textContent = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
