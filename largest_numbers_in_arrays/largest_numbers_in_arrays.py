'''

Return an array consisting of the largest number from each provided sub-array.


>>> largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
[5, 27, 39, 1001]

>>> largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])
[27, 5, 39, 1001]

>>> largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])
[9, 35, 97, 1000000]

'''

def largestOfFour(list_of_lists: list) -> list:
    largest = [max(num) for num in list_of_lists]
    return largest