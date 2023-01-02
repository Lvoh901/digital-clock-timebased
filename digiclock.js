window.addEventListener("DOMContentLoaded", showTime());

function showTime(){
    let date = new Date();

    // date.setTime(50000000000000);

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if (h==0){
        h=12;
    }

    if(h>11){
        h= h - 12;
        session="PM";
    }

    h = h < 10 ? (h = "0" + h) : h;
    m = m < 10 ? (m = "0" + m) : m;
    s = s < 10 ? (s = "0" + s) : s;

    //const time = h + ":" + m + ":" + s + "" + "|" + "" + session;
    const time = `${h}:${m}<small>.${s}|${session}</small>`
    //console.log(time);
    document.getElementById("DisplayClock").innerHTML=time;
    setTimeout(showTime, 1000)

    //Body Background
    let bg;

    const userName = "Elvis";
    const user = document.getElementById("User");
    //console.log(user);

    if(h < 8 && session === "AM") {
        bg =`url(../img/morning.jpg)`;
        user.innerHTML = `Good Morning ${userName}`;
    } else if(h < 12 && session === "PM"){
        bg = `url(../img/midday.jpg)`;
        user.innerHTML = `Good Afternoon ${userName}`;
    } else if(h < 12 && session === "PM"){
        bg = `url(../img/evening.jpg)`;
        user.innerHTML = `Good Evening ${userName}`;
    } else {
        bg = `url(../img/night)`;
        user.innerHTML = `Good Night ${userName}`;
    }

    //insert bg image
    const body=document.querySelector("body")

    body.style.background=`${bg} center/cover`;
}

document.querySelector(".focus-container input").addEventListener("keypress",function (event) {
    if(event.key=== "Enter"){
        const focus = document.querySelector(".focus-container input");
        document.querySelector(".focus-container").innerHTML=`<h6>TODAY:</h6><h1>${focus.value}</h1>`;
    }
});