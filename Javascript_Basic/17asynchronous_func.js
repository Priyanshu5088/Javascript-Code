function findSum(n){
    let ans = 0;
    for(let i=0; i<=n; i++){
        ans += i;
    }
    return ans;
}

function findSumTill100(){
    console.log(findSum(100));
}

//function to make it synchronous where it sleeps and then start executing another func 
function syncsleep(){
    let a = 1;
    for(let i=0; i<=1000000000; i++){
        a++;
    }
}


// syncsleep();
// findSumTill100();

//asynchronous func
setTimeout(findSumTill100, 1000)
    console.log("Hello World")