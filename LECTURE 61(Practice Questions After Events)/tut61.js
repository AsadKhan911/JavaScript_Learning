//Q1
// const loadScript = async (src) =>{
//     return new Promise ((resolve,reject)=>{

//     let script = document.createElement("script")
//     script.src = src
//     script.onload = () =>{
//         resolve(src + " Done Success!")
//     }
//     document.head.append(script)
// })
// }
// let a = loadScript("test.js")
// a.then((value)=>{
//     console.log(value)
// })

//Q2
// const main_m = async () =>{
//     let a = await loadScript("test.js") //loadscript is returning a promise and that promise is returning a resolve value which is scr + done success and that is added into a variable
//     console.log(a)
// }

// main_m()

//Q3
// const func = async () =>{
    // return new Promise ((resolve , reject)=>{
//         setTimeout(() => {
//           reject(new Error("Got some error"))
//         }, 3000);
//     })
// }

// let a = async () =>{
//     try {
//         let c = await func()
//         console.log(c)
//     } catch (error) {
//         console.log(error.message) //we will get the rejected value here now.
//     }
// }
// a()

const func_1 = async () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(1)
        }, 2000);
    })
}
const func_2 = async () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(2)
        }, 3000);
    })
}
const func_3 = async () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(3)
        }, 4000);
    })
}

const main_func = async () =>{
    console.time("run")
    let p1 = func_1()
    let p2 = func_2()
    let p3 = func_3()

    let finalP = await Promise.all([p1,p2,p3])
    console.log(finalP)
    console.timeEnd("run")
}

main_func()