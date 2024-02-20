//DELETE OPERATOR
let arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ]
delete arr[0]
delete arr[3]
console.log(arr)
console.log(arr.length) //length will not affect by deleting an element from an array.

//CONCAT FUNCTION
let newarr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ]
let newarr1 = [10 , 22 , 23 , 34 , 45 , 56 , 67 , 78 ]
let c = newarr.concat(newarr1)
console.log(c)
console.log(c.length)
console.log(newarr) //original arrays will not be affected.

//SORT FUNCTION
let arr_sort = [100 , 22 , 29 , 19 , 500 , 56 , 87 , 1118 ]
arr_sort.sort()
console.log(arr_sort)

//COMPARE FUNCTION
let compare = ( a , b) => //for ascending order.
{
    return a - b
}

arr_sort.sort(compare)
console.log("ascending order array = ",arr_sort)

let compare_Descending = ( a , b) => //for descending order.
{
    return b - a
}

arr_sort.sort(compare_Descending)
console.log("descending order array = ",arr_sort)

//REVERSE FUNCTION
arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ]
console.log("Reverse array = ",arr.reverse())

//SPLICE FUNCTION
arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ]
let sa = arr.splice(2 , 3 , 30 , 40 , 50)
console.log("spliced array = ",arr) //modified array. changes the orignal array.
console.log(sa) //returns the deleted items array.
console.log(arr.length)

//SLICE FUNTION
arr = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ]
let s_arr = arr.slice(2) //index 2 to onwards end..no ending index given in this case.
console.log(s_arr)

let s_ending_arr = arr.slice(2,5) //index 2 to n-1 index. Means print till 4th index.
console.log(s_ending_arr)

