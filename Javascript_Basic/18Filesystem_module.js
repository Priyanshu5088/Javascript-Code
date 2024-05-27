const fs = require("fs");

fs.readFile("file.txt", "utf-8", function(err , data){
  console.log(data);
})

console.log("hi there")

let a=0;
// this will take time , longer than the file read
for(let i=0; i<=1000000000; i++){
  a++
}

console.log("hi there 2")

// Unfortunately the output comes out to be undefined but the answer is the text written in 'a.txt'....
// But it ran on terminal