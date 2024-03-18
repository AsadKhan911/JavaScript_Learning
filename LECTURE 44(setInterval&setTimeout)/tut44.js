document.write("Asad")
let a = setTimeout(() => {
    alert("I am inside setTimeout")
}, 4000);
console.log(a)

let b = prompt("do u want to run the settimeout?Y/N")
if(b=='N')
{
    clearTimeout(a)
}
else
{
    console.log(a)
}

const sum =  (a,b) => {
    console.log("Yes i am running" + (a+b))
    a + b
}
setTimeout(sum, 1500 , 1 , 2)


// let c = setInterval(() => {
//     alert("SetInterval")
// }, 2000);

// console.log(c)

const multiply = (a,b) => {
    alert("Yes I am multiply" + (a*b))
    a*b
}

setTimeout(multiply,1500,2,2)