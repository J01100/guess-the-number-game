const rng = () => Math.trunc(Math.random() * 1000);
let randomNumber = rng();
let score = 20;
let highscore = 0;
let gameOver = false;
let messageEl = document.querySelector(".message");
let scoreEl = document.querySelector(".score");
let numberEl = document.querySelector(".number");
let bodyEl = document.querySelector("body");
let btnCheckEl = document.querySelector(".check");
let btnAgainEl = document.querySelector(".again");

const changeMessage = (message) => {
  messageEl.textContent = message;
};

const changeScore = (score) => {
  scoreEl.textContent = score;
};

const processGame = () => {
  const guess = document.querySelector(".guess").value;

  if (!guess) {
    changeMessage("Invalid input.");
  } else if (guess == randomNumber) {
    changeMessage("🎊 Correct Number!");
    numberEl.textContent = randomNumber;
    bodyEl.style.backgroundColor = "#60b437";
    btnCheckEl.classList.toggle("disabled");
    gameOver = true;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess != randomNumber) {
    changeMessage(guess > randomNumber ? "⬆️ Too high!" : "⬇️ Too low!");
    changeScore(--score);
    if (score < 1) {
      changeMessage("😥 YOU LOST THE GAME!");
      btnCheckEl.classList.toggle("disabled");
      gameOver = true;
      numberEl.textContent = randomNumber;
    }
  }
};

// on check button click
btnCheckEl.addEventListener("click", processGame);
document.addEventListener("keydown", (e) => {
  if (e.key == "Enter" && !gameOver) processGame();
});

// on reset button click
btnAgainEl.addEventListener("click", () => {
  bodyEl.style.backgroundColor = "var(--bs-gray-900)";
  numberEl.textContent = "?";
  changeMessage("🤔 START GUESSING!");
  score = 20;
  changeScore(score);
  randomNumber = rng();
  btnCheckEl.classList.remove("disabled");
  gameOver = false;
});
