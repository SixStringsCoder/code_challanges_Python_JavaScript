'''
Make a function that will accept a string parameter
then after removing all non-alphanumeric characters,
check if the remaining string is a palindrome.


>>> palindrome("eye")
True

>>> palindrome("_eye")
True

>>> palindrome("race car")
True

>>> palindrome("not a palindrome")
False

>>> palindrome("A man, a plan, a canal. Panama")
True

>>> palindrome("never odd or even")
True

>>> palindrome("nope")
False

>>> palindrome("almostomla")
False

>>> palindrome("My age is 0, 0 si ega ym.")
True

>>> palindrome("1 eye for of 1 eye.")
False

>>> palindrome("0_0 (: /-\ :) 0-0")
True

>>> palindrome("five|\_/|four")
False
'''

import re

def palindrome(string: str) -> bool:
    '''
    Return true if the given string is a palindrome. Otherwise, return false.
    :param string:
    :return: boolean
    '''

    # Make string lowercase
    lower_case = string.lower()
    # Create regex pattern to find and replace non-alphanumeric characters
    # assign it forward order
    forward = re.sub("[\W_]", "", lower_case)
    # Reverse the string and assign it backward order
    backward = forward[::-1]
    # Compare forward and backward value and return true if they match; return false if they don't
    if forward == backward:
        return True
    else:
        return False
