// // // // // ========================================
// // // // // DOM Element Selection
// // // // // ========================================

// // // // // Score elements
// // // // const currentScoreDisplay = document.querySelector('#currentScore');
// // // // const highScoreDisplay = document.querySelector('#highScore');

// // // // // Timer element
// // // // const timerDisplay = document.querySelector('#timer');

// // // // // Button elements
// // // // const clickButton = document.querySelector('#clickButton');
// // // // const startButton = document.querySelector('#startButton');
// // // // const resetButton = document.querySelector('#resetButton');

// // // // // Status message element
// // // // const statusMessage = document.querySelector('#statusMessage');


// // // // // ========================================
// // // // // Game Variables
// // // // // ========================================

// // // // let currentScore = 0;        // Tracks clicks in current game
// // // // let highScore = 0;           // Stores all-time best score
// // // // let timeRemaining = 10;      // Countdown timer (10 seconds)
// // // // let gameTimerId = null;      // Stores setInterval ID for game timer
// // // // let isGameActive = false;    // Tracks if game is currently running


// // // // // ========================================
// // // // // Initialize Game on Page Load
// // // // // ========================================

// // // // // Load high score from localStorage when page loads
// // // // function initializeGame() {
// // // //     loadHighScore();
// // // //     updateDisplay();
// // // // }


// // // // // ========================================
// // // // // localStorage Functions
// // // // // ========================================

// // // // // Load high score from browser storage
// // // // function loadHighScore() {
// // // //     const savedHighScore = localStorage.getItem('clickGameHighScore');
    
// // // //     // If high score exists in storage, use it; otherwise default to 0
// // // //     if (savedHighScore !== null) {
// // // //         highScore = parseInt(savedHighScore);
// // // //     } else {
// // // //         highScore = 0;
// // // //     }
// // // // }

// // // // // Save high score to browser storage
// // // // function saveHighScore() {
// // // //     localStorage.setItem('clickGameHighScore', currentScore);
// // // //     highScore = currentScore;
// // // // }


// // // // // ========================================
// // // // // Display Update Functions
// // // // // ========================================

// // // // // Update all display elements
// // // // function updateDisplay() {
// // // //     currentScoreDisplay.innerText = currentScore;
// // // //     highScoreDisplay.innerText = highScore;
// // // //     timerDisplay.innerText = timeRemaining;
// // // // }

// // // // // Update status message
// // // // function updateStatus(message) {
// // // //     statusMessage.innerText = message;
// // // // }


// // // // // ========================================
// // // // // Game Logic Functions
// // // // // ========================================

// // // // // Start the game
// // // // function startGame() {
// // // //     // Reset game state
// // // //     currentScore = 0;
// // // //     timeRemaining = 10;
// // // //     isGameActive = true;
    
// // // //     // Enable click button
// // // //     clickButton.disabled = false;
// // // //     startButton.disabled = true;
    
// // // //     // Update displays
// // // //     updateDisplay();
// // // //     updateStatus('Game in progress... Click fast!');
    
// // // //     // Start countdown timer
// // // //     gameTimerId = setInterval(function() {
// // // //         timeRemaining--;
// // // //         updateDisplay();
        
// // // //         // Check if time is up
// // // //         if (timeRemaining <= 0) {
// // // //             endGame();
// // // //         }
// // // //     }, 1000); // Run every 1000ms (1 second)
// // // // }

// // // // // End the game
// // // // function endGame() {
// // // //     // Stop timer
// // // //     clearInterval(gameTimerId);
// // // //     gameTimerId = null;
// // // //     isGameActive = false;
    
// // // //     // Disable click button
// // // //     clickButton.disabled = true;
// // // //     startButton.disabled = false;
    
// // // //     // Check if new high score
// // // //     if (currentScore > highScore) {
// // // //         saveHighScore();
// // // //         updateStatus(`🎉 New High Score: ${currentScore}! Amazing!`);
// // // //     } else {
// // // //         updateStatus(`Game Over! Your score: ${currentScore}`);
// // // //     }
    
// // // //     updateDisplay();
// // // // }

// // // // // Handle click button press
// // // // function handleClick() {
// // // //     if (isGameActive) {
// // // //         currentScore++;
// // // //         updateDisplay();
// // // //     }
// // // // }

