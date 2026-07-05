var paragraph = document.querySelector('.paragraph');
const obj1 = {backgroundColor:"red",
    fontSize:"2rem",
    fontFamily:"arial"
     
};
const obj2 ={
    backgroundColor:"green",
    fontFamily:"arial"
}

// Object.assign(paragraph.style,obj1);     
// var paracreate = document.createElement('p');
// // paracreate.textContent="hello world";
// // document.body.append(paracreate);
// // Object.assign(paracreate.style,obj2);  





var paracreate = document.createElement('h1');
var container =document.querySelector('div');
paracreate.textContent="HELLO FRIENDS";
container.appendChild(paracreate);


// var textchange = document.querySelector('.hero');
// var paracreate = document.createElement('h1');
// paracreate.textContent="HELLO world";

