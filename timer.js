/*let counter = 0;
for (let i = 0; i < 10; i++)
    counter++
console.log(counter);

for (let i = 0;; i++) {
    console.log("loop, i = " + i);
    if (i >= 10)
        break;
};

let DigitalTimer = setInterval(changeColor, 10);

function setColor() {
    let myTimer = document.querySelectorAll("digits");
    myTimer.style.backgroundColor = "red";
}

var counter = {};
window.addEventListener("load", function () {
            // COUNTDOWN IN SECONDS
            counter.end = 10;

            counter.hr = document.getElementById("secondTens");
            counter.min = document.getElementById("secondOnes");
            counter.sec = document.getElementById("msHundreds");
            counter.sec = document.getElementById("msTens");*/

/*create a counter that counts upTo 10seconds*/

/*var count = setInterval(setColor, 1000);

function setColor() {
    var change = document.getElementsByClassName("digits");
    change.style.backgroundColor = "#fff";
}

/*document.getElementById("secondTens").innerHTML = '0';
document.getElementById("secondOnes").innerHTML = "0"
document.getElementById("msHundreds").innerHTML = "0"
document.getElementById("msTens").innerHTML = "0"

document.querySelector('.btn').addEventListener('click', function () {



            /*var count = 0;
            setInterval(function () {
                console.log(count += 10);
            }, 1000);

            counter.ten = document.getElementById("secondTens");
            counter.one = document.getElementById("secondOnes");
            counter.hun = document.getElementById("msHundreds");
            counter.tens = document.getElementById("msTens");

            /*var secs = counter.remain;
            var days = Math.floor(secs / 86400); // 1 day = 60 secs * 60 mins * 24 hrs
            secs -= days * 86400;
            var hours = Math.floor(secs / 3600); // 1 hr = 60 secs * 60 mins
            secs -= hours * 3600;
            var mins = Math.floor(secs / 60); // 1 min = 60 secs
            secs -= mins * 60;

            // Update HTML
            counter.day.innerHTML = days;
            counter.hr.innerHTML = hours;
            counter.min.innerHTML = mins;
            counter.sec.innerHTML = secs;
            }, 1000);
            }
            });*/

/*var counter = {};
window.addEventListener("load", function () {
    // COUNTDOWN IN SECONDS
    // EXAMPLE - 75 MINS = 75 X 60 = 4500 SECS
    counter.end = 10;*/
var count = 0;
windows.setInterval(function () {
    console.log(count += 10);
}, 1000);

// Get the containers
counter.hr = document.getElementById("secondTens");
counter.min = document.getElementById("secondOnes");
counter.sec = document.getElementById("msHundreds");
counter.mt = document.getElementById("msTens");


// Start if not past end date 
if (counter.end > 0) {
    counter.ticker = setInterval(function () {
        // Stop if passed end time
        counter.end--;
        if (counter.end <= 0) {
            clearInterval(counter.ticker);
            counter.end = 0;
        }

        // Calculate remaining time
        var secs = counter.end;
        var hrs = Math.floor(secs / 1000); // 1 hr = 60 secs X 60 mins
        secs -= hrs * 3600;
        var mins = Math.floor(secs / 60); // 1 min = 60 secs
        secs -= mins * 60;

        // Update HTML
        counter.hr.innerHTML = hrs;
        counter.min.innerHTML = mins;
        counter.sec.innerHTML = secs;
    }, 1000);
};