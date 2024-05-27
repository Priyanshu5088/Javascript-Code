function square(n){
    return n*n
}

function cube(n){
    return n*n*n
}

function sumOfsomething(a,b,callback){
    console.log(a)
    console.log(callback)
    const val1 = callback(a)
    const val2 = callback(b)
    return val1 + val2;
}

const ans = sumOfsomething(2,2,cube)
console.log(ans)