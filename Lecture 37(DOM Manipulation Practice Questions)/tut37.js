//Q1

// let nav = document.body.getElementsByClassName("list")[0]
// nav.style.color = "red"

//Q1
 nav = document.body.getElementsByTagName("ul")[0]
nav.firstElementChild.style.color = "red"

//Q3
let Q3 = document.body.getElementsByClassName("element")[0]
Q3.firstElementChild.style.color = "green"
Q3.lastElementChild.style.color = "green"

//Q4
Array.from(document.getElementsByTagName("li")).forEach((element) =>
{
    element.style.color = "cyan"
})