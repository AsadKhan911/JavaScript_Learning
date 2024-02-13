const prompt =require("prompt-sync")();
//FUNCTIONS

//SIMPLE FUNCTIONS
function OnePlusAvg(x,y)
{
    return 1+(x+y)/2
}

//ARROW FUNCTIONS
const hello = ()=>
{
    console.log("HELLO")
}

let a=2
let b=3
let c=4

console.log("One plus avg of a and b is ", OnePlusAvg(a,b))
console.log("One plus avg of b and c is ", OnePlusAvg(b,c))
console.log("One plus avg of c and a is ", OnePlusAvg(c,a))

//OR

console.log(OnePlusAvg(1,2))

hello()