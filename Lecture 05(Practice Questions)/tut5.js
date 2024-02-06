//Q1
let aa = "Asad"
let b = 911
console.log(aa+b)
//OR
aa = "Asad"
b = 911
let c=aa+b
console.log(c)

//Q2
console.log(typeof(aa+b))
//OR
console.log(typeof c)

//Q3
const obj = {
    name: "Asad", //you can also write name,in double quotes no matter its your choice,result will be same.
    no: 1,
    condition: false
}
// obj = 12  //i comment it because it will throw an error , as we cant change it.

obj.name = 'new value1' //but we can change the inside values of const object like this
obj.no = 'new value2'
console.log(obj)

//Q4
obj['newkey'] = "Khan" //added new key to the object
obj['no'] = 'newvalue3' //again changed the existing key to newvalue3
console.log(obj)

//Q5
const dict = {
    Happy: "Feeling or showing pleasure, contentment, or joy.",
    Big: " Of considerable size, extent, or intensity.",
    Fast: "Moving or capable of moving quickly.",
    Bright: "Giving out or reflecting a lot of light; shining.",
    Friend: "typically exclusive of sexual or family relations."
}
console.log(dict.Fast)