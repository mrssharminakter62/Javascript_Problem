var num = 2.99590;
var result = Math.floor(num);
console.log(result);
 
var num = 5.11123;
var result1 = Math.ceil(num);
console.log(result1);

var num = 3.499999;
var result2 = Math.round(num);
console.log(result2);

var num = 2.85665;
var result3 =Math.random(num);
console.log(result3);
// Problem--------------------------

var randomNum = Math.random() * 15;
var output = Math.round(randomNum);
console.log(output);
// Use  for loop------------(1-6) er modde 10 num dive

for(var i = 0; i<10; i++) {
    var randomNum = Math.random() * 6;
    var output = Math.round(randomNum);
    console.log(output);
}