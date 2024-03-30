let p1 = new Promise((resolve,reject) => {
    console.log("Promise1 is pending")
    setTimeout(() => { //set time is used to just show when we wait for some data to come then how it behaves.
        console.log("I am a promise1 and I am filfulled")
        resolve("P1 is filfulled") 
    }, 4000);
})

let p2 = new Promise((resolve,reject) => {
    console.log("Promise2 is pending")
    setTimeout(() => {
        // console.log("I am a promise2 and I am rejected")
        reject(new Error("error in p2"))
    }, 4000);
})

// p1.then((value)=>{ //combine code for .then()&.catch()
//     console.log(value)
// },
// (error)=>{
//     console.log(error)
// })

p1.then((value)=>{
    console.log(value)
})

p2.catch((error)=>{ //now there will not be error in console in red , as we catch the error.
    console.log(error)
})
// p1.then((value)=>{
//     console.log(value)
// })
// p1.catch((error)=>{
//     console.log(error)
// })

// p2.then((value)=>{
//     console.log(value)
// })
// p2.catch((error)=>{
//     console.log(error)
// })
