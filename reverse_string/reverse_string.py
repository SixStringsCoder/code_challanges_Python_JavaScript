"""
>>> reverseString('hello')
'olleh'

>>> reverseString('Howdy')
'ydwoH'

>>> reverseString('Greetings from Earth')
'htraE morf sgniteerG'
"""

def reverseString(string: str) -> str:
    """
    function accepts a string argument and reverses it
    param: string
    return: string
    """
    return string[::-1]
