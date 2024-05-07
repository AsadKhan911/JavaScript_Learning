let lines = ["Hacking Started...",
             "Initializing Data",
            "Connecting To Server One",
            "Connecting To server 2",
            "Connected Successfully",
            "Username Adil_Khan",
            "Trying To Brute Force",
            "Match not found",
            "Another 200k passwords tried",
            "Match Found",
            "Account Hacked With UserName Adil_Khan"]

const sleep = async (seconds) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(true)
        }, seconds * 1000);
    })
}

const func = async (lines)=>{
    await sleep(2)
    console.log(lines)
    let box = document.getElementById("box")
    box.innerHTML = box.innerHTML + lines + "<br>"
}

(async () =>{
    for(let i=0;i<lines.length;i++){
        await func(lines[i])
    }
})()

const print_inside= async (value)  =>{
     box.innerHTML = await func(value)
}