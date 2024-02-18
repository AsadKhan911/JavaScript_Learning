//Q1

console.log("har\"".length)

//Q2
//INCLUDE FUNCTION:
let senetence = "This is a cool sentence"
let word  = "cool"
// console.log(senetence.includes(word))
console.log(`The word ${word} ${senetence.includes(word) ? 'is' : 'is not'} in the sentence `)

//STARTS WITH FUNCTION
let name1 = "Asad Khan"
// console.log(name1.startsWith("Asad"))
console.log(`The name ${name1}, ${name1.startsWith("Asad") ? 'Starts' : 'Not Starts'} With Asad`)

//ENDS WITH FUNCTION
let name2 = "Asad Khan"
// console.log(name2.endsWith("Asad"))
console.log(`The name ${name2}, ${name2.endsWith("Asad") ? 'Ends' : 'Not Ends'} With Asad`)

//Q3
let str = "THIS IS A STRING"
console.log(str.toLowerCase())

//Q4
let str1 = "Please give RS 1000"
let amount = str1.slice(15)
console.log(amount)
//OR
let str2 = "Please give RS 1000"
let amount0 = str2.slice("Please give RS ".length)
console.log(amount0)

//Q5
let str3 = "Asad"
str3[3] = "B"
console.log(str3) //can't change because in js strings are immutable.




