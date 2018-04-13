"""
Objective: Return the input string with the first letter of each word capitalized.

>>> title_case("I'm a little tea pot")
"I'm A Little Tea Pot"

>>> title_case("sHoRt AnD sToUt")
'Short And Stout'

>>> title_case("HERE IS MY HANDLE HERE IS MY SPOUT")
'Here Is My Handle Here Is My Spout'

>>> title_case2("I'm a little tea pot")
"I'm A Little Tea Pot"

>>> title_case2("sHoRt AnD sToUt")
'Short And Stout'

>>> title_case2("HERE IS MY HANDLE HERE IS MY SPOUT")
'Here Is My Handle Here Is My Spout'


"""

import string

# Python Example 1
def title_case(str_param: str) -> str:
    """
    This function relies on importing the string module then using th e.capwords method
    :param str_param:
    :return: string
    """
    title_cased = string.capwords(str_param)
    return title_cased

# Python Example 2
def title_case2(str_param: str) -> str:
    """
    This function uses .capitalize()
    :param str_param:
    :return: string
    """
    str_split = str_param.split(" ")
    str_cap = [word.capitalize() for word in str_split]
    str_title_cased = ' '.join(str_cap)
    return str_title_cased