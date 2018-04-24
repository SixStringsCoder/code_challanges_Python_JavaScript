### Coding comparisons with Python 3.6 and JavaScript 5 and 6

#### Binary Search
Create a function that uses the Binary Search algorithm to guess a number between a range.
Create an alternative answer for when the number is outside of the range.
Display the guess, its too low-high status, the new low-high range, and the number of guesses it took
to get the right answer.

<hr>

There is only one summary for all three samples using Python and JavaScript since the flow of logic played out the same.  That is to say, I began each function by initializing four variables to handle the fluctuating values for _low_, _high_, _numberPicked_, and _guesses_.  Both scripts used:
 - a floor operator or .floor method to round down any floating point values,  
 - conditional statements to account for:
   - a right answer, 
   - a too low value, 
   - a too high value, 
   - a function call, where the number picked didn't fall within the low-high range. 

 - string templates for displaying changing values to help follow the Binary search logic.
 
 Interestingly it wasn't until I started testing these functions with easy-to-solve parameters that I noticed
 that the number_of_guesses variable wasn't correct.  With arguments such as ``low=1, high=100, number_picked=50``
 it was returning 0 attempts instead of at least 1 attempt to find the number.  So I initalized ``number_of_guesses`` with a value of 1 instead of 0
 since the first condition of the   _while_ loop (i.e. a correct guess) doesn't increment ``number_of_guesses``.

<hr>

##### Python 3.6 example

Python also has a math module which can be imported to implement the .floor method.  
I included in the _.py_ file but not here since it doesn't alter the programming flow.


```python
def binary_search2(low: int, high: int, number_picked: int) -> int:
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
    number_of_guesses = 1
    guess = 0

    # Keep guessing the number picked while guess does not equal the number picked
    while guess != number_picked:
        guess = (high_number + low_number) // 2

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
```

##### JavaScript 5.1 example

Having to use the concatenate operator to build the strings is a testament 
to JS 6's much improved string template syntax with backticks and ${}

```javascript
function binarySearch(low, high, numberPicked) {
  "use strict";
  var lowNumber = low;
  var highNumber = high;
  var number_of_guesses = 1;
  var guess;

  while (guess != numberPicked) {
      // make a guess at half-point between low and high then round down
      guess = Math.floor((highNumber + lowNumber) / 2);

      if (numberPicked < low || numberPicked > high) {
          console.log("The number you picked doesn't fall within the low to high range.");
          return null;
          break;
      }

      if (guess == numberPicked) {
        console.log("Correct! The number is " + guess + ". It took " + number_of_guesses + " guesses using the binary search algorithm.");
        number_of_guesses += 1;
        return guess;
        break;
      }
      // Too low/high status
      // if too low, reassign lowNumber to last guess + 1
      else if (guess < numberPicked) {
        lowNumber = guess + 1;
        number_of_guesses += 1;
        console.log("Guess: " + guess + " is too low --> Now pick between " + lowNumber + " and " + highNumber);
    } else if (guess > numberPicked) {
       // if too high, reassign highNumber to last guess - 1
        highNumber = guess - 1;
        number_of_guesses += 1;
        console.log("Guess: " + guess + " is too high --> Now pick between " + lowNumber + " and " + highNumber);
    }
  }
}
```


##### JavaScript 6 example
```javascript
const binarySearch2 = (low, high, numberPicked) => {
  let lowNumber = low;
  let highNumber = high;
  let number_of_guesses = 1;
  let guess;

  while (guess != numberPicked) {
      // Make a guess at halfway-point between low and high then round float down
      guess = Math.floor((highNumber + lowNumber) / 2);
      // If number picked is outside of low-high range, state that and break the loop
      if (numberPicked < low || numberPicked > high) {
          console.log(`The number picked, ${numberPicked}, doesn't fall within the range of ${low} to ${high}.`);
          return null;
          break;
      }

      if (guess == numberPicked) {
        console.log(`You got it! The number is ${guess}. It took ${number_of_guesses} guesses.`);
        number_of_guesses += 1;
        return guess;
        break;
      }
      // Too low-high status
      // if too low, reassign lowNumber to last guess + 1
      else if (guess < numberPicked) {
        lowNumber = guess + 1;
        number_of_guesses += 1;
        console.log(`Guess: ${guess} is too low --> Now between ${lowNumber} and ${highNumber}`);
    } else if (guess > numberPicked) {
       // if too high, reassign highNumber to last guess - 1
        highNumber = guess - 1;
        number_of_guesses += 1;
        console.log(`Guess: ${guess} is too high --> Now between ${lowNumber} and ${highNumber}`);
    }
  }
};
```

