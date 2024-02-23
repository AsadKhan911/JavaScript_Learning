const prompt =require("prompt-sync")();
//Q1

let arr = [1,2,3,4,5,6,7,8]
let a = prompt("Enter a number")
a = Number.parseInt(a)
arr.push(a)
console.log(arr)

//Q2
arr = [1,2,3,4,5,6,7,8]
while(a!=0)
{
    a = prompt("Enter a number")
    a = Number.parseInt(a)
    arr.push(a)
}
console.log(arr)

//Q3
arr = [1,2,3,4,5,6,7,8,30,40,50,670,22,82,76,45,92,90,64,63]
let f_arr = arr.filter((a)=>{
    return a%10==0
})
console.log("filtered array =",f_arr)

//Q4 We will use map function here, which returns a string
arr = [1,2,3,4,5,6,7,8]
let n_arr = arr.map((b)=>{
    return b*b
})
console.log(n_arr)

//Q5
arr = [1,2,3,4,5,6,7,8,9.10]
let r_arr = arr.reduce((n1 , n2)=>{
    return n1*n2
})
console.log(r_arr)