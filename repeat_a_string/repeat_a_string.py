"""
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.


>>> repeat_string_num_times("*", 3)
'***'
>>> repeat_string_num_times("abc", 3)
'abcabcabc'
>>> repeat_string_num_times("hey", 4)
'heyheyheyhey'
>>> repeat_string_num_times("abc", 1)
'abc'
>>> repeat_string_num_times("*", 8)
'********'
>>> repeat_string_num_times("abc", -2)
' '

"""

# example 1 - Using 2nd parameter as multiplier
def repeat_string_num_times(string: str, num: int) -> str:
    if num < 0:
        return " "
    else:
        return string * num

# example 2 - Using 2nd parameter with a counter
def repeat_string_num_times(string: str, num: int) -> str:
    count = 0
    new_str = ""

    if num < 0:
        return " "

    while count < num:
        new_str += string
        count += 1
    return new_str



