const prompt =require("prompt-sync")();

function getRandomChoice()  { //function to randomly generate a value.
    const choices = ["snake", "water", "gun"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
let programChoice 
// console.log(programChoice)
 
 let programPoints = 0
 let userPoints = 0
 let turns = 0

 while(turns<=4){
   programChoice = getRandomChoice();
   // console.log(programChoice)
    let Userchoice  = prompt("Enter Snake , Water or Gun: ")
 if(Userchoice == 'gun' && programChoice == 'snake')
 {
    console.log("YOU GOT ONE POINT!")
    console.log("YOUR POINTS = ",userPoints)
    userPoints++
    turns++
 }
 else if(Userchoice == 'snake' && programChoice == 'gun' )
 {
    console.log("PROGRAM GETS ONE POINT!")
    programPoints++
    console.log("PROGRAM POINTS = ",programPoints)
    turns++
 }
 else if(Userchoice == 'water' && programChoice == 'gun')
 {
    console.log("YOU GOT ONE POINT!")
    userPoints++
    console.log("YOUR POINTS = ",userPoints)
    turns++
 }
 else if(Userchoice == 'gun' && programChoice == 'water')
 {
    console.log("PROGRAM GETS ONE POINT")
    programPoints++
    console.log("PROGRAM POINTS = ",programPoints)
    turns++
 }
 else if(Userchoice == 'snake' && programChoice == 'water')
 {
    console.log("YOU GOT ONE POINT!")
    userPoints++
    console.log("YOUR POINTS = ",userPoints)
    turns++
 }
 else if(Userchoice == 'water' && programChoice == 'snake')
 {
    console.log("PROGRAM GETS ONE POINT")
    programPoints++
    console.log("PROGRAM POINTS = ",programPoints)
    turns++
 }
 else
 {
    console.log("NO POINTS! DRAW")
 }
    // turns++
}

if(userPoints>programPoints)
{
   console.log("YOUR TOTAL POINTS = ",userPoints)
   console.log("PROGRAM TOTAL POINTS = ",programPoints)
   console.log("YOU WIN")
}
else if(userPoints<programPoints)
{
   console.log("YOUR TOTAL POINTS = ",userPoints)
   console.log("PROGRAM TOTAL POINTS = ",programPoints)
   console.log("YOU LOSE")
}
else
{
   console.log("MATCH DRAW")
}

