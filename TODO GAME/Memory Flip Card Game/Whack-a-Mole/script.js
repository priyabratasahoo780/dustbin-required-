// DOM Elements
const scoreDisplay = document.querySelector('#score');
const timeLeftDisplay = document.querySelector('#timeLeft');
const maxScoreDisplay = document.querySelector('#maxScore');
const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const resumeBtn = document.querySelector('#resumeBtn');

//requried variable

var score = 0;
var time = 30;
var bestScore = 0;
var playGame = false;
var gameId= null;

//common function

function webLoad(){
    onload();
    displayContent();
}

function onload(){
    var temp = localStorage.getItem('highScoreMole');
    if(temp != null){
        bestScore = temp;
    }
    else{
        bestScore = 0;
    }
};

function displayContent(){
    scoreDisplay.textContent = score;
    timeLeftDisplay.textContent = time;
    maxScoreDisplay.textContent = bestScore;                                                                          
}

function endGame(){
    clearInterval(gameId);
    // true stop
    startBtn.disabled = false;
    playGame = false;
    startBtn.innerText = "Play Again";
    if(score > bestScore){
               localStorage.setItem('highScoreMole', score);
        bestScore = score;
        // score = 0;
        alert(`you've scored max value then previous one :${score}`);
    }
    else{
        alert(`you're current score is:${score}`);
    }
    displayContent();
}

function randomTime(min, max){
    return Math.floor(Math.random()*(max - min) + max);
}

function randomHole(){
    // update in only in html not change in js
    var index =Math.floor(Math.random() * holes.length);
    console.log(holes[index]);
    return holes[index];

    //
}

function popGame(){
     if(score > 3){
        scoreDisplay.style.color ="gold";
    }
    else{
         scoreDisplay.style.color ="white";
    }
   var timer = randomTime(500, 1500);
   var hole = randomHole();
   console.log(hole);
   var mole = hole.querySelector('.mole');
   // already write in css but not use when you use this css directly in js

   if(playGame) {
   mole.classList.add('up');
   setTimeout(function(){
    mole.classList.remove('up');
    popGame();
   }, timer);

  }
}
function startGame(){
    time = 30;
    score = 0;
    startBtn.disabled = true;
    playGame = true;
  
   popGame();
   
    gameId = setInterval(function(){
    
        time--;
    
        if(time == 0){
            endGame();
        }
        displayContent();
    },1000);
}

function resetGame(){
    
    score = 0;
    maxScoreDisplay.textContent = 0;
    bestScore = 0;
    startBtn.disabled = false;
    time = 30;
    playGame = false;
    clearInterval(gameId);
    localStorage.removeItem('highScoreMole');
    displayContent();
}

function pauseGame(){
    startBtn.disabled = false;
    resetBtn.disabled = false;
    playGame = false;
    clearInterval(gameId);
    displayContent();
    alert('Game Paused! Click StartGame');
}

function resumeGame(){
    startBtn.disabled = false;
    resetBtn.disabled = false;

    gameId = setInterval(function(){
        time--;
        if(time <= 0){
            endGame();
        }
        displayContent();
    },1000);
}

function bonk (event){
if(!event.isTrusted) return;
if(playGame == false) return;

if(event.target.classList.contains('up')){
    score++;
    event.target.classList.remove('up');
    event.target.classList.add('bonked');
}
setTimeout( function() {
    event.target.classList.remove('bonked');
displayContent();
}, 300);

}

webLoad();

moles.forEach((box) => {
    box.addEventListener('click', bonk);
})

startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click',resetGame);
pauseBtn.addEventListener('click',pauseGame);
resumeBtn.addEventListener('click',resumeGame);
// setInterval (run infinite);
// setTimeout(run onetime);