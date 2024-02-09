const prompt =require("prompt-sync")();


// let a = prompt("Whats your number")
// a = Number.parseInt(a) //use to convert string to integer
// console.log(typeof a)

// if(a<0)
// {
//     console.log("this is invalid num")
// }
// else if(a<9)
// {
//     console.log("you cant teach")
// }
// else if(a>9 && a<=18)
// {
//     console.log("you must be 20 to teach")
// }
// else
// {
//     console.log("You can teach as you are 20 or above")
// }

// let a = prompt("Enter your age");
// a = Number(a); // Convert the input to a number

// switch (true) {
//     case a < 0:
//         console.log("This is an invalid age");
//         break;
//     case a < 9:
//         console.log("You can't teach");
//         break;
//     case a >= 9 && a <= 18:
//         console.log("You must be 20 or above to teach");
//         break;
//     default:
//         console.log("You can teach, as you are 20 or above");
//}

let b = prompt("Enter your age")
console.log(b<18? "Not legal" : "Your age is legal")