//timer that counts upto 10seconds and increments every 10 ms
var count = 0;
setInterval(function () {
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