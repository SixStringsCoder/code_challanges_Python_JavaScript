
"""

>>> binary_search(1, 100000000000, 345)
'Correct! The number is 345. It took binary search 34 attempt(s) to get it right.'

>>> binary_search(20, 50, 21)
'Correct! The number is 21. It took binary search 3 attempt(s) to get it right.'

>>> binary_search(1, 500000, 456123)
'Correct! The number is 456123. It took binary search 18 attempt(s) to get it right.'

>>> binary_search(10, 598, 6)
'The number picked, 6, must be between 10 and 598.'


"""


import math


def binary_search(low: int, high: int, number_picked: int) -> int:
    """
    Use binary search (a.k.a half-interval search) to find the number picked between a low and high number.
    :param low: integer
    :param high: integer
    :param number_picked: integer
    :return: integer
    """
    # Initialized values that will keep changing through the search
    low_number = low
    high_number = high
    number_of_guesses = 0
    guess = 0

    # Keep guessing the number picked while guess does not equal the number picked
    while guess != number_picked:
        guess = math.floor((high_number - low_number) / 2 + low_number)

        # If number picked is outside of low-high range, state that and break the loop
        if number_picked < low or number_picked > high:
            return f'The number picked, {number_picked}, must be between {low} and {high}.'
            break

        if guess == number_picked:
            return f'Correct! The number is {guess}. It took binary search {number_of_guesses} attempt(s) to get it right.'
            break
        elif guess < number_picked:
            # Adjust low number to exclude the guess just made
            low_number = guess + 1
            number_of_guesses += 1
            # print(f'{guess} is too low. -------> New low: {low_number} New high: {high_number}')
        elif guess > number_picked:
            # Adjust high number to exclude the guess just made
            high_number = guess - 1
            number_of_guesses += 1
            # print(f'{guess} is too high. -------> New low: {low_number} New high: {high_number}')
