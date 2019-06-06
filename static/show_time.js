var hours = 1;
var minutes = 0;
var seconds = 5;

function showTime() {
    var shown_hours   = " ";
    var shown_minutes = " ";
    var shown_seconds = " ";

    if (hours == 0) {
        shown_hours = "00";
    } else if (hours < 10 && hours.toString()[0] != "0") {
        shown_hours = "0" + hours;
    } else {
        shown_hours = hours.toString();
    }
    
    if (minutes == 0) {
        shown_minutes = "00";
    } else if (minutes < 10 && minutes.toString()[0] != "0") {
        shown_minutes = "0" + minutes;
    } else {
        shown_minutes = minutes.toString();
    }

    if (seconds == 0) {
        shown_seconds = "00";
    }
    else if (seconds < 10 && seconds.toString()[0] != "0") {
        shown_seconds = "0" + seconds;
    } else {
        shown_seconds = seconds.toString();
    }
    
    var time = shown_hours + ":" + shown_minutes + ":" + shown_seconds;
    document.getElementById("MyClockDisplay").innerText = time;
}

var countdown = setInterval(function() {

    if (seconds > 0) {
        --seconds;
    } else if (seconds == 0 && minutes > 0) {
        seconds = 59;
        --minutes;
    } else if (seconds == 0 && minutes == 0 && hours > 0) {
        seconds = 59;
        minutes = 59;
        --hours;
    }
    
    showTime();

}, 1000);