var marks = [45, 35, 25, 75, 83, 24, 45, 76, 73];
var max = marks[0];
for(var i = 0; i<marks.length; i++) {
    var element = marks[i];
    if(element >max){
        max = element;
    }
}
console.log(max);