let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let para = document.querySelector('.para');
var id = null;
    
function generate(){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  para.style.color = `rgb(${r}, ${g}, ${b})`;
}

btn1.addEventListener('click', ()=>{
  id = setInterval(generate,1000);
});

btn2.addEventListener('click', ()=>{
  clearInterval(id);
  para.style.color = "black";
});