// // // // // Reset high score
// // // // function resetHighScore() {
// // // //     const confirmed = confirm('Are you sure you want to reset your high score?');
    
// // // //     if (confirmed) {
// // // //         localStorage.removeItem('clickGameHighScore');
// // // //         highScore = 0;
// // // //         updateDisplay();
// // // //         updateStatus('High score has been reset!');
// // // //     }
// // // // }
// // // // // duplicate resetHighScore removed — original implementation above is used


// // // // // ========================================
// // // // // Event Listeners
// // // // // ========================================

// // // // // Click button - increment score
// // // // clickButton.addEventListener('click', handleClick);

// // // // // Start button - begin new game
// // // // startButton.addEventListener('click', startGame);

// // // // // Reset button - clear high score
// // // // resetButton.addEventListener('click', resetHighScore);


// // // // // ========================================
// // // // // Initialize on Page Load
// // // // // ========================================

// // // // initializeGame();


// // // // var currentScore = document.querySelector('#currentScore');
// // // // var highScore = document.querySelector('#highScore');
// // // // var timer = document.querySelector('#timer');
// // // // var clickButton = document.querySelector('#clickButton');
// // // // var startButton = document.querySelector('#startBtton');
// // // // var statusMessage = document.querySelector('#statusMessage');

// // // // var current = 0;
// // // // var high = 0;
// // // // var time1 = 10;
// // // // var track = false;
// // // // function loadContent(){
// // // //     dataload();
// // // //     displayMessage();
// // // // }
// // // // function dataload(){
// // // //     var temp =localStorage.getItem('highScore');
// // // //     if(temp != null){
// // // //         high =parseInt(temp);
// // // //     }
// // // //     else{
// // // //         high = 0;
// // // //     }
// // // // };
// // // // function displayMessage(){
   
// // // //     currentScore.textContent = current;
// // // //     highScore.textContent = high;
// // // //     timer.textContent = time1;
// // // // };
// // // //  function statuMsg(msg){
// // // //      statusMessage.textContent = msg;
// // // //  }
// // // // function startGame(){
// // // //     track = true;
// // // //     clickButton.disabled = false;
// // // //     statuMsg("Game is started");
// // // // }

// // // // function clickMe(){
// // // //     if(track){
// // // //         current++;
// // // //         displayMessage();
// // // //     }
// // // // }


// // // // loadContent();



// // // // startButton.addEventListener('click',startGame);
// // // // clickButton.addEventListener('click',clickMe);
// // // // var player1 = prompt("enter your name:");
// // // // console.log(player1);


// // // var player  = prompt("Enter your Name");
// // // var currentScore = document.querySelector('#currentScore');
// // // var highScore = document.querySelector('#highScore');
// // // var timer = document.querySelector('#timer');
// // // var clickButton = document.querySelector('#clickButton');
// // // var startButton = document.querySelector('#startButton');
// // // var statusMessage = document.querySelector('#statusMessage');
// // // var pauseButton = document.querySelector('#pauseButton');
// // // var resetButton = document.querySelector('#resetButton');
// // // var resumeButton = document.querySelector('#resumeButton');
// // // var body = document.querySelector('.bodys');
// // // var current = 0 ; //btn clicked --> data stored 
// // // var high = 0 ; // high score -> updation
// // // var time1 = 10 ; // time -> updation
// // // var track = false ; 
// // // var idTrack = null; // time-> control
// // // var video = document.querySelector('.videos');
// // // var game = document.querySelector('.game');
// // // var age = prompt("Enter your age");
// // // age = parseInt(age, 10);
// // // if(age < 18){
// // //    game.style.display = 'none';
// // //    body.style.backgroundColor = "red";
// // //                                                      }
// // // function loadContent (){
// // //     dataLoad();
// // //     displayMessage();
// // // };


// // // function dataLoad (){
// // //     var temp = localStorage.getItem('highScore');// first time -> retuns null , otherwise -> data
// // //     if (temp != null){
// // //     high = parseInt(temp) ; // explicit type conversion
// // //     }
// // //     else{
// // //         high = 0;
// // //     }
// // // };

