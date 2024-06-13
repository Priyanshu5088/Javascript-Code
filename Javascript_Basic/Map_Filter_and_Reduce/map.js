// given an arr , give me back a new array in which every value is mulltiplied by 2

const arr = [1,2,3,4,5];

function transform(i){
    return i*2;
}

const ans = arr.map(transform);
console.log(ans);

// more clear syntax
// const ans = arr.map(function (i){
//     return i*2;
// });
// console.log(ans);
