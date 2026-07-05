const currentScoreDisplay = document.querySelector('#currentScore');
const highScoreDisplay = document.querySelector('#highScore');

// Timer element
const timerDisplay = document.querySelector('#timer');

// Button elements
const clickButton = document.querySelector('#clickButton');
const startButton = document.querySelector('#startButton');
const resetButton = document.querySelector('#resetButton');
const resumeButton = document.querySelector('#resumeButton');
// Status message element
const statusMessage = document.querySelector('#statusMessage');

// ========================================
// Game Variables
// ========================================
let currentScore = 0;
let highScore = 0;
let timeRemaining = 10;
let gameTimerId = null;
let isGameActive = false;

// ========================================
// Initialize Game on Page Load
// ========================================
function initializeGame() {
  loadHighScore();
  updateDisplay();
}

// ========================================
// Local Storage Functions
// ========================================
function loadHighScore() {
  const savedHighScore = localStorage.getItem('clickGameHighScore');
  highScore = savedHighScore ? parseInt(savedHighScore) : 0;
}

function saveHighScore() {
  localStorage.setItem('clickGameHighScore', currentScore);
  highScore = currentScore;
}

// ========================================
// Display Update Functions
// ========================================
function updateDisplay() {
  currentScoreDisplay.innerText = currentScore;
  highScoreDisplay.innerText = highScore;
  timerDisplay.innerText = timeRemaining;

  // (1) Turn red when score > 20
  currentScoreDisplay.style.color = currentScore > 20 ? 'red' : 'black';
}

function updateStatus(message) {
  statusMessage.innerText = message;
}

// ========================================
// Game Logic
// ========================================

// (2) Flash "Click Me!" message for 1 second
function flashMessage() {
  clickButton.textContent = "Click Me!";
  setTimeout(() => {
    clickButton.textContent = "";
  }, 1000);
}

function startGame() {
  currentScore = 0;
  timeRemaining = 10;
  isGameActive = true;

  clickButton.disabled = false;
  startButton.disabled = true;
  updateDisplay();
  updateStatus("Game in progress... Click fast!");

  flashMessage();

  gameTimerId = setInterval(() => {
    timeRemaining--;
    updateDisplay();
    if (timeRemaining <= 0) endGame();
  }, 1000);
}

function ResetGame(){
  // stop any running timer
  if (gameTimerId !== null) {
    clearInterval(gameTimerId);
    gameTimerId = null;
  }
  isGameActive = false;

  // reset scores and timer
  currentScore = 0;
  highScore = 0;
  timeRemaining = 10;
  
  // remove only the high score key instead of clearing all storage
  localStorage.removeItem('clickGameHighScore');
  
  // reset UI state
  clickButton.disabled = true;
  startButton.disabled = false;
  startButton.innerText = "Start Game";
  resumeButton.style.display = 'none';

  // reset any visual transforms
  // scale = 1;
  // clickButton.style.transform = `scale(${scale})`;
  // clickButton.textContent = "";
  var size = 1;
  clickButton.style.transform = `scale(${size})`;
   size=size+0.1;
   if(size>=1.5){
    size=1.2;
   clickButton.style.transform = 'scale(1.2)';
 }

  updateDisplay();
  updateStatus("Game Reset - Click Start Game to begin");
}
// function pauseGame(){
//     clickButton.disabled=true;
//     clearInterval(gameTimerId);
//     startButton.disabled = false;
//     resumeButton.style.display = 'block';
//      updateDisplay();
//       statusMsg("Click the Start Game");
// }
// function resumeGame(){
//      clickButton.disabled=false;
//      startButton.disabled=true;
//      gameTimerId = setInterval(function(){
//     timeRemaining--;
//     isGameActive = true;
//     if(timeRemaining <= 0){
//        endGame();
//     }
//     updateDisplay();
//    },1000);

// }
function endGame() {
  clearInterval(gameTimerId);
  gameTimerId = null;
  isGameActive = false;

  clickButton.disabled = true;
  startButton.disabled = false;

  // (5) Change button text after game ends
  startButton.innerText = "Play Again";

  // (4) Show clicks per second
  const cps = (currentScore / 10).toFixed(2);
  updateStatus(`Game Over! You clicked ${cps} times per second.`);

  // (6) Confetti effect on new high score
  if (currentScore > highScore) {
    saveHighScore();
    document.body.style.background = "gold";
    updateStatus(`🎉 New High Score: ${currentScore}! (${cps} clicks/sec)`);

    setTimeout(() => {
      document.body.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    }, 1000);
  }

  updateDisplay();
}

// (3) Button grows each click (max 2×)
let size =1;
function handleClick() {
  if (isGameActive) {
    currentScore++;
    updateDisplay();

   clickButton.style.transform = `scale(${size})`;
   size=size+0.1;
   if(size>=1.2){
    size=1;
   clickButton.style.transform = 'scale(1.5)';
   }
    setTimeout(() => {
      clickButton.style.transform = `scale(${scale - 0.05})`;
    }, 100);
  }
}

// Reset high score
function resetHighScore() {
  const confirmed = confirm("Are you sure you want to reset your high score?");
  if (confirmed) {
    localStorage.removeItem('clickGameHighScore');
    highScore = 0;
    updateDisplay();
    updateStatus("High score has been reset!");
  }
}


// ========================================
// Event Listeners
// ========================================
clickButton.addEventListener('click', handleClick);
startButton.addEventListener('click', startGame);
resetButton.addEventListener('click', ResetGame);
pauseButton.addEventListener('click',pauseGame);
resumeButton.addEventListener('click',resumeGame);
// ========================================
// Initialize
// ========================================
initializeGame();

