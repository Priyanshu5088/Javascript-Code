//receiving some datas

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Priyanshu", email: "chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})