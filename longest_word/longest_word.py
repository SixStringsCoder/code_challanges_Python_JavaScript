"""
>>> findLongestWord("The quick brown fox jumped over the lazy dog")
6
>>> findLongestWord("May the force be with you")
5
>>> findLongestWord("Google do a barrel roll")
6
>>> findLongestWord("What is the average airspeed velocity of an unladen swallow")
8
>>> findLongestWord("What if we try a super-long word such as otorhinolaryngology")
19
"""

def findLongestWord(string: str) -> int:
    """

    :param string:
    :return: integer
    """

    # initialize longest word variable
    longest_word = 1

    # split string in a list of strings
    words_array = string.split(" ")

    # compare each word with the value of longest_word
    for word in words_array:
        # assign new value to longest_word if word length is greater than longest_word
        if len(word) > longest_word:
            longest_word = len(word)

    return longest_word
