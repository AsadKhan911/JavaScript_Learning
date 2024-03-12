let id = document.getElementById("id1")
console.log(id)

console.log(id.matches(".class"))
console.log(id.matches(".box"))

let spanid = document.getElementById("spanid")
console.log(spanid.closest(".container"))

console.log(id.contains(spanid)) //return true as spanid is inside id1
console.log(spanid.contains(spanid)) //for this it will return true as well.