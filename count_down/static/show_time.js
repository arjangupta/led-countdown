var hours = 1;
var minutes = 0;
var seconds = 0;

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
    document.getElementById("clockDisplay").innerText = time;
}

function startCountdown() {
    var socket = io.connect('http://' + document.domain + ':' + location.port);

    var spacebarToggle = false;
    var redLedOn = false;
    document.body.onkeyup = function(e) {
        if (e.keyCode == 32) { //32 is keyCode for spacebar
            spacebarToggle = !spacebarToggle; //start, pause, or resume the countdown
        } else if (e.keyCode == 13) {
            redLedOn = !redLedOn;
            socket.emit("toggleLED", redLedOn);
        }
    }

    var countdown = setInterval(function() {
        if (spacebarToggle) {
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
        }
    }, 1000);
}
