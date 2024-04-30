//CUSTOM ERRORS ARE USED IN SCENARIO WHEN USER ENTER WRONG INFO THEN WE THROW SOME ERROR.
try {
    let b
    if(a>5)
    {
    throw new Error("This is thrown error") //or we can also make it refrence error , according to the situation.
    }
} catch (error) {
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}