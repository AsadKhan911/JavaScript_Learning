console.log("anything")
console.error("this is an error")

const x = 5;

console.assert(x > 0, 'Assertion failed: x should be greater than 0');

// The following line will not be executed if the assertion fails
console.log('This line will be executed only if x is greater than 0');

// console.clear()

const obj = {
    a:1,
    b:2,
    c:3,
    d:4
}
console.table(obj)

console.warn("Hey please don't miss 5 time prayers.")

console.time("forLoop")
for(let i =0;i<=5;i++)
{
    console.log("a")
}
console.timeEnd("forLoop")

console.time("While")
let j=0
while(j<=5)
{
    console.log("a")
    j++;
}
console.timeEnd("While")