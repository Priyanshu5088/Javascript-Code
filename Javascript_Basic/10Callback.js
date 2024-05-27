function calculateArithmetic(a , b  , arithmeticfun){
    const ans = arithmeticfun(a,b);
    return ans;
}

// it is an arrithmetic func. as well
function sum(a,b){
    return a + b;
}

const value = calculateArithmetic(10 , 2 , sum)
console.log(value)

//When you call calculateArithmetic(10, 2, sum), the following happens inside the function:
//calculateArithmetic is invoked with a = 10, b = 2, and arithmeticfun = sum.


//Substituting the Values:
//arithmeticfun(a, b) becomes sum(10, 2).
//sum(10, 2) is executed, which returns 10 + 2 = 12


// // or an simple approach
// function calculateArithmetic(a, b, arithmeticfun){
//     let sum = a + b
//     arithmeticfun(sum) 
// }

// calculateArithmetic(24, 12, (result) => console.log(result))

// arithmeticfun is actually (result) => console.log(result)