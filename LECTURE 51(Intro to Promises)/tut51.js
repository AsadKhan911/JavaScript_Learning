// // const prompt =require("prompt-sync")();

// //SYNCHRONOUS PROGRAMMING
// // let a = prompt("what is your name?")
// // let b = prompt("what is your age")
// // let c = prompt("what is your favourite color")
// // console.log(a + " is " + b + "years old and has " + c + " favourite color")

// //ASYNCHORONOUS PROGRAMMING
// // console.log("START")
// // setTimeout(() => {
// //     console.log("MY NAME IS FAMOUR")
// // }, 3000);
// // console.log("END")

// //CALL BACks

// function loadScript(src , callback) {
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = function () {
//         console.log("Script loaded with src:" + src)
//         callback(null , src);
//     }
//     script.onerror = function() {
//         console.log("Error loading script with src:"+src)
//         callback(new Error("src got some error"))
//     }
//     document.body.appendChild(script);
// }

// function hello (error , src) 
// {
//     if(error)
//     {
//         console.log(error)
//         return
//     }
//     console.log("HELLO " + src)
// }
// function bye (error, src)
// {
//     if(error)
//     {
//         console.log(error)
//         return
//     }
//     console.log("BYE " + src)
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" ,bye)

let promise = new Promise(function(resolve , reject){
    console.log("I am alert within a promise")
    resolve(56)
})

console.log("HELLO 1")

setTimeout(() => {
    console.log("HELLO 2")
}, 2000);

console.log("HELLO 3")
console.log(promise)