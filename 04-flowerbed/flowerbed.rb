#Suppose you have a long flowerbed in which some of the plots are planted and some are not. However,flowers cannot be planted in adjacent plots - they would compete for water and both would die.

#Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number n, return if n new flowers can be planted in it without violating the no-adjacent-flowers rule.

#Example 1: Input: flowerbed = [1,0,0,0,1], n = 1
#Output: True
#Example 2: Input: flowerbed = [1,0,0,0,1], n = 2
#Output: False

#Note:#The input array won't violate no-adjacent-flowers rule.
# def flowerbed(bed_arr, num)
#     bed_arr.unshift(0)
#     bed_arr.push(0)
#     bed_arr.each_with_index do |row, ind|
#       if row == 0 && num > 0
#         if bed_arr[ind - 1] == 0 && bed_arr[ind + 1] == 0
#           bed_arr[ind] = 1
#           num -= 1
#         end
#       end
#     end
#     if num == 0
#       true
#     else
#       false
#     end
#   end
  
#   flowerbed([1,0,0,0,0], 3)
  def flowerbed(bed_arr, num)
    bed_arr.unshift(0)
    bed_arr.push(0)
    bed_arr.each_with_index do |row, ind|
      if row == 0 && num > 0
        if bed_arr[ind - 1] == 0 && bed_arr[ind + 1] == 0
          bed_arr[ind] = 1
          num -= 1
        end
      end
    end
    if num == 0
      true
    else
      false
    end
  end
  
  flowerbed([1,0,0,0,0], 3)