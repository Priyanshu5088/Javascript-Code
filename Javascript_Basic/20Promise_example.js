function kiratsAsyncFunction(){
    let p = new Promise(function(resolve){
        setTimeout(resolve,2000)
    });
    return p;
}

kiratsAsyncFunction().then(function(){
    console.log("hi there");
})