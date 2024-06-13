// create a map fun. that takes an array and a transform fun. as input and return the transformed array as output
const arr = [1,2,3,4,5,6];

const map1 = (arr,fn) => {
    const transformedArr = [];
    for(let i=0; i<arr.length; i++){
        transformedArr.push(fn(arr[i]));
    }
    return transformedArr;
}

