var days = 0;
var hours = 0;
var minutes = 0;
var seconds = 25;

function showTime(){

    if (hours == 0) {
        hours = "00";
    } else if (hours < 10 && hours.toString()[0] != "0") {
        hours = "0" + hours;
    } 
    
    if (minutes == 0) {
        minutes = "00";
    } else if (minutes < 10 && minutes.toString()[0] != "0") {
        minutes = "0" + minutes;
    }

    if (seconds == 0) {
        seconds = "00";
    }
    else if (seconds < 10 && seconds.toString()[0] != "0") {
        seconds = "0" + seconds;
    }
    
    var time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("MyClockDisplay").innerText = time;

}

var countdown = setInterval(function(){

    seconds = seconds - 1;
    showTime();

}, 1000);