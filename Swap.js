// swap before after------------------

var a = 5;
var b = 7;
console.log("before swap: a =", a, "b =", b);
var temp = a;
var a = b;
var b = temp;
console.log("after swap:  a =", a, "b =", b);
//  other system-------------------

var x = 5;
var y = 7;
var x = x + y;
var y = x -y;
var x = x - y;
console.log("after swap: x =", x, "y =", y);
// another system----------------

var p = 5;
var q = 7;
[p, q] = [q, p];
console.log("after swap: p =", p, "q =", q);
Bangla