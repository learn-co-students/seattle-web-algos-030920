def make_money(arr)
    profit = 0
    min = arr.min
    min_index = arr.index(min)
    i = 0
    while i < arr.length do
      # potential profit
      temp = arr[i] - min
      # if it's bigger and in the right position
      if profit < temp and i > min_index
        profit = temp
      end
      i+=1
    end
    return profit
end

make_money([7,6,4,3,1])