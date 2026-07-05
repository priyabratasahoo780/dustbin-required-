let box = document.querySelector(".box");
let change = document.querySelector("#change");

function colorChange(){
  let r =  Math.floor(Math.random()*256);
  let g =  Math.floor(Math.random()*256);
  let b =  Math.floor(Math.random()*256);
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

change.addEventListener('click',colorChange);