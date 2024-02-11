const prompt =require("prompt-sync")();
/*
for (let a =0 ; a<10 ; a++)
{
    console.log(a)
}

//SUM
let sum = 0
let n = prompt("Enter the value of n")
n=Number.parseInt(n)
for(let i =0; i<n; i++)
{
    sum+=(i+1)
}
console.log("Sum of first "+n+" natural number is "+sum)

FICTORIAL
let fict=1
let n= prompt("Enter number to find its fictorial")
for(let i=1; i<=n; i++)
{
    fict=fict*i
}
console.log("Fictorial of "+n+" = "+fict)
*/

let obj = {
    asad: 90,
    khan:100,
    ali:50,
    shahid:48,
}
for(let a in obj)
{
    console.log("Marks of "+a+" are "+obj[a])
}