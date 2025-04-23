🎯 Guess My Number!

Welcome to **Guess My Number**, a fun little number guessing game built with JavaScript, HTML, and CSS!

🧠 What is it?

"Guess My Number" is a browser-based game where the player tries to guess a randomly generated number between 1 and 20. The game provides visual and textual feedback based on how close or correct your guess is.

---

🎮 How to Play

1. Hit **Check!** after entering a number between **1 and 20** in the input box.
2. If you're correct, the secret number is revealed and the background turns green. 🎉
3. If you're wrong, the game will guide you if your guess is **Too high** 📈 or **Too low** 📉.
4. Your **score decreases** with each wrong guess.
5. Lost the game? No worries—click the **Again!** button to try again.

---

 💻 Features

- Randomly generates a secret number on each new game.
- Keeps track of:
- Score (starts from 20)
- Highscore (highest score across rounds)
- Fully responsive interface.
- Uses DOM manipulation and **event-driven programming**.
- Simple and clean UI with CSS.

---

🛠️ Tech Stack

- HTML
- CSS
- JavaScript (ES6+)

---

 📸 Preview

![Game Screenshot]imgs/app.png

---

🧩 Code Highlights

- Use of **state variables** like `score` and `secretNumber`.
- `displayMessage()` function for cleaner code reuse.
- Event listeners for:
  - Button click (`Check!`)
  - Game reset (`Again!`)
- Efficient refactoring with ternary operator:
  ```js
  displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
