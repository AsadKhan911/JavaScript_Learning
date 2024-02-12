const prompt =require("prompt-sync")();

// let n=prompt("Enter the value of n")
// n=Number.parseInt(n)

// let i = 0;
// while(i<n)
// {
//     console.log(i+=1)
// }

//FICTORIAL USING WHILE LOOP

// let fict = 1;
// let num=prompt("Enter number to find its fictorial")

// let i=1
// while(i<=num)
// {
//     fict=fict*i
//     i++
// }
// console.log("Fictorial of "+num+" = "+fict)

// //Do-While Loop
// let n=prompt("Enter the value of n")
// n=Number.parseInt(n)

// let i = 0;
// do
// {
//     console.log(i)
//     i++
// }
// while(i<n)

//FICTORIAL USING DO-WHILE LOOP

let fict=1
let n = prompt("enter number for fictorial")
let i=1

do
{
    fict=fict*i
    i++
}
while(i<=n)
console.log("Fictorial of "+n+" = "+fict)

