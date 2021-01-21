var numbers = [45, 35, 25, 75, 83, 24, 45, 76, 73];
var sum = 0;
for(var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    sum = sum + element;
}
console.log("Total of the numbers:", sum);

// another system--------------


var numbers = [39, 45, 78, 74, 46, 92, 82, 97];
function getArray(numbers){
    var sum = 0;
    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
}
    return sum;
}
var numbers = [39, 25, 78, 34, 46, 92, 82, 97];
var result = getArray(numbers);
console.log("Total of the number:", result);

var total = getArray([45, 35, 35, 53, 56, 74, 57]);
console.log("Total of the number:", total);