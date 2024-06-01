// function add(a, b, cb){
//     let result = a+b
//     cb(result)
// }

// add(400,10, (result)=> console.log(result))

function sayHello(a,b, cbfn){
    let multiply = "hey there!"
    cbfn(multiply);
}
sayHello(5,4, (multiply)=> console.log(multiply))
