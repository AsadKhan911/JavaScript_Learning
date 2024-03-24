

let h = document.getElementById("hours")
let m = document.getElementById("minutes")
let s = document.getElementById("seconds")
let AmPm = document.getElementById("AmPm")

let amPm = hours >= 12 ? 'PM' : 'AM';

setInterval(() => {



    let date = new Date()
let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()

let h = document.getElementById("hours")
let m = document.getElementById("minutes")
let s = document.getElementById("seconds")
    h.innerHTML = hours
    m.innerHTML =  minutes
    s.innerHTML = seconds
    AmPm.innerHTML = amPm
}, 1000);
