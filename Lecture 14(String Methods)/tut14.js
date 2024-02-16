let name = "Asad"
console.log(name.length)

let name1 = "Asad Khan"
console.log(name1.length)
console.log(name1.toUpperCase())

let name2= "ASAD KHAN"
console.log(name1.toLowerCase())

let name3= "AsadAliKhan"
console.log(name3.slice(0,4))

let name4= "AsadAliKhan"
console.log(name4.slice(4).toLowerCase())

let name5= "AsadAliKhan"
console.log(name5.replace("Asad","Adil"))

let name6 = "Asad"
let name6_1 = "Adil"
console.log(name6.concat(" is a friend of " .concat(name6_1).concat("OK")))
//OR
console.log(name6," is a friend of ",name6_1,"OK")
//OR
console.log(name6 +" is a friend of " + name6_1)

let name7 = "    Asad       "
console.log(name7)
console.log(name7.trim())

let name8 = "Asad Shehzad Khan"
for(let i = 0; i<17; i++)
{
    console.log(i)
}

const STRING = "Asad Shehzad Khan";
let result = "";

for (let i = 0; i < STRING.length; i++) {
  result += STRING[i];
}

console.log(result);