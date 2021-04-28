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


//BORED JS PART

const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
	span.addEventListener('click', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});
	
	// Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 750 * (idx+1))
});