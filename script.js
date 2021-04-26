var count = 0;
var buttons = document.querySelectorAll(".btn");
var value = document.querySelector("#value");



function clicked(event) {
    var action = event.currentTarget.classList;
    if(action.contains('decrease')) {
        count--;
    } else if (action.contains('increase')) {
        count++;
    }else {
        count = 0;
    }
    return value.textContent =count;
}

buttons.forEach(function(btn) {
    btn.addEventListener('click', clicked);
    } )
