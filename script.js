function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
        new Date().getMinutes() * 60 +
        new Date().getHours() * 3600;
}

setInterval(function() {
    var time = getSecondsSinceStartOfDay();
    var hours = Math.floor(time/3600);
    var minutes = Math.floor(time/60);
    document.getElementById("hour").style.transform = `rotate(${30 * hours}deg)`;
    document.getElementById("minutes").style.transform = `rotate(${6 * minutes}deg)`;
    document.getElementById("seconds").style.transform = `rotate(${6 * time}deg)`;
}, 1000);