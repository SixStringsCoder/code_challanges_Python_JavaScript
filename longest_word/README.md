### Coding comparisons with Python 3.6 and JavaScript 5 and 6

#### Find the Longest Word in a String
Return the length of the longest word in the provided sentence.
Return value must be an integer.


<hr>

##### Python 3.6 example
This exercise like, _Factorial_, also uses an incrementing variable to capture the final result: the longest word in the string parameter. The final returned value should be an integer, so I start by intializing a _longest_word_ variable with the integer value of 1.  

The string argument does have a length property but it's for the whole string provided.  Since I need to measure the lengths of individual words in the long string provided, I need to split the string into smaller strings and store them in a list. I split the string at every no-break space character.

Once the list is created with each element representing a word, I loop through the list calculating the length of each word.  I compare that word length with the _longest_word_ variable and assign _longest_word_ the new word length if it's greater than _longest_word_'s current value.  This allows me to update _longest_word_'s assignment to the largest number (i.e. the longest word length) in the list.

Once the list has been looped through, I then return the value of _longest_word_.

This seemed like it could be a clean return for a list comprehension but with updating _longest_word_, the list comprehension grew too complex to justify using it.  Plus the returned value is an integer, not a new list.

```python
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
    
findLongestWord("The quick brown fox jumped over the lazy dog")
# returns 6    
```

JavaScript uses the same sequence of logic as the Python function.  The only place that I deviated is replacing the _for_ loop with an iterator.  The question was which iterator to use: _.map_, _.filter_, or _.forEach_.  They all produced the same looping pattern that I need but which was the "right" one to use.  Even though it appears the function is "filtering" out the longest word from the array, I wasn't really generating a new array with filtered results.  I also wasn't generating a new array with altered elements meaning _.map_ wasn't necessary. So I settled using _.forEach_ with the intention that _for each_ length value of each word, compare and reassign the variable _longest_word_ to _each_ larger value.  Maybe even that is a bit of a stretch although since _.forEach_ doesn't return anything (i.e. no altered array or new array), I'd simply use it as a way to iterate the array without all of the unnecessary syntax of a _for_ loop.

##### JavaScript 5 example
```javascript
function findLongestWord(str) {
  "use strict";
  // initalize longest word variable
  var longestWord = 1;

  // split str by space break
  var splitter = str.split(' ');
  // loop through array of words
  splitter.forEach(function(word){
    // compare current word length with 'longestWord' length
    if (word.length > longestWord) {
      longestWord = word.length;
    }
  });
  console.log(longestWord);
  return longestWord;
}
```

ES6 simply changes some syntax by replacing the function declaration with a function expression and removing the optional parens around the parameter.  

I also used a template literal with the console.log() since ES 6 allows for it by using back ticks, dollar signs, and curly braces.  I always loved that about Python 3.6's f-string.  Any script that allows for such clear embedded expressions has my vote!   I'm not a fan of the multiple plus signs and littered quotation marks used in classic concatentation. 

##### JavaScript 6 example
```javascript
const findLongestWordES6 = str => {
  // initalize longest word variable
  let longestWord = 1;

  // split str by space break
  const splitter = str.split(' ');
  // loop through array of words
  splitter.forEach(function(word){
    // compare current word length with 'longestWord' length
    if (word.length > longestWord) {
      longestWord = word.length;
    }
  });
  console.log(`This is ES6 ---> ${longestWord}`);
  return longestWord;
};
```

