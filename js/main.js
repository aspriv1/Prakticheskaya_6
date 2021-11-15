let day = document.getElementById("day");
let h = document.getElementById("h");
let m = document.getElementById("m");
let s = document.getElementById("s");

setInterval(tick,1000);

function tick()
{
    let d = new Date();

    var targetDate = new Date('01/01/2022').getTime();
    var curDate = new Date().getTime();
    var days = Math.round((curDate - targetDate) / 86400000);
    days = Math.abs(days);

    let hours = 23 - d.getHours();
    if (hours<10)
    {
        hours = "0" + hours;
    }
    let minute = 59 - d.getMinutes();
    if (minute<10)
    {
        minute = "0" + minute;
    }
    let seconds = 59 - d.getSeconds();
    if (seconds<10)
    {
        seconds = "0" + seconds;
    }
    
    day.innerHTML = days+":";
    h.innerHTML = hours+":";
    m.innerHTML = minute+":";
    s.innerHTML = seconds;
}

$(window).on("load", function()
{
    $("header").vide("video/Mountains_in_the_fog.mp4");
});