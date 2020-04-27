# A palindrome is a word or phrase which reads the same backward or forward
# Write a function that takes a string and determines whether it's a palindrome or not.
# The function should return true or false.
# is_palindrome("kayak") => true
# is_palindrome("Not a palindrome") => false
# is_palindrome("A Toyota") = true

#define function
#compare both ends and if same true

def is_palindrome(input)
    temp = input.gsub(" ", "").downcase  
    midpoint = temp.length/2
    puts midpoint
    end_of_array = temp.length-1
    for i in (0..midpoint) do    
      if(!( temp[i] == temp[end_of_array-i]))
        return false 
      end  
    end
    return true
  end
  
  puts is_palindrome("karyak")
  