let timer = true;
let flag = 1;
let sec = 0;
let min = 0;
let hr = 0;
let counter = 0;
let hour = document.querySelector('.hr');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
let pre = document.getElementById('pre');

function start() {
    if (timer == true) {
        pre.style.display = "none";
        hour.style.display = "inline-block";
        minute.style.display = "inline-block";
        second.style.display = "inline-block";

        stopwatch();
        document.querySelector('.start').disabled = true;
        document.querySelector('.stop').disabled = false;
        document.querySelector('.pause').disabled = false;
    } else {
        timer = true;
        stopwatch();
        pre.style.display = "none";
        hour.style.display = "inline-block";
        minute.style.display = "inline-block";
        second.style.display = "inline-block";
        document.querySelector('.start').disabled = true;
        document.querySelector('.pause').disabled = false;
        document.querySelector('.stop').disabled = false;

    }
}

// function play() {
//     timer = true;
//     stopwatch();
//     let playbtn = document.querySelector('.play');
//     let pausebtn = document.querySelector('.pause');
//     playbtn.style.display = "none";
//     pausebtn.style.display = "inline-block";
//     playbtn.disabled = true;
// }

function pause() {
    timer = false;

    if (flag == 1) {
        let pausebtn = document.querySelector('.pause');
        pausebtn.innerHTML = "continue";
        flag = 0;

    } else {
        let pausebtn = document.querySelector('.pause');
        pausebtn.innerHTML = "pause";
        timer = true;
        stopwatch();
        flag = 1;

    }



}
function reset() {
    timer = false
    document.querySelector('.pause').disabled = true;
    document.querySelector('.pause').innerHTML = "pause"

    document.querySelector('.stop').disabled = true;
    document.querySelector('.start').disabled = false;
    pre.style.display = "block";
    hour.style.display = "none";
    minute.style.display = "none";
    second.style.display = "none";
    hour.innerHTML = "00:";
    minute.innerHTML = "00:";
    second.innerHTML = "00"
    sec = 0;
    min = 0;
    hr = 0;
    counter = 0;
}


function stopwatch() {
    // let hour = document.querySelector('.hr');
    // let minute = document.querySelector('.minute');
    // let second = document.querySelector('.second');

    if (timer == true) {
        counter = counter + 1;
        if (sec < 10) {
            second.innerHTML = "0" + sec;
        }
        if (min < 10) {
            minute.innerHTML = "0" + min + ":";
        }
        if (hr < 10) {
            hour.innerHTML = "0" + hr + ":";
        } if (sec >= 10) {
            second.innerHTML = sec;
        } if (min >= 10) {
            minute.innerHTML = min + ":";
        } if (hr >= 10) {
            hour.innerHTML = hr + ":";
        }

        if (counter == 10) {
            sec = sec + 1;
            counter = 0;
        }

        if (sec == 60) {
            min++;
            sec = 0;
        }
        if (min == 60) {
            hr++;
            minute = 0;
        }

        setTimeout("stopwatch()", 100);
    }
}