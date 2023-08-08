// let arr = [1,2,3,4,5,6];

// // console.log(arr.pop());
// console.log(arr);
// console.log(arr.indexOf(4));
// console.log(arr.at(4));
// console.log(arr.shift());
// console.log(arr.unshift("abhi"));
// console.log(arr.slice(2,5));
// console.log(arr);

let arr = [1,2,3,4,"abhishek",5,6];
let arr1 = arr.splice(3,2,"abhi","bansal");
console.log(arr1);
console.log(arr);

let arr2 = [1,"a",2,"b","c","dog",4,5,6];
console.log(arr2.sort());