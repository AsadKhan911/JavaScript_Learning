const loadScript = (src) => {
    return new Promise((resolve,reject)=>{
        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src
        document.body.appendChild(script)
    
        script.onload = () =>{
            resolve(1)
        }
        script.onerror=()=>{
            reject(0)
        }
    }   
)}

let p1 = loadScript("script.js")

p1.then((value)=>{ //p1 contains a promise as in p1 we initialize a function which is returning a promise

    console.log("Script 1 loaded successfully with value: "+value)
    return loadScript("s.js")
    
}).then((value)=>{
    console.log("2nd Script loaded successfully with value: "+value)
}).catch((value)=>{

    console.log("Sorry having problem loading script with value: "+value)

})