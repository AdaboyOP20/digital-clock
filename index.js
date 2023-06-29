

function RunClock(){
    var date = new Date();
    var h = date.getHours();
    var s = date.getSeconds();
    var m = date.getMinutes();
    if(h > 12){
       h = h - 12;
       s = s + "pm";
    }
    else{
        s = s + "pm";
    }

    var actTime = h +":"+m+":"+s;
    document.getElementById('digi').textContent = actTime;
    my_interval = setInterval(RunClock, 1000);
}

RunClock();