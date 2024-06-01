
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "javascript", password: "123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumePromiseFive()

//The async keyword allows the use of await inside the function, enabling asynchronous code to be written in a synchronous style.
//Inside the function, a try...catch block is used to handle the promise
// await is used to pause the execution of consumePromiseFive() until promiseFive is settled (either resolved or rejected).
// If promiseFive is resolved, its value is assigned to response.
// If promiseFive is rejected, an error is thrown and the control is passed to the catch block.
