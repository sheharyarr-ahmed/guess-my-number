'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 21;
// document.querySelector('.highscore').textContent = 1;
// document.querySelector('.guess').value = 44;
// console.log(document.querySelector('.guess').value);
document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value);
  //   document.querySelector('.message').textContent =
  //     'going in the right direction';
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '❌ Not a number!'; //this is an scenario to tell how to react if someboady entered nothing and pressed on click.
  }
});
