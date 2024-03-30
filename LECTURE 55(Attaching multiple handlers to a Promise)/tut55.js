let p1 = new Promise((resolve,reject)=>{
    console.log("I am not resolved yet!")
    setTimeout(() => {
        resolve(1)
    }, 2000);
})

p1.then((value)=>{
    console.log("This promise is resolved and it is first handler")
})

p1.then((value)=>{
    console.log("This promise is resolved and it is second handler!")
})