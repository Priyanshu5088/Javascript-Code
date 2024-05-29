function kiratsAsyncFunction(){
    let p = new Promise(function(resolve){
        resolve("hi there!")
    });
    return p;
}

async function main(){
    const value = await kiratsAsyncFunction();
    console.log(value)
}

main();