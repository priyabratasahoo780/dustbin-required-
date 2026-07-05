newFunction(); 

function newFunction() {
    let btn = document.querySelector(".btn");
    let para = document.querySelector('.para');
    var img = document.querySelector('.img');

    btn.addEventListener("click", () => {
        fetch("https://api.chucknorris.io/jokes/random")
            .then(response => response.json())
            .then((data) => {
                para.textContent = data.value;
                img.setAttribute("src", data.icon_url);
            });
    });
}
