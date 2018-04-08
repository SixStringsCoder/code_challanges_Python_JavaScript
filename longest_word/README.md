### Coding comparisons with Python 3.6 and JavaScript 5 and 6

#### Find the Longest Word in a String
Return the length of the longest word in the provided sentence.
Return value must be an integer.


<hr>

##### Python 3.6 example


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

