alert("This is alert message")
alert("Enter the number")
let value = prompt("Enter Here", "23")
value = Number.parseInt(value)
alert("You entered value of type " + (typeof value))

let confirm_var = confirm("Do want to write this value on the page?")
if(confirm_var) //bydefault true.
{
    document.write(value)
}
else
{
    document.write("ITS YOU CHOICE , NOT TO WRITE.")
}