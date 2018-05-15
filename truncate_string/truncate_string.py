"""
>>> truncate_string("A-tisket a-tasket A green and yellow basket", 11)
'A-tisket...'

>>> truncate_string("Peter Piper picked a peck of pickled peppers", 14)
'Peter Piper...'

>>> truncate_string("A-tisket a-tasket A green and yellow basket", len("A-tisket a-tasket A green and yellow basket"))
'A-tisket a-tasket A green and yellow basket'

>>> truncate_string("A-tisket a-tasket A green and yellow basket", len("A-tisket a-tasket A green and yellow basket") + 2)
'A-tisket a-tasket A green and yellow basket'

>>> truncate_string("A-", 1)
'A...'

>>> truncate_string("Absolutely Longer", 2)
'Ab...'

"""


def truncate_string(string: str, num: int) -> bool:
    if num >= len(string):
        return string
    if num < len(string) and num > 3:
        return string[:(num - 3)] + '...'
    else:
        return string[:num] + '...'