// btn.addEventListener('click' , function(e) {
//    alert("HELLO1")
// })

// btn.addEventListener('click' , function(e) {
//    alert("HELLO2")
// })

let x = function(e) {
    console.log(e)
    console.log(e.target) 
    console.log(e.clientX)
    console.log(e.clientY)
    //    alert("HELLO1")
     }

let y =  function(e) {
    console.log(e.target)
    console.log(e)
    //    alert("HELLO2")
     }

btn.addEventListener('click' , x )

btn.addEventListener('click' , y )

let a = prompt("What is your favourite number")
a = Number.parseInt(a)

if(a == 2)
{
    btn.removeEventListener('click' , x)
}
else
{
    btn.removeEventListener('click' , y)
}