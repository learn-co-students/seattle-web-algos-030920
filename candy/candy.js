function poorCandyDistribution (kids, extra){
    let newArray = []
    for (i=0; i<kids.length; i++){
      total = kids[i] + extra
       newArray.push(total)
   }
   let result = []
   for (i=0;i<newArray.length; i++){
   if (newArray[i]==Math.max(...newArray)){
     result.push(true)
    } else{
     result.push(false)}
   } return result
    }
    const candies = [4,2,1,1,2]
    const extraCandies = 1
    poorCandyDistribution (candies, extraCandies)