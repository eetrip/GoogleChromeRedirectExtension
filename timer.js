var timeLeft = 5;
var elem = document.getElementById('some_div');
var timerId = setInterval(countdown, 1000);


function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        
    } else {
        document.title = elem.innerHTML = 'countdown ' + timeLeft + ' seconds';
        timeLeft--;
    }
}
