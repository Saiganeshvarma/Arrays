var myArray = [, 2, 3, 4, 5]
var isSorted = true
for(var i = 0 ; i<myArray.length ; i++){
    if(myArray[i] > myArray[i+1]){
        isSorted = false
        break

    }
}
console.log(isSorted);
