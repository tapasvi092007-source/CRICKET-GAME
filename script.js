// script.js
// Scoreboard update function
function updateScoreboard(team1Score, team2Score) {
    document.getElementById('team1-score').textContent = team1Score;
    document.getElementById('team2-score').textContent = team2Score;
}

// Initial scores
let team1Score = 0;
let team2Score = 0;

// Update the scoreboard initially
updateScoreboard(team1Score, team2Score);

// Example of updating scores after a certain event (e.g., button click)
document.getElementById('hit-button').addEventListener('click', function() {
    team1Score += 1; // Increase team 1 score by 1
    updateScoreboard(team1Score, team2Score); // Update the scoreboard display
});
const batButton = document.getElementById('bat-button');
const bowlButton = document.getElementById('bowl-button');

batButton.addEventListener('click', handleBatClick);
bowlButton.addEventListener('click', handleBowlClick);
function handleBatClick() {
  console.log('Bat button clicked!');
  // Here we can add the game logic for handleBatClick()
}
function handleBowlClick() {
  console.log('Bowl button clicked!');
    // Here we can add the game logic for handleBowlClick();
}
function handleBatClick() {
  const runs = Math.floor(Math.random() * 6) + 1;
  console.log('Batsman scored: ' + runs);
  // Add logic to update the game display with the runs
}
function handleBowlClick() {
  const runs = Math.floor(Math.random() * 6) + 1;
  console.log('Bowler bowled: ' + runs);
  // Add logic to update the game display with the runs
}
const batsmanScoreElement = document.getElementById('batsman-score');
const bowlerScoreElement = document.getElementById('bowler-score');
let batsmanScore = 0;
let bowlerScore = 0;

function handleBatClick() {
  const runs = Math.floor(Math.random() * 6) + 1;
  batsmanScore += runs;
  batsmanScoreElement.textContent = 'Batsman: ' + batsmanScore;
}

function handleBowlClick() {
  const runs = Math.floor(Math.random() * 6) + 1;
  bowlerScore += runs;
  bowlerScoreElement.textContent = 'Bowler: ' + bowlerScore;
}
let runs = 0;
let wickets = 0;
let overs = 0;
function addRun(run) {
  runs += run;
  updateScoreboard(); // We'll define this function later
}

function addWicket() {
  wickets++;
  updateScoreboard();
}

function addOver() {
  overs++;
  updateScoreboard();
}
const maxOvers = 5;
const maxWickets = 10;

function addOver() {
  if (overs < maxOvers) {
    overs++;
    updateScoreboard();
  } else {
    alert("Innings Over!");
  }
}

function addWicket() {
  if (wickets < maxWickets) {
    wickets++;
    updateScoreboard();
  } else {
    alert("All Out!");
  }
}
function updateScoreboard() {
  document.getElementById("runs").textContent = runs;
  document.getElementById("wickets").textContent = wickets;
  document.getElementById("overs").textContent = overs;
}
