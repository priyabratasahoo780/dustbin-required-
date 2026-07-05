var btn = document.querySelector(".btn");
var para = document.querySelector('p');
var container = document.querySelector(".card");

function createCard(data){
    console.log(data);
    var div = document.createElement('div');

var img = document.createElement('img');
img.setAttribute("src", "https://www.themealdb.com/images/category/beef.png")

var p1 = document.createElement('p');
p1.textContent = `id: ${data.idcategory}`;

var p2 = document.createElement('p');
p2.textContent = `meal: ${data.strCategory}`;

var p3 = document.createElement('p');
p3.textContent = `description: ${data.strCategoryDescription}`;

div.appendChild(img);
div.appendChild(p1);
div.appendChild(p2);
div.appendChild(p3);

container.appendChild(div);
console.log(div);
}

function loadApi(){
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
.then((response) => response.json())
.then((data) => { 
    for (let i = 0; i <= 13; i++){
createCard(data.categories[i])
}
})
}
btn.addEventListener("click",loadApi);

// https://www.themealdb.com/api.php