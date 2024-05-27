const fs = require('fs');

//my own async function
function kiratsReadFile(){
    return new Promise(function(resolve){
        console.log("inside promise")
        fs.readFile("file.txt", "utf-8", function(err,data){
            console.log("before resolving the data")
            resolve(data);
        });
    })
}

//callback function to call
function onDone(data){
    console.log(data)
}

kiratsReadFile().then(onDone);