// // // function displayMessage(){
// // //     currentScore.textContent = current ;
// // //     highScore.textContent = high ;
// // //     timer.textContent = time1 ;
// // // };

// // // function statusMsg(msg) {   
// // //     statusMessage.textContent = msg;
// // // }
// // //  function endGame(){
// // //     clearInterval(idTrack);
// // //     track=false;
// // //     clickButton.disabled = true;
// // //     startButton.disabled = false;
// // //     if(current > high){
// // //         localStorage.setItem('highScore', current);
// // //         high = current;
// // //        alert(`congratulation  ${player} you Win`);
// // //        video.style.display="block";        // console.log(`Congratulation ${player}`);
// // //         // body.style.backgroundColor='green';
// // //         displayMessage();
         
// // //         statusMsg("you're current score is higher than previous one");
// // //         body.style.backgroundColor='red';
// // //     }
// // //     else{
// // //         statusMsg("you're current score is less compare to previous one");

// // // }
// // //  }
    
 
// // // function startGame (){
// // //     time1 =10;
// // //     current = 0;
// // //     clickButton.disabled = false;
// // //     startButton.disabled = true;
// // //     track = true;
// // //     statusMsg("game is started");
// // //    idTrack = setInterval(function(){
// // //     time1--;
// // //     if(time1<=0){
// // //        endGame();
// // //     }
// // //     displayMessage();
// // //    },1000);


// // // }                                                                          

// // // function clickMe (){
// // //     if (track){
// // //         current++;
// // //         displayMessage();
// // //     }
// // // }

// // // function newGame(){
// // //     current =0;
// // //     high=0;
// // //     localStorage.clear();
// // //      time1=10;
// // //   displayMessage();
// // //       statusMsg("Start a New Game");
    
// // // }
// // // function pauseGame(){
// // //     clickButton.disabled=true;
// // //     clearInterval(idTrack);
// // //     startButton.disabled = false;
// // //     resumeButton.style.display = 'block';
// // //      displayMessage();
// // //       statusMsg("Click the Start Game");
// // // }
// // // function resumeGame(){
// // //      clickButton.disabled=false;
// // //      startButton.disabled=true;
// // //      idTrack = setInterval(function(){
// // //     time1--;
// // //     if(time1<=0){
// // //        endGame();
// // //     }
// // //     displayMessage();
// // //    },1000);

// // // }

// // // loadContent();

// // // startButton.addEventListener('click', startGame);

// // // clickButton.addEventListener('click',clickMe);
// // // resetButton.addEventListener('click',newGame);
// // // pauseButton.addEventListener('click',pauseGame);
// // // resumeButton.addEventListener('click',resumeGame);
// // // ========================================
// // // DOM Element Selection
// // // ========================================

// // // Score elements
// // const currentScoreDisplay = document.querySelector('#currentScore');
// // const highScoreDisplay = document.querySelector('#highScore');

// // // Timer element
// // const timerDisplay = document.querySelector('#timer');

// // // Button elements
// // const clickButton = document.querySelector('#clickButton');
// // const startButton = document.querySelector('#startButton');
// // const resetButton = document.querySelector('#resetButton');

// // // Status message element
// // const statusMessage = document.querySelector('#statusMessage');


// // // ========================================
// // // Game Variables
// // // ========================================

// // let currentScore = 0;        // Tracks clicks in current game
// // let highScore = 0;           // Stores all-time best score
// // let timeRemaining = 10;      // Countdown timer (10 seconds)
// // let gameTimerId = null;      // Stores setInterval ID for game timer
// // let isGameActive = false;    // Tracks if game is currently running


// // // ========================================
// // // Initialize Game on Page Load
// // // ========================================

// // // Load high score from localStorage when page loads
// // function initializeGame() {
// //     loadHighScore();
// //     updateDisplay();
// // }


// // // ========================================
// // // localStorage Functions
// // // ========================================

// // // Load high score from browser storage
// // function loadHighScore() {
// //     const savedHighScore = localStorage.getItem('clickGameHighScore');
    
// //     // If high score exists in storage, use it; otherwise default to 0
// //     if (savedHighScore !== null) {
// //         highScore = parseInt(savedHighScore);
// //     } else {
// //         highScore = 0;
// //     }
// // }

