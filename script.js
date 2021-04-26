var count = 0;
var buttons = document.querySelectorAll(".btn");
var value = document.querySelector("#value");


buttons.forEach(function(btn) {
    btn.addEventListener('click', clicked);
    } )


function clicked(clicked) {
    console.log(clicked.currentTarget.classList);
}