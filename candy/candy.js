// Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

// For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.


// Input: candies = [12,1,12], extraCandies = 10
// Output: [true,false,true]

// Input: candies = [4,2,1,1,2], extraCandies = 1
// Output: [true,false,false,false,false] 
// Explanation: There is only 1 extra candy, therefore only kid 1 will have the greatest number of candies among the kids regardless of who takes the extra candy.

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