let arr = [1,2,4,5,7,8,12]
for(let i=0; i<arr.length; i++)
{
    console.log(arr[i])
}

arr.forEach((element) =>
{
    console.log(element*element)
})

//Array from
arr = "Asad"
let new_arr = Array.from(arr)
console.log(new_arr)


//FOR OF LOOP
let arr_1 = [1,2,4,5,7,8,12]
for(let items of arr_1)
{
    console.log(items)
}

//FOR IN LOOP
arr_1 = [1,2,4,5,7,8,12]
for(let items in arr_1)
{
    console.log(items)
}