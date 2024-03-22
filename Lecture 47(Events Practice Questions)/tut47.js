//1
// let a = document.getElementsByClassName('btn1')[0]

// a.onclick = () => {
//     alert("Button 1 is clicked")
// }

// let b = document.getElementsByClassName('btn2')[0]

// b.onclick = () => {
//     alert("Button 2 is clicked")
// }

// let c = document.getElementsByClassName('btn3')[0]

// c.onclick = () => {
//     alert("Button 3 is clicked")
// }

//Q3
//using event listener or simple events.
// let a = document.getElementById('fb')
// a.addEventListener("click" , function() {
//     window.open("https://www.instagram.com" , "_blank") //used to open in a new window
// })

// let b = document.getElementById('google')
// b.onclick = () => {
//     window.location = "https://www.google.com"
// }

// let c = document.getElementById('twitter')
// c.addEventListener("click" , function() {
//     window.location = "https://www.twitter.com"
// })

//Q5
div1 = document.getElementById('div1')

setInterval( () => {div1.classList.toggle("white")} , 800);


