let scores = { A: 0, B: 0 };
let sets = { A: 0, B: 0 };
const WIN_SCORE = 25; // 25点でセット獲得

function addScore(team) {
  scores[team]++;
  updateDisplay();

  // 25点（デュース考慮なし・シンプル版）でセット獲得
  if (scores[team] >= WIN_SCORE) {
    sets[team]++;
    alert(`チーム${team} がセットを獲得！`);
    scores = { A: 0, B: 0 }; // セットリセット
    updateDisplay();
  }
}

function undoScore(team) {
  if (scores[team] > 0) scores[team]--;
  updateDisplay();
}

function resetSet() {
  scores = { A: 0, B: 0 };
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("scoreA").textContent = scores.A;
  document.getElementById("scoreB").textContent = scores.B;
  document.getElementById("setA").textContent = sets.A;
  document.getElementById("setB").textContent = sets.B;
}
