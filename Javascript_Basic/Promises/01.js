const promiseOne = new Promise(function(resolve,reject){  // creation new promise
    // Do any asynchronous task
    setTimeout(function(){
        console.log('Async task 1 is complete');
        resolve() // connects with then
    }, 1000)
}) 

promiseOne.then(function(){
    console.log("Async 1 consumed");
})


//2nd promise

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 2 complete");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})