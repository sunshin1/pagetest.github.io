function parseTime(time) {
    var hour = Math.floor(time / 3600);
    var minutes = Math.floor(time / 60 % 60);
    var s = Math.floor(time % 60);
    if (hour < 10) hour = "0" + hour;
    if (minutes < 10) minutes = "0" + minutes;
    if (s < 10) s = "0" + s;
    return (hour + ":" + minutes + ":" + s);
}