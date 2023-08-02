let easyBox = document.getElementById("easy-box");
let mediumBox = document.getElementById("medium-box");
let hardBox = document.getElementById("hard-box");

var difficulty;

easyBox.addEventListener("click", () => {
  difficulty = "easy";
  document.location.href = `home.html?difficultyLevel=${encodeURIComponent(difficulty)}`
});
mediumBox.addEventListener("click", () => {
  difficulty = "medium";
  document.location.href = `home.html?difficultyLevel=${encodeURIComponent(difficulty)}`
});
hardBox.addEventListener("click", () => {
  difficulty = "hard";
  document.location.href = `home.html?difficultyLevel=${encodeURIComponent(difficulty)}`
});
