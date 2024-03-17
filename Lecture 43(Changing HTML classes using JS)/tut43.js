first.className = "red text-dark"

console.log(first.classList)

first.classList.remove("text-dark")

first.classList.add("yellow") //it now add this class aswell

first.classList.toggle("yellow") //here it will remove yellow

first.classList.toggle("yellow") //here it will again add yellow

console.log(first.classList.contains("red")) //it gives a boolean value