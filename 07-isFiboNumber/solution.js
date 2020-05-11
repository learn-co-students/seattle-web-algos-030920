// Cindy

function FibonacciChecker(num){
    let array = [0,1]
    let lastNum = 0
    
    while (lastNum<num) {
    lastNum = array[array.length - 1]+array[array.length-2]
    array.push(lastNum)  
    }
    
    if(lastNum === num){
      return "yes"
    }else{
      return "no"
    }
    
    }
    
    FibonacciChecker(54)