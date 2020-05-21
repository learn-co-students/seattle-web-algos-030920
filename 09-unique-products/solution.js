// John

function uniqueProducts(strArr){ //O N^2?
  //iterate throuch each value in array
  //split each value ("")
  //multiply the values
  //record in hash where key is the product, value is true
  let memo = {}
  let count = 0
  strArr.forEach(numberSet =>  { // could also use for loop
    let numerals = numberSet.toString(10).split("")
    let product = numerals.reduce((product, number) => {
      return product * number // cool also use for loop
    })
    if (!memo[product]) {
      memo[product] = true
      count++
    }
  })
  return count
}


// Christine

function uniqueProducts(array){
  let productsList = []
  let unique = 0
  array.forEach((item) => {
    let product = 1  
    while (item > 0) {
      product *= (item % 10);
      item = (item / 10);
    }
    if (!productsList.includes(product)) {unique++;productsList.push(product)} 
  })
  return (`There are ${unique} unique products in this array.`)
}