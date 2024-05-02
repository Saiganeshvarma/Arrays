var myArray =  [5, 2, 8, 12, 3]
var max = myArray[0]
for(var i = 0 ; i<myArray.length ; i++){
    if(myArray[i] < max){
        max = myArray[i]
    }
}
console.log(max);