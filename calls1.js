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

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function contains(str,name,cb4){
  cb4();
  }
}

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});

// var ages = [53,50,29,22,16];
// ages.forEach(function(val,i,arr){
//   arr[i] = val + 20;
// });
//
// console.log(ages);