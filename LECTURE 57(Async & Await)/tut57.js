async function Weather () {
let IslWeather = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("14 DEGREE")
    },3000)
})
let LahoreWeather = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("20 DEGREE")
    },6000)
})
    // IslWeather.then(alert)
    // LahoreWeather.then(alert)
    console.log("Fetching Islamabad Weater please wait!!!")
    let IslW = await IslWeather //first it will execute this , when it is filfulled then it will jump to the next line.
    console.log("Islamabad Weather is being fetched which is "+IslW)
    console.log("Fetching Lahore Weater please wait!!!")
    let LhrW = await LahoreWeather
    console.log("Lahore Weather is being fetched which is "+LhrW)
    return[IslW,LhrW]
}

console.log("Welcome to weather website!")

// Weather().then((value)=>{ //this will call function aswell print the resolved values at the same time.
//     console.log(value)
// })

const Weather2 = () =>{
    console.log("I am the second website of weather!!")
}

const fianl_func = async () =>{
    let a = await Weather()
    let b = await Weather2()     //both functions will run one by one.
}
fianl_func()