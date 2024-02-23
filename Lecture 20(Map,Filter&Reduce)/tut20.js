//MAP FUNCTION

let arr = [11,32,42,98]
let a = arr.map((value , index , array) =>
{
    console.log(value , index , array)
    return value + 1
})
console.log(a)

//FILTER FUNCTION
let arr1= [1,2,4,8,98,77,66,110,11,18,17,20,144]
let a2 = arr1.filter((a)=>{
    return a<20
})
console.log("filtered array = ",a2)

//REDUCE FUNCTION..callback function..A callback function in programming refers to a function that is passed as an argument to another function
let arr3 = [1, 2 , 3 , 4 , 5]
let newarr3 = arr3.reduce((h1 , h2)=>{
    return h1 + h2 
})
console.log(newarr3)

//OR
let arr4 = [1, 2 , 3 , 4 , 5]
const reduce_func =(h1 , h2) => 
h1 + h2 
let newarr4 = arr4.reduce(reduce_func)
console.log(newarr4)
