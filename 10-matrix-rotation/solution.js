// Sara
// 3, i=0, j=2
// 3, i=0, j=0
// 8, i=2, j=1
// 8, i=1, j=2



// Input:
//  [[1, 2, 3, 4], 
//  [5, 6, 7, 8], 
//  [9, 10, 11, 12], 
//  [13, 14, 15, 16]] 
// Output:
//  [4, 8, 12, 16] 
//  [3, 7, 11, 15] 
//  [2, 6, 10, 14] 
//  [1, 5, 9, 13]
// The given matrix is rotated by 90 degree 
// in anti-clockwise direction.

// function rotateMatrix (AoA){
//   let returnMatrix=[]
//   for (let i=0; i<AoA.length; i++){
//     returnMatrix.push([])
//   }

//   console.log(returnMatrix)
//   for (let i=0; i<AoA.length; i++){

//     for(let j=0; j<AoA[i].length; j++){
//       returnMatrix[AoA.length-j-1][i]=AoA[i][j]
//     }
//   }
// return returnMatrix
// }


function rotateMatrix (AoA){
    let returnMatrix=[]
  
    for (let i=AoA.length-1 ; i>-1; i--){
     let temp=[]
      for(let j=0; j<AoA.length; j++){
           temp.push(AoA[j][i])   
      }
      returnMatrix.push(temp)
    }
  return returnMatrix
  }
  
  console.log(rotateMatrix ( [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]))