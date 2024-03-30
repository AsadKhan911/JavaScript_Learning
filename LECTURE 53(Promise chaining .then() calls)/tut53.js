// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Resolved after 2 seconds")
//         resolve(10)
//     }, 2000);
// })

// p1.then((value)=>{
//     console.log(value)
//     let p2 = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Promise 2")
//         }, 2000);
//     })
//     return p2
// }).then((value)=>{ //now it contains the value of p2 promise
//     console.log("2nd last "+value)
//     return 2 //it donot returns a promise but when we will use .then after it , it will consider it as a promise and gives its value to .then() parameter
// }).then((value)=>{
//     console.log("LAST and value is:" +value)
// })