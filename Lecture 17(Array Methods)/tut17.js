let arr = [1 , 2 , 3 , 4]
console.log(arr)
let newarr = arr.toString() //It converts the array to string.
console.log(newarr)
console.log(typeof newarr)

let newarr1 = arr.join("-")
console.log(newarr1)
console.log(typeof newarr1) //it also converts a array to string.

//  let r = arr.pop() //pop returns the popped element.
// console.log(arr , r)

//  let r = arr.push(5) //push returns the new array length.
// console.log(arr , r)

//  let r = arr.shift() //removes first element from an array and returns that element.
// console.log(r)

 let r = arr.unshift(10) //Inserts new elements at the start of an array, and returns the new length of the array.
console.log(r , arr)

