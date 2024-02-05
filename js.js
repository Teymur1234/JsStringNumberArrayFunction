// 1ci sual
// function cem(num1, num2) {
//     var cem=0
//     while (num1<num2-1) {
//         num1++
//         cem+=num1
//     }
//      return cem
// }
// var num1=5
// var num2=8
// num2>num1 ? console.log(cem(num1,num2)) : console.log("2ci eded 1ciden kicikdir");


// 2ci sual
// function filter(array, callback) {
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i], i, array)) {
//             result.push(array[i]);
//         }
//     }
//     return result;
// }
// const numbers = [11, 21, 53, 4, 52, 63, 1, 3, 12, 10];
// const nums = filter(numbers, function (value) {
//     return value % 3 === 0;
// });
// console.log(nums); 


//3cu sual
function map(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}
function reduce(array, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = map(numbers, function (value) {
    return value * value;
});
console.log(squaredNumbers); 
const sum = reduce(numbers, function (acc, value) {
    return acc * value;
}, 1x);
console.log(sum);