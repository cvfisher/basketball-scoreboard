const scoreEl = document.querySelector(".score-el");
const opponentScoreEl = document.querySelector(".opponent-score-el");
const home = document.getElementById("home");
const guest = document.getElementById("guest");
let score = 0;
let opponentScore = 0;
function add1() {
  scoreEl.textContent = score++;
  highlightWinner();
}
function add2() {
  scoreEl.textContent = score += 2;
  highlightWinner();
}
function add3() {
  scoreEl.textContent = score += 3;
  highlightWinner();
}
function opponentadd1() {
  opponentScoreEl.textContent = opponentScore++;
  highlightWinner();
}
function opponentadd2() {
  opponentScoreEl.textContent = opponentScore += 2;
  highlightWinner();
}
function opponentadd3() {
  opponentScoreEl.textContent = opponentScore += 3;
  highlightWinner();
}
function reset() {
  opponentScoreEl.textContent = 0;
  scoreEl.textContent = 0;
  score = 0;
  opponentScore = 0;
}
function highlightWinner() {
  if (score === opponentScore) {
    home.classList.remove("highlight");
    guest.classList.remove("highlight");
  } else if (score > opponentScore) {
    home.classList.add("highlight");
    guest.classList.remove("highlight");
  } else {
    home.classList.remove("highlight");
    guest.classList.add("highlight");
  }
}
