// hour, minute and second calculation logic for clock hands  rotations

//12 hours = 360 deg
// 1 hour 360/12 = 30
// h hour = 30h + m/2

//60 min = 30
// 1 min = 30/60 = 1/2
// m min = (1/2) m

//60 min = 360 deg
// 1 min = 360/60 = 6 deg
// m min = 6m deg

// 60 sec = 360 deg
// 1 sec = 360/60 = 6deg
// s sec = 6s deg
let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    let date = new Date();
    // getting hour, min, sec from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * hh + mm/2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);
function gotoStopWatch(){
    window.location.href = "C://KhusraoAdil//LEARN//Projects//AnalogClock//stopwatch.html"
}
function gotoAnalogClock(){
    window.location.href = "C://KhusraoAdil//LEARN//Projects//AnalogClock//index.html"
}