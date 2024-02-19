let reg_no = [1,2,3,4 , null,false,"Not Present"]
console.log(reg_no)
console.log(reg_no[0])
console.log(reg_no[1])
console.log(reg_no[2])
console.log(reg_no[3])
console.log(reg_no[4])
console.log(reg_no[5])
console.log(reg_no[6])
console.log(reg_no[7]) //UNDEFINED BECAUSE INDEX 7 DOESNOT EXISTS.

reg_no[7]=5 //ADDING VALUE TO THE ARRAY
console.log(reg_no[7])
reg_no[1]=3 //UPDATING THE ARRAY
console.log(reg_no[1])

console.log("UPDATED ARRAY IS ",reg_no)

console.log("LENGTH = " ,reg_no.length)

console.log(typeof reg_no)

//QUICK QUIZ

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
for(let i = 0; i<arr.length; i++)
{
    console.log(arr[i])
}