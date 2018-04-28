'''
Check if a string (first argument, string) ends with the given target string (second argument, target).


>>> confirm_ending("Bastian", "n")
True

>>> confirm_ending("Open sesame", "pen")
False

>>> confirm_ending("Connor", "n")
False

>>> confirm_ending("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")
False

>>> confirm_ending("Walking on water and developing software from a specification are easy if both are frozen", "specification")
False

>>> confirm_ending("He has to give me a new name", "name")
True

>>> confirm_ending("Open sesame", "same")
True

>>> confirm_ending("Open sesame", "pen")
False

'''

# example 1
def confirm_ending(string: str, target: str) -> bool:
    if string[-len(target):] == target:
        return True
    else:
        return False

# example 2
def confirm_ending(string: str, target: str) -> bool:
    if string.endswith(target):
        return True
    else:
        return False

# example 3
def confirm_ending(string: str, target: str) -> bool:
    # Start slice from last char (-1), stepping backward one char at a time (-1), the length of target -(len(target)+1)
    slice_at = slice(-1, -(len(target)+1), -1)
    # slice_at is ordered backwards so reverse to make forward order
    str_end_forward = string[slice_at][::-1]
    # Compare forward string with target
    if str_end_forward  == target:
        return True
    else:
        return False