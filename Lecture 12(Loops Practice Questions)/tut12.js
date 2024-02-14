const prompt =require("prompt-sync")();
//Q1
/*
let marks = {
    'Asad': 87,
    'Khan': 71,
    'Adil':82,
    'Affan':42
}

for(let i=0; i<Object.keys(marks).length; i++)
{
    console.log("Marks of student "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]])
}


//Q2
let marks = {
    'Asad': 87,
    'Khan': 71,
    'Adil':82,
    'Affan':42
}
for(let a in marks)
{
    console.log("Marks of "+a+" are "+marks[a])
}


//Q3

console.log("CORRECT NUMBER IS 5")
let num


while(num!=5)
{   
   num = prompt("ENTER CORRECT NUMBER")
   console.log("TRY AGAIN")
}
console.log("CORRECT")
*/

//Q4
const mean=(a,b,c,d,e) => { //ARROW FUNCTION
     return (a+b+c+d+e)/5
}

console.log("MEAN = "+mean(1,2,3,4,5))