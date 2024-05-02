var myArray = [5, 2, 8, 12, 3]
if(myArray[0] > myArray[1]){
    var max = myArray[0]
}else{
    var sMax = myArray[1]
}

for(var i = 0 ; i<=myArray.length ; i++){
    if(myArray[i] < max){
        sMax = max
        max = myArray[i]
    }else if(myArray[i] < sMax){
        sMax = myArray[i]
    }
}
console.log(sMax);