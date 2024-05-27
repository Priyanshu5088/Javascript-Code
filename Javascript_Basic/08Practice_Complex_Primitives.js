//Q:- Largest num in arr 
 const numArray = [20,50,60,400,10,100]
// let largestnum = 0


// for(let i=0; i<numArray.length; i++){
//     if(numArray[i]>largestnum){
//         largestnum = numArray[i]
//     }
// }
// console.log(largestnum)


// Q:- Reverse the array 
let revArray = [];

for(let i=numArray.length-1; i>0; i--){
    revArray.push(numArray[i])
}
console.log(revArray)