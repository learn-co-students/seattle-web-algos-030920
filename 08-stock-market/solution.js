// Shunshun

let input = [7,6,4,3,1]

function stockTrading(arr) {
  let minimumPrice = Math.max(...arr) + 1;
  let maximumProfit = 0; 
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < minimumPrice){
      minimumPrice = arr[i]
    }
    else if(arr[i] - minimumPrice > maximumProfit){
      maximumProfit = arr[i] - minimumPrice
    }
  }
  return maximumProfit
}

stockTrading(input)

// Roger's is in the ruby file

