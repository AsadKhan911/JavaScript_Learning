const changeBG = () => //this will run and change the color of the nav bar
{
    document.body.firstElementChild.style.background = "red" 
}

const changeBGByUser = (color) => //this function when call in console, will change the color of div of user prefernce when user put the color value in "" string
{
    document.body.firstElementChild.nextElementSibling.style.background = color
}

const changeLIcol = (color) => //used to change the color of li items.
{
    document.body.firstElementChild.firstElementChild.style.color = color
}
let a = document.body
console.log("First child of b is = ", a.firstChild)
console.log("First Element child of b is = ", a.firstElementChild)
