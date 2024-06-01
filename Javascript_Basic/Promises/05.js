//Using FETCH


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



// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log("E:", error);
//     }
// }


// getAllUsers()

//The await keyword is used to wait for the fetch function to complete
//By using await, the function pauses until the promise returned by fetch is resolved
//The response object has a method .json(), which also returns a promise that resolves to the result of parsing the response body text as JSON.
//await response.json() waits for this promise to resolve and stores the parsed data (which is an array of user objects) in the data variable


fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    return res.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))