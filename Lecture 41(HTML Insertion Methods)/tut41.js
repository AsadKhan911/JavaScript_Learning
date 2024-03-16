let a = document.getElementsByTagName('div')[0]
a.innerHTML = a.innerHTML + '<h1>I am inserted heading</h1>'

let newdiv = document.createElement('div')
newdiv.innerHTML = '<h1>CREATE ELEMENT + APPEND</h1>'
a.appendChild(newdiv)

newdiv = document.createElement('div')
newdiv.innerHTML = '<h1>PREPEND</h1>'
a.prepend(newdiv) //prepend

a.replaceWith(newdiv) //lol this will replace whole div in var 'a' with div in var 'newdiv'