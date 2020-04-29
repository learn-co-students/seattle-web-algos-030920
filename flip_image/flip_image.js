// # To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].
// # To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].
// # Input: [[1,1,0],[1,0,1],[0,0,0]]
// # Output: [[1,0,0],[0,1,0],[1,1,1]]
// # Input: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
// # Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
// # Constraints:
// # 1 <= A.length = A[0].length <= 20 - the matrix length will be between 0 and 20, and the matrix will be square
// # 0 <= A[i][j] <= 1 - all digits are either 0 or 1
function invert(array) {
    for(let i = 0; i < array.length; i++) {
      // console.log(array[i]);
      for(let j= 0; j < array[i].length; j++) {
        if (array[i][j] == 1) {
          array[i][j] = 0
          // console.log(array[i][j])
        } else {
          array[i][j] = 1
        }
      }
    };
      array.forEach(arr=> {
        return arr.reverse()
        })
        console.log(array)
  }
  let array2 = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
  let array = [[1,1,0],[1,0,1],[0,0,0]]
  invert(array2);