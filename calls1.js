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

//REDUCE PROBLEM
/*Using reduce get the total of the following array*/
// var totalArr = [1,2,3,4,5,6,7,10,20,50];
// var a = totalArr.reduce(function (sum,current){
//   return sum + current;
// }, 0);
//
// console.log(a);
//
// /*Using reduce calculate the total of only the negative numbers of this array*/
// var totalArr = [1,2,-3,4,-5,6,7,-10,-20,50];
// var b = totalNegArr.reduce(function(sum, current){
//   if (current < 0) {
//     return sum + current;
//   }
//   else {
//     return sum;
//   }
// },0);
// console.log(b);
//
// /* Reduce the following nested array to a flat array containing all the values*/
// var nestedArr = [[1,2],[3,4],[5,6]];
// nestedArr.reduce(function(flatArr, current){
//   return flatArr.concat(current);
// },[]);
//
// //MAP PROBLEM
// /*Use map to create a new array of doubled values of numArr*/
// var numArr = [1,2,3,4,5];
// numArr.map(function(element){
//   return element * 2;
// });
//
// //MAP PROBLEM
// /*Use map to create an array of just id's from the following array*/
// var objArr = [
//   {id: 1, name: "Dan"},
//   {id: 2, name: "Fred"},
//   {id: 3, name: "Steve"},
//   {id: 4, name: "Greg"}
// ];
//
// objArr.map(function(obj){
//   return obj.id;
// })
//
// //FILTER PROBLEM
// /*Create a new arr using filter without the falsey values from the following array*/
// var arr = [1, 0, true, {}, false, null, "a string", ""];
// var z = arr.filter(function(element){
//   return element;
// });
//
// console.log(z);
//
// /*Create a new arr filtering out any strings from keepArr that are found in removeArr*/
// var keepArr = ["string", "anotherstring", "whataboutthis", "heyo"];
// var removeArr = ["anotherstring", "heyo"];
//
// keepArr.filter(function(element){
//   return removeArr.indexOf(element) === -1;
// });
//
// var obj = {
//   first: 2,
//   second: 1,
//   third: 25,
// };


// function largeNumbers({first, second, third}){
//   if (first.length < second.length && first.length < third.length){
//     return first;
//   }
//   else if (second.length < third.length){
//     return second;
//   }
//   else {
//     return third;
//   }
// };
// console.log(largeNumbers(obj));

// var employees = [{
//   "firstName": "Von",
//   "lastName": "Budibent",
//   "email": "vbudibent0@163.com",
//   "department": "Sales"
// }, {
//   "firstName": "Catherina",
//   "lastName": "Swalowe",
//   "email": "cswalowe1@example.com",
//   "department": "Engineering"
// }, {
//   "firstName": "Theo",
//   "lastName": "Trill",
//   "email": "ttrill2@sina.com.cn",
//   "department": "Services"
// }, {
//   "firstName": "Elsy",
//   "lastName": "McCrorie",
//   "email": "emccrorie3@netscape.com",
//   "department": "Legal"
// }, {
//   "firstName": "Lorie",
//   "lastName": "Handsheart",
//   "email": "lhandsheart4@fotki.com",
//   "department": "Research and Development"
// }]
// // Create a function called 'employeeUpdater'. employeeUpdater will loop over the array above and perform the following:
// //  1. If employee's first name is Theo, remove that employee because he just got fired.
// //  2. If the employee's first name is Lorie, change her department to 'HR'.
// //  3. Return the updated employee array.
//
// function employeeUpdater(arr){
//   if (employees.firstName === 'Theo');
//   delete employees[1];
// }
// }
//
// console.log(employeeUpdater(employees));

const mixedNumbers = [6,3,1,7,5,2,6,8,9,4,2,7,9,3,1,8,4,3];

let evenNumbers = mixedNumbers.filter(function(element){
  return element % 2 === 0;
});

console.log(evenNumbers);

const prices = [15.00, 23.00, 78.00, 34.00, 12.00, 86.00, 12.00, 79.00, 32.00];

let postTaxPrices = prices.map(function(element){
  return element * 1.07;
});
console.log(prices);
