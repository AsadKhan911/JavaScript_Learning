const prompt =require("prompt-sync")();
//Q1
// let a = prompt("Enter your age")
// if(a>=10&&a<=20)
// {
//     console.log("AGE LIES BETWEEN 10-20")
// }
// else
// {
//     console.log("NOT LIES BETWEEN 10-20")
// }

//Q2
// let a = prompt("ENTER YOUR AGE")

// switch(true){
//     case a>=10&& a<=20:
//         console.log("Your age lies between 10-20")
//         break;
    
//     case a>20:
//         console.log("Your age does not lies between 10-20")
//         break;

//     default:
//         console.log("SYNTAX ERROR")
// }

//Q3
let c = prompt("ENTER YOUR NUMBER")
if (c%2==0 && c%3==0)
{
    console.log("Number is divisble by 2&3 both")
}
else if(c%2==0 && c%3!=0)
{
    console.log("Number is only divisble by 2")
}
else if(c%2!=0 && c%3==0)
{
    console.log("Number is only divisble by 3")
}
else if(c%2!=0 && c%3!=0)
{
    console.log("Number is not divisble by 2&3 both")
}
else
{
    console.log("INVALID ENTRY")
}

//Q4
let d = prompt("ENTER YOUR NUMBER")
console.log(d>18? "You can drive" : "You cannot drive")