// var currentScore = document.querySelector('#currentScore');
// var highScore = document.querySelector('#highScore');
// var timer = document.querySelector('#timer');
// var clickButton = document.querySelector('#clickButton');
// var startButton = document.querySelector('#startBtton');
// var statusMessage = document.querySelector('#statusMessage');

// var current = 0;
// var high = 0;
// var time1 = 10;
// var track = false;
// function loadContent(){
//     dataload();
//     displayMessage();
// }
// function dataload(){
//     var temp =localStorage.getItem('highScore');
//     if(temp != null){
//         high =parseInt(temp);
//     }
//     else{
//         high = 0;
//     }
// };
// function displayMessage(){
   
//     currentScore.textContent = current;
//     highScore.textContent = high;
//     timer.textContent = time1;
// };
//  function statuMsg(msg){
//      statusMessage.textContent = msg;
//  }
// function startGame(){
//     track = true;
//     clickButton.disabled = false;
//     statuMsg("Game is started");
// }

// function clickMe(){
//     if(track){
//         current++;
//         displayMessage();
//     }
// }


// loadContent();



// startButton.addEventListener('click',startGame);
// clickButton.addEventListener('click',clickMe);
// var player1 = prompt("enter your name:");
// console.log(player1);


// var player  = prompt("Enter your Name");
var currentScore = document.querySelector('#currentScore');
var highScore = document.querySelector('#highScore');
var timer = document.querySelector('#timer');
var clickButton = document.querySelector('#clickButton');
var startButton = document.querySelector('#startButton');
var statusMessage = document.querySelector('#statusMessage');
var pauseButton = document.querySelector('#pauseButton');
var resetButton = document.querySelector('#resetButton');
var resumeButton = document.querySelector('#resumeButton');
var body = document.querySelector('.bodys');
var current = 0 ; //btn clicked --> data stored 
var high = 0 ; // high score -> updation
var time1 = 10 ; // time -> updation
var track = false ; 
var idTrack = null; // time-> control
var video = document.querySelector('.videos');
var game = document.querySelector('.game');
// var age = prompt("Enter your age");
age = parseInt(age, 10);
if(age < 18){
   game.style.display = 'none';
   body.style.backgroundColor = "red";
                                                     }
function loadContent (){
    dataLoad();
    displayMessage();
};


function dataLoad (){
    var temp = localStorage.getItem('highScore');// first time -> retuns null , otherwise -> data
    if (temp != null){
    high = parseInt(temp) ; // explicit type conversion
    }
    else{
        high = 0;
    }
};

function displayMessage(){
    currentScore.textContent = current ;
    highScore.textContent = high ;
    timer.textContent = time1 ;
    if(currentScore >= 20){
       currentScore.style.color ="red";
    }
};

function statusMsg(msg) {   
    statusMessage.textContent = msg;
      if(currentScore >= 20){
       currentScore.style.color ="red";
    }
}
 function endGame(){
    clearInterval(idTrack);
    track=false;
    clickButton.disabled = true;
    startButton.disabled = false;
    if(current > high){
        localStorage.setItem('highScore', current);
        high = current;
       alert(`congratulation  ${player} you Win`);
       video.style.display="block";        // console.log(`Congratulation ${player}`);
        // body.style.backgroundColor='green';
        displayMessage();
         
        statusMsg("you're current score is higher than previous one");
        body.style.backgroundColor='red';
    }
    else{
        statusMsg("you're current score is less compare to previous one");

}
 }
    
 
function startGame (){
    time1 =10;
    current = 0;
    clickButton.disabled = true;
    startButton.disabled = false;
    track = true;
    statusMsg("game is started");
   idTrack = setInterval(function(){
    time1--;
    
    if(time1<=0){
       endGame();
    }
    displayMessage();
   },1000);


}                                                                          

function clickMe (){
    if (track){
        current++;
        displayMessage();
    }
}

function newGame(){
    current = 0;
    high = 0;
    localStorage.clear();
     time1=10;
  displayMessage();
      statusMsg("Start a New Game");
    
}

function pauseGame(){
    clickButton.disabled=true;
    clearInterval(idTrack);
    startButton.disabled = false;
    resumeButton.style.display = 'block';
     displayMessage();
      statusMsg("Click the Start Game");
}
function resumeGame(){
     clickButton.disabled=false;
     startButton.disabled=true;
     idTrack = setInterval(function(){
    time1--;
    if(time1<=0){
       endGame();
    }
    displayMessage();
   },1000);

}

loadContent();

startButton.addEventListener('click', startGame);

clickButton.addEventListener('click',clickMe);
resetButton.addEventListener('click',newGame);
pauseButton.addEventListener('click',pauseGame);
resumeButton.addEventListener('click',resumeGame);