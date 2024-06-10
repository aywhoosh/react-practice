// var numbers = [3, 56, 2, 48, 5];

// //Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function (num){
//     return num>10;
// });
// console.log(newNumbers);

// //Reduce - Accumulate a value by doing something to each item in an array.
// // var newNumber = 0;
// // numbers.forEach(function(currentNumber) {
// //     newNumber+= currentNumber;
// // });

// // var newNumber = numbers.reduce(function(accumulator , currentNumber) {
// //     console.log("accumulator: "+accumulator);
// //     console.log("currentNumber: "+currentNumber);
// //     return accumulator+currentNumber;
// // });


// //Find - find the first item that matches from an array.
// var foundNum = numbers.find(function(num){
//     return num>40;
// });
// console.log(foundNum);

// //FindIndex - find the index of the first item that matches.
// var foundIndex = numbers.findIndex(function(num){
//     return num>40;
// });
// console.log(foundIndex);

import emojipedia from "./emojipedia";

var meaningArr = emojipedia.map(function(item){
    return (item.meaning).substring(0,100);
});

console.log(meaningArr);



