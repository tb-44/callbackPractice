//Trent's Code for individual callBack practice!  Used for testing.

// function first(str, cb){
//   cb(str[0]);
// }
//
// var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
// first(names, function(firstName){
//   console.log('The first name in names is ' + firstName)
// });

// var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
// function last(str, cb2){
//   cb2(str[str.length-1]);
// }
//
// last(names, function(lastName){
//   console.log('The last name in names is ' + lastName);
// });

// function multiply(num1, num2, cb3){
//   cb3(num1*num2);
// }
//
// multiply(4, 3, function(answer){
//   console.log('The answer is ' + answer); //should console.log 12
// });

// var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
//
// function contains(str,cb4){
//
// }
//
// console.log(result);
//
// contains(names, 'Colt', function(result){
//   if(result === true){
//     console.log('Colt is in the array');
//   } else {
//     console.log('Colt is not in the array');
//   }
// });

// var ages = [53,50,29,22,16];
// ages.forEach(function(val,i,arr){
//   arr[i] = val + 20;
// });
//
// console.log(ages);

// var ages1 = [53,50,29,22,16];
// var ages2 = ages1.map(function(el){
//   return el + 1;
// });
//
// console.log(ages1);
// console.log(ages2);
//
// var names = ['Suzie','Ben','Mark','Franklin'];
// var shortNames = names.filter(function(val,i,arr){
//   return val.length < 5;
// });
// console.log(shortNames);
//
// var favorites = { color : 'blue', flavor : 'mint oreo', food : 'spagetti'};
// for(var prop in favorites){
//   console.log(favorites[prop]);
// };
// console.log(favorites);
//
// var employees = {tom: 'designer', chris : 'engineer', james : 'developer'};
// var employeeNames = [];
// for(var prop in employees){
//   employeeNames.push(prop);
// }
// console.log(employeeNames);
// console.log(employees);
//
// var employeeRoles = [];
// for(var prop in employees){
//   employeeRoles.push(employees[prop]);
// };
// console.log(employeeRoles);
//
// var arr = [10,20,30];
// function first(arr){
//   return arr[0];
// }
// console.log(first(arr));

// var number = {
//     age: 30,
//     score: 100,
//     length: 12,
//     year: 2016
// }
//
// function objectLooper(number) {
//     for(var key in number) {
//         number[key] = 0;
//     }
//   return number;
// }
// objectLooper(number);
// console.log(objectLooper(number));

// var state = {
//     utah: 2942902,
//     texas: 26956958,
//     california: 38802500
// };
//
//
// function stateLooper(state) {
//     for(key in state) {
//       if (state[key] > 3000000){
//         return state[key] = 0;
//     }
//       else {
//         return false;
//       }
// };
// console.log(stateLooper(state));

// var family = ['Tyler', 'Jordyn', 'Ryan', 'Chelsey', 'Ireland'];
// //Create a function named 'looper' that is given family as it's only argument, loops through the given array, and alerts every item in the array.
//
// function looper(arr){
//   for (var i = 0; i < arr.length; i++){
//     console.log(arr[i]);
//   }
// }
// console.log(looper(family));

// var nums = [1,2,3,6,22,98,45,23,22,12];
// //Write a function named evenFinder that is given nums as it's only argument and removes all values that aren't even from the given array.
//
// function evenFinder(nums){
//   var evenList = [];
//   for(var i = 0; i < nums.length; i++){
//     if(nums[i] % 2 === 0){
//       evenList.push(nums[i]);
//     }
//   }
//   return evenList;
// }
// console.log(evenFinder(nums));
