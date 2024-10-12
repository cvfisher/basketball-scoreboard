const scoreEl = document.querySelector(".score-el");
const opponentScoreEl = document.querySelector(".opponent-score-el");
let score = 0;
let opponentScore = 0;
function add1() {
  scoreEl.textContent = score++;
}
function add2() {
  scoreEl.textContent = score += 2;
}
function add3() {
  scoreEl.textContent = score += 3;
}
function opponentadd1() {
  opponentScoreEl.textContent = opponentScore++;
}
function opponentadd2() {
  opponentScoreEl.textContent = opponentScore += 2;
}
function opponentadd3() {
  opponentScoreEl.textContent = opponentScore += 3;
}
function reset() {
  opponentScoreEl.textContent = 0;
  scoreEl.textContent = 0;
  score = 0;
  opponentScore = 0;
}
