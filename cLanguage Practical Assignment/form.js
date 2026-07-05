// let forms = document.querySelector('#userForm');
// let nameInput = document.querySelector('#name');
// let emailInput = document.querySelector('#email');
// let submitBtn = document.querySelector('#submmits');
// let submitBtns = document.querySelector('#submmit');
// let displayArea = document.querySelector('#displayArea');
// let displayAreas = document.querySelector('#displayAreas');
// let displayName = document.querySelector('#displayName');
// let displayEmail = document.querySelector('#displayEmail');

// function Inputbox(){
//     sessionStorage.setItem('names',nameInput.value);
//     sessionStorage.setItem('email',emailInput.value);
// }
// function Inputboxs(){
//     localStorage.setItem('names',nameInput.value);
//     localStorage.setItem('email',emailInput.value);
// }
// function outputbox(){
// sessionStorage.getItem('names');
// sessionStorage.getItem('email');
// }
// function outputboxs(){
// localStorage.getItem('names');
// localStorage.getItem('email');
// }
// function displayArea(){
//     displayArea.style.display = "block";
// displayName.textContent = nameInput.value;
// displayEmail.textContent = emailInput.value;
// }
// function displayAreas(){
//     displayArea.style.display = "block";
// displayName.textContent = nameInput.value;
// displayEmail.textContent = emailInput.value;
// }

// function checker(){
//     if(nameInput.value.trim() ==="" || emailInput.value.trim() ===""){
//         submitBtn.style.display ="none";
//     }
//     else{
//         submitBtn.style.display ="block";
//     }
// }
// function submitBtns (e){
//     e.preventDefault();
//     Inputbox();
//     outputbox();
//     displayAreas();
//     checker();
// }
// function submitBtnl (e){
//     e.preventDefault();
//     Inputbox();
//     outputbox();
//     displayAreas();
//     checker();
// }
// // let email = email.split("");
// // console.log(email);
// // let txt = emailInput.split("");
// // console.log(txt);

// // var j =9;
// // function emailCheck(){
// // for(let i = email.length-1; i>=(email.length - txt.length); --i){
// //     if(email[i] == txt[j]){
// //         console.log("both charater in the given array ar equal" + email[i] + " "+txt[j]);
// //         --j;
// //         break;
// //     }
// //     else{
// //         alert("the particular index contain a character which is not same" + email[i] +" "+txt[j]);
// //         break;
// //     }
// // }
// // };

// // emailCheck();
// nameInput.addEventListener('input', checker);
// emailInput.addEventListener('input', checker);
// submitBtn.addEventListener('click',submitBtns);
// submitBtns.addEventListener('click',submitBtnl);
// checker();

let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');

// --- YOUR VARIABLE NAMES ---
let submitBtn = document.querySelector('#submmits'); // Session Button
let submitBtns = document.querySelector('#submmit'); // Local Button

let displayArea = document.querySelector('#displayArea');   // Session Box
let displayAreas = document.querySelector('#displayAreas'); // Local Box

let displayName = document.querySelector('#displayName');
let displayEmail = document.querySelector('#displayEmail');

// New selectors for the second box
let displayNameLocal = document.querySelector('#displayNameLocal');
let displayEmailLocal = document.querySelector('#displayEmailLocal');


// --- SESSION STORAGE LOGIC ---
function Inputbox(){
    sessionStorage.setItem('names', nameInput.value);
    sessionStorage.setItem('email', emailInput.value);
}

function displayAreaFunc(){
    // Show the Session Box
    displayArea.style.display = "block";
    
    // Fill data
    displayName.textContent = sessionStorage.getItem('names');
    displayEmail.textContent = sessionStorage.getItem('email');
    
    // Note: We do NOT hide displayAreas here.
}

// --- LOCAL STORAGE LOGIC ---
function Inputboxs(){
    localStorage.setItem('names', nameInput.value);
    localStorage.setItem('email', emailInput.value);
}

function displayAreasFunc(){
    // Show the Local Box
    displayAreas.style.display = "block";
    
    // Fill data
    displayNameLocal.textContent = localStorage.getItem('names');
    displayEmailLocal.textContent = localStorage.getItem('email');
    
    // Note: We do NOT hide displayArea here.
}


// --- BUTTON CLICK HANDLERS ---

function clickSession(e){
    e.preventDefault();
    Inputbox();
    displayAreaFunc();
}

function clickLocal(e){
    e.preventDefault();
    Inputboxs();
    displayAreasFunc();
}


// --- CHECKER (Hides buttons if empty) ---
function checker(){
    if(nameInput.value.trim() === "" || emailInput.value.trim() === ""){
        submitBtn.style.display = "none";
        submitBtns.style.display = "none";
    }
    else{
        submitBtn.style.display = "block";
        submitBtns.style.display = "block";
    }
}

// --- EVENTS ---
nameInput.addEventListener('input', checker);
emailInput.addEventListener('input', checker);

submitBtn.addEventListener('click', clickSession);
submitBtns.addEventListener('click', clickLocal);

// Run at start
checker();