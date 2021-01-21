var name = [2, 4, 5, 7, 2, 9, 43, 26, 4];
var uniqueName = [];
for(var i = 0; i<name.length; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }

}
console.log(uniqueName);