let p1 = new Promise((resolve,reject)=>{
    
    setTimeout(() => {
        resolve(1)
    }, 2000);
})
let p2 = new Promise((resolve,reject)=>{
    
    setTimeout(() => {
        // resolve(2)
        reject(new Error("promise got some error"))
    }, 1000);
})
let p3 = new Promise((resolve,reject)=>{ 
    setTimeout(() => {
        resolve(3)
    }, 3000);
})

// p1.then((value)=>{
//     console.log(value)
// })

// p2.then((value)=>{
//     console.log(value)
// })

// p3.then((value)=>{
//     console.log(value)
// })

// let promise_all = Promise.all([p1,p2,p3])
// let promise_all = Promise.allSettled([p1,p2,p3])
// let promise_all = Promise.race([p1,p2,p3]) //output 1
// let promise_all = Promise.any([p1,p2,p3]) //output 1
// let promise_all = Promise.resolve("hello resolved!")//output 1
// let promise_all = Promise.reject(new Error("error occoured"))//output 1

// promise_all.then((value)=>{
//     console.log(value)
// })