// // // Save high score to browser storage
// // function saveHighScore() {
// //     localStorage.setItem('clickGameHighScore', currentScore);
// //     highScore = currentScore;
// // }


// // // ========================================
// // // Display Update Functions
// // // ========================================

// // // Update all display elements
// // function updateDisplay() {
// //     currentScoreDisplay.innerText = currentScore;
// //     highScoreDisplay.innerText = highScore;
// //     timerDisplay.innerText = timeRemaining;
// //     if(currentScore >= 20){
// //         currentScoreDisplay.style.color="red";
// //     }
// // }

// // // Update status message
// // function updateStatus(message) {
// //     statusMessage.innerText = message;
// // }


// // // ========================================
// // // Game Logic Functions
// // // ========================================

// // // Start the game
// // function flash(){
// //     clickButton.textContent="Click Me!";
// // }
// // function startGame() {
// //     // Reset game state
// //     currentScore = 0;
// //     timeRemaining = 10;
// //     isGameActive = true;
    
// //     // Enable click button
// //     clickButton.disabled = false;
// //     startButton.disabled = true;
    
// //     // Update displays
// //     updateDisplay();
// //     updateStatus('Game in progress... Click fast!');
// //     setTimeout(() => {
// //         clickButton.textContent = "";
// //     }, 1000);flash();
// //     // Start countdown timer
// //     gameTimerId = setInterval(function() {
// //         timeRemaining--;
// //         updateDisplay();
        
// //         // Check if time is up
// //         if (timeRemaining <= 0) {
// //             endGame();
// //         }
// //     }, 1000); // Run every 1000ms (1 second)
// // } 
// //    function backup(){
// //     body.background ="linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
// //    }
// // // End the game
// // function endGame() {
// //     // Stop timer
// //     clearInterval(gameTimerId);
// //     gameTimerId = null;
// //     isGameActive = false;
    
// //     // Disable click button
// //     clickButton.disabled = true;
// //     startButton.disabled = false;
// //     startButton.innerText = "Play Again";
// //     setTimeout(() => {
// //        document.body.style.background = 'gold';
// //     }, 1000); backup();

// //      const cps = (currentScore / 10).toFixed(2);
// //   updateStatus(`Game Over! You clicked ${cps} times per second.`);
// //   scale = Math.min(scale + 0.1, 2); // cap at 2x
// //     clickButton.style.transform = `scale(${scale})`;

// //     setTimeout(() => {
// //       clickButton.style.transform = `scale(${scale - 0.05})`;
// //     }, 100);
   
// //     // Check if new high score
// //     if (currentScore > highScore) {
// //         saveHighScore();
// //         updateStatus(`🎉 New High Score: ${currentScore}! Amazing!`);
// //     } else {
// //         updateStatus(`Game Over! Your score: ${currentScore}`);
// //     }
    
// //     updateDisplay();
// // }

// // // Handle click button press
// // function handleClick() {
// //          clickButton.style.transform ='scale(1.1)'; 
// //     if (isGameActive) {
// //         currentScore++;
// //         updateDisplay();
   
// //     }
// // }
// // //  function newbtns(){
// // //     clickButton.style.transform ='scale(1.1)';
// // //  }
// // // Reset high score
// // function resetHighScore() {
// //     const confirmed = confirm('Are you sure you want to reset your high score?');
    
// //     if (confirmed) {
// //         localStorage.removeItem('clickGameHighScore');
// //         highScore = 0;
// //         updateDisplay();
// //         updateStatus('High score has been reset!');
// //     }
// // }


// // // ========================================
// // // Event Listeners
// // // ========================================

// // // Click button - increment score
// // clickButton.addEventListener('click', handleClick);

// // // Start button - begin new game
// // startButton.addEventListener('click', startGame);

// // // Reset button - clear high score
// // resetButton.addEventListener('click', resetHighScore);
// // // clickButton.addEventListener('click',newbtns);
// // // ========================================
// // // Initialize on Page Load
// // // ========================================

// // initializeGame();


// // ========================================
// // DOM Element Selection
// // ========================================

// // Score elements
// const currentScoreDisplay = document.querySelector('#currentScore');
// const highScoreDisplay = document.querySelector('#highScore');

// // Timer element
// const timerDisplay = document.querySelector('#timer');

// // Button elements
// const clickButton = document.querySelector('#clickButton');
// const startButton = document.querySelector('#startButton');
// const resetButton = document.querySelector('#resetButton');

// // Status message element
// const statusMessage = document.querySelector('#statusMessage');

// // ========================================
// // Game Variables
// // ========================================
// let currentScore = 0;
// let highScore = 0;
// let timeRemaining = 10;
// let gameTimerId = null;
// let isGameActive = false;

// // ========================================
// // Initialize Game on Page Load
// // ========================================
// function initializeGame() {
//   loadHighScore();
//   updateDisplay();
// }

// // ========================================
// // Local Storage Functions
// // ========================================
// function loadHighScore() {
//   const savedHighScore = localStorage.getItem('clickGameHighScore');
//   highScore = savedHighScore ? parseInt(savedHighScore) : 0;
// }

// function saveHighScore() {
//   localStorage.setItem('clickGameHighScore', currentScore);
//   highScore = currentScore;
// }

// // ========================================
// // Display Update Functions
// // ========================================
// function updateDisplay() {
//   currentScoreDisplay.innerText = currentScore;
//   highScoreDisplay.innerText = highScore;
//   timerDisplay.innerText = timeRemaining;

//   // (1) Turn red when score > 20
//   currentScoreDisplay.style.color = currentScore > 20 ? 'red' : 'black';
// }

// function updateStatus(message) {
//   statusMessage.innerText = message;
// }

// // ========================================
// // Game Logic
// // ========================================

// // (2) Flash "Click Me!" message for 1 second
// function flashMessage() {
//   clickButton.textContent = "Click Me!";
//   setTimeout(() => {
//     clickButton.textContent = "";
//   }, 1000);
// }

// function startGame() {
//   currentScore = 0;
//   timeRemaining = 10;
//   isGameActive = true;

//   clickButton.disabled = false;
//   startButton.disabled = true;
//   updateDisplay();
//   updateStatus("Game in progress... Click fast!");

//   flashMessage();

//   gameTimerId = setInterval(() => {
//     timeRemaining--;
//     updateDisplay();
//     if (timeRemaining <= 0) endGame();
//   }, 1000);
// }

// function endGame() {
//   clearInterval(gameTimerId);
//   gameTimerId = null;
//   isGameActive = false;

//   clickButton.disabled = true;
//   startButton.disabled = false;

//   // (5) Change button text after game ends
//   startButton.innerText = "Play Again";

//   // (4) Show clicks per second
//   const cps = (currentScore / 10).toFixed(2);
//   updateStatus(`Game Over! You clicked ${cps} times per second.`);

//   // (6) Confetti effect on new high score
//   if (currentScore > highScore) {
//     saveHighScore();
//     document.body.style.background = "gold";
//     updateStatus(`🎉 New High Score: ${currentScore}! (${cps} clicks/sec)`);

//     setTimeout(() => {
//       document.body.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
//     }, 1000);
//   }

//   updateDisplay();
// }

// // (3) Button grows each click (max 2×)
// let scale = 1;
// function handleClick() {
//   if (isGameActive) {
//     currentScore++;
//     updateDisplay();

//     scale = Math.min(scale + 0.1, 2); // cap at 2x
//     clickButton.style.transform = `scale(${scale})`;

//     setTimeout(() => {
//       clickButton.style.transform = `scale(${scale - 0.05})`;
//     }, 100);
//   }
// }

// // Reset high score
// function resetHighScore() {
//   const confirmed = confirm("Are you sure you want to reset your high score?");
//   if (confirmed) {
//     localStorage.removeItem('clickGameHighScore');
//     highScore = 0;
//     updateDisplay();
//     updateStatus("High score has been reset!");
//   }
// }

// // ========================================
// // Event Listeners
// // ========================================
// clickButton.addEventListener('click', handleClick);
// startButton.addEventListener('click', startGame);
// resetButton.addEventListener('click', resetHighScore);

// // ========================================
// // Initialize
// // ========================================
// initializeGame();


// ========================================
// DOM Element Selection
// ========================================

// Score elements
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

