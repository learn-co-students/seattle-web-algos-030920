# You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
# Examples
# [2, 4, 0, 100, 4, 11, 2602, 36]
# Should return: 11 (the only odd number)
# [160, 3, 1719, 19, 11, 13, -21]
# Should return: 160 (the only even number)
#
# there's only one outlier
# at least three numbers in the array
# first three numbers will determine the majority type of the array
def outlier(array)
    i = 0
    majority_type = ""
    odds = []
    evens = []
    while i < 3
      array[i] % 2 == 0 ? evens << array[i] : odds << array[i]
      i += 1
    end
    if (odds.length != 3 && evens.length != 3)
      odds.length > evens.length ? (return evens[0]) : (return odds[0])
    end
    odds.length > evens.length ? majority_type = "odd" : majority_type = "even"
    if majority_type == "odd"
      while i < array.length
        if array[i] % 2 == 0
          return array[i]
        end
        i += 1 
      end
    end
    if majority_type == "even"
        while i < array.length
          if array[i] % 2 != 0
            return array[i]
          end
        i += 1 
      end
    end
  end
  arr1 = [2, 4, 0, 100, 4, 11, 2602, 36]
  arr2 = [160, 3, 1719, 19, 11, 13, -21]
  puts outlier(arr1)
  puts outlier(arr2)