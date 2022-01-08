// document.querySelector(".guess").value = 12;

const rng = () => Math.trunc(Math.random() * 1000);
let randomNumber = rng();
let score = 20;
let highscore = 0;

const changeMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

const changeScore = (score) => {
  document.querySelector(".score").textContent = score;
};

// on check button click
document.querySelector(".check").addEventListener("click", () => {
  const guess = document.querySelector(".guess").value;

  if (!guess) {
    changeMessage("Invalid input.");
  } else if (guess == randomNumber) {
    changeMessage("🎊 Correct Number!");
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector("body").style.backgroundColor = "#60b437";
  } else if (guess != randomNumber) {
    changeMessage(guess > randomNumber ? "Too high" : "Too low");
    changeScore(--score);
    if (score < 1) {
      changeMessage("YOU LOST THE GAME!");
    }
  }
});
