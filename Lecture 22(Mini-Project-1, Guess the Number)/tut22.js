const prompt =require("prompt-sync")();

console.log("---GUESS THE NUMBER GAME---")
// let num = getRandomInt(1,21)
let num = Math.random() * 20 //it gives number between 1-20
num = Number.parseInt(num) //it will convert the fractional number to without fraction , as by default math.random() generates fractional values.
console.log(num)
let guess 
let count = 0


while(guess!=num)
{
    guess = prompt("Enter The Number")
    if(guess>num)
    {
        console.log("You entered a greater number,TRY AGAIN!")
        count ++
        console.log(count)
    }
    else if(guess<num)
    {
        console.log("You entered a lesser number,TRY AGAIN!")
        count ++
        console.log(count)
    }
    else
    {
        count ++
    }
}
if(count<=50)
{
    console.log("YOU WIN")
    console.log("You took ",count," tries")
    console.log("Your score is ",100-count)
}
else
{
    console.log("YOU TOOK TOO MANY TRIES, YOU LOOSE")
    console.log("You took",count," tries")
}

