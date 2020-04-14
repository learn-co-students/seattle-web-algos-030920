# in: [1,2,3,4,5], 2
# out: [4,5,1,2,3]
# method, 2 params: (arr, int)
# depending on int, rotate arr by int
# int = index, rotate all indices before to rear
# if int > arr.length, return false
# check if int > arr.length, if true, return false
# else, create a second array of indices from 0-int
# push those from in and then <<
# arr << arr.shift
def array_rotate(arr, int)
  if int >= arr.length or int <= 0
    return false
  else
    count = 0
    while count <= int
      arr << arr.shift(int)
      count += 1
    end
  end
  arr
end
array_rotate([1,2], 2)