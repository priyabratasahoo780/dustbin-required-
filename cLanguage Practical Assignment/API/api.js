// var btn = document.querySelector("#loadPostsBtn");
// var h1 = document.querySelector("h1");
// var box = document.querySelector('.box');
// var index = -1;
// var id = null;
// btn.addEventListener('click', () => {
// var btn = document.querySelector("#loadPostsBtn");
// var h1 = document.querySelector("h1");
// var img = document.querySelector("img");
// var index = -1;
// var id = null;
// btn.addEventListener("click", () => {
//   setInterval(() => {
//     fetch("https://dog.ceo/api/breeds/image/random") // DO NOT USE SEMICOLON
//       .then((response) => response.json())
//       .then((data) => {
//         img.setAttribute("src", data.message);
//       })
//       .catch((error) => console.log(error));
//   }, 1000);
// });
// // fetch api ...
// fetch("https://dummyjson.com/products")
// .then((response) => response.json())
// .then((data) => {
// // task -> array (arr) -> data store -> one by one index print -> 5s -> setInterval(infinte ca
// var arr = data.products;
// id = setInterval(() =>{
// ++index;
// var red = Math. floor(Math.random() * 256);
// var green = Math. floor(Math.random() * 256);
// var blue = Math. floor(Math.random() * 256);

// console.log(arr[index]);
// h1. textContent = arr[index].discountPercentage;
// h1.style.color = `rgb(${red}, ${green}, ${blue})`;
// id1.textContent = "ID :" + arr[index]
// box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// if (index == 29) {
// clearInterval(id);
// }
// }, 3000);
// // console.log(arr);
// // h1.textContent = arr[27].description;
// })
// })

// var btn = document.querySelector("#loadPostsBtn");
// var h1 = document.querySelector("h1");
// var img = document.querySelector("img");
// var index = -1;
// var id = null;
// btn.addEventListener("click", () => {
//   setInterval(() => {
//     fetch("https://dog.ceo/api/breeds/image/random")
//       .then((response) => response.json())
//       .then((data) => {
//         img.setAttribute("src", data.message);
//       })
//       .catch((error) => console.log(error));
//  },1000);
// });
// var btn = document.querySelector("#loadPostsBtn");
// // Removed h1 selector because it doesn't exist in your active HTML
// var img = document.querySelector("img");

// // We need this variable to store the timer ID so we can stop it later
// var id = null; 

// btn.addEventListener("click", () => {
//   // FIX: Check if an interval is already running. 
//   // If yes, stop it before starting a new one.
//   if (id) {
//     clearInterval(id);
//   }

//   // Start the new interval and save the ID
//   id = setInterval(() => {
//     fetch("https://dog.ceo/api/breeds/image/random")
//       .then((response) => response.json())
//       .then((data) => {
//         img.setAttribute("src", data.message);
//       })
//       .catch((error) => console.log(error));
//   }, 1000);
// });

var btn = document.querySelector("#loadPostsBtn");
var img = document.querySelector("img");
var id = null; 

// 1. Logic Fix: Extract the fetch function so it can be reused
function fetchDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        img.style.display = "block"; // Ensure image is visible
        img.setAttribute("src", data.message);
      })
      .catch((error) => console.log(error));
}

btn.addEventListener("click", () => {
  // Clear existing timer
  if (id) {
    clearInterval(id);
  }

  // 2. Logic Fix: Call the function IMMEDIATELY so the user doesn't wait
  fetchDog();

  // Start the interval for subsequent updates
  id = setInterval(() => {
    fetchDog();
  }, 1000);
});

themealdb.com/api/json/v1/1/categories.php

var btn = document.querySelector(".btn");
var para = document.querySelector('p');
var container = document.querySelector(".image");

function loadApi(){
    fetch('https://www.themdb.com/api/json/v1/1/categories.php')
    .then((response)=> response.json())
    .then((data)=>{
        console.log(data);
        para.textContent = data.categories[7].strCategoryDescription;
        para.style.color = "red";
    })
    .catch((error)=>{
        var img = document.createElement('img');
        img.setAttribute("src", "https://www.themealdb.com/images/category/pork.png");

        container.appendChild(img);
        para.textContent = "check you're given url";
        para.style.color = "green";
    })
}
btn.addEventListener("click", loadApi);