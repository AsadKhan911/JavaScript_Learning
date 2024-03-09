//Change the card title to red.

// let title = document.body.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.firstChild
// title.style.color = 'red'

// let title = document.getElementsByClassName("card-title")[0]
// title.style.color = "red"

// let title = document.getElementById("title-card")
// title.style.color = "blue"

// let title = document.getElementById("divcard")
// title.style.color = "blue"

let title = document.querySelectorAll(".card-title")
title[0].style.color = "red"
title[1].style.color = "yellow"
title[2].style.color = "blue"

let QS = document.querySelector(".GSW") //class name for GO SOME WHERE Paragraph.
QS.style.color = "red"
QS.style.background = "black" //as we can see it only selects the first element of same selector , infact there are three elements with this selector.

console.log(document.getElementsByTagName("a")) //it will return the all element of anchor tag (a-tag)
console.log(document.querySelector(".card").getElementsByTagName("a")) //it will return anchor tag of inside the card class

console.log(document.getElementsByName("search")) //it will return according to what is in name attribute such as <input name=search> etc