let scores = { A: 0, B: 0 };
let sets = { A: 0, B: 0 };
const WIN_SCORE = 25;

function addScore(team) {
  scores[team]++;
  updateDisplay();
  checkSetWin();
}

function undoScore(team) {
  if (scores[team] > 0) scores[team]--;
  updateDisplay();
}

function resetSet() {
  scores = { A: 0, B: 0 };
  updateDisplay();
}

function checkSetWin() {
  const a = scores.A;
  const b = scores.B;

  // 両方24点未満なら25点先取
  // デュース（両方24点以上）なら2点差で勝利
  const isDeuce = a >= 24 && b >= 24;

  if (!isDeuce && (a >= WIN_SCORE || b >= WIN_SCORE)) {
    // 通常勝利（25点先取）
    const winner = a >= WIN_SCORE ? 'A' : 'B';
    setWin(winner);
  } else if (isDeuce && Math.abs(a - b) >= 2) {
    // デュース勝利（2点差）
    const winner = a > b ? 'A' : 'B';
    setWin(winner);
  }
}

function setWin(team) {
  sets[team]++;
  alert(`チーム${team} がセットを獲得！`);
  scores = { A: 0, B: 0 };
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('scoreA').textContent = scores.A;
  document.getElementById('scoreB').textContent = scores.B;
  document.getElementById('setA').textContent = sets.A;
  document.getElementById('setB').textContent = sets.B;
}
