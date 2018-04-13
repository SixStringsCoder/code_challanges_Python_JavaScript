### Coding comparisons with Python and JavaScript 5 and 6

#### Titlecase a string

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lowercase.  For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
<hr>

**Python 3.6**

This challenge from the distance seemed like it would suit Python and its many in-the-box string methods.  The method _.title()_ seemed to be the direct route but after testing the function with doc tests, it was quickly revealed that _.title()_ wouldn't handle apostrophes cleanly, capitalizing the letter following the apostrophe (i.e. producing _I'M_ instead of _I'm_).

Some research on the net put forth two other solutions, one connected to the __string__ module allowing me to use one of its methods _.capwords()_ to title case the string parameter.  While the other way was almost identical to how I approached this challenge with JavaScript, i.e., split the string into an array, capitalize each word in the array, then join it back together again.

_Python Example 1_
```python
import string


def title_case(str_param: str) -> str:
    """
    This function relies on importing the string module then using the .capwords method to titlecase a string
    :param str_param:
    :return: string
    """
    title_cased = string.capwords(str_param)
    return title_cased
```

In this 2nd Python example below, I used a list comprehension since it made it easier to present each step of the process per line: 
- **split** to array
- **capitalize** words
- **join** array to string
- **return** string

List comps are clean that way; you don't have to initialize an empty array then append to it from other lines of code carrying out a loop.
``` str_cap = [word.capitalize() for word in str_split]```

_Python Example 2_
```python
def title_case2(str_param: str) -> str:
    """
    This function uses .capitalize() to titlecase a string
    :param str_param:
    :return: string
    """
    str_split = str_param.split(" ")
    str_cap = [word.capitalize() for word in str_split]
    str_title_cased = ' '.join(str_cap)
    return str_title_cased
```


**JavaScript 5**

Attempting this challenge with JS would play out similar to my 2nd Python example above following the sequence of split, capitalize, join, return. However, there is a tendency with JS to lowercase strings first in order to iron out case inconsistencies in the string.  With the Python examples, I didn't need to lowercase the string since the _string_ module and _.capitalize()_ seemed to be handling that step behind the scenes (even the ALL CAPS test passed the doctest).

Some interesting parts with Javascript involved using a the _.map_ iterator to capitalize each word element in the array by simply accessing the first letter by index to uppercase it then concatenating it with the rest of the word using _.slice()_from index 1 to the end of the word.  It was kind of like fitting the body with the word with a new capitalized head!  Each newly capitalized word element wsa then pushed to an array, joined and then returned as a string.

```javascript
function titleCase(str) {
  "use strict";
  // storage array after words have been capitalized
  var titledWords = [];
  // lowercase the string then split it at no-break space
  var cleanSplit = str.toLowerCase().split(" ");

  // iterate over the array
  cleanSplit.map(function(word) {
    // capitalize 1st letter and concatenate with rest of sliced word
    var capWord = word[0].toUpperCase() + word.slice(1);
    // append capitalized word to storage array
    titledWords.push(capWord);
  });

  // join storage array into final titlecased string
  var titledString = titledWords.join(' ');
  return titledString;
}
```

**JavaScript 6**

Besides some of the syntax differences between JS 5 and JS 6 (i.e. using an arrow function expression), the sequence of events to alter the string played out the same: **split**, **capitalize**, **join**, **return**. The only difference being that I used the method _.charAt()_ to access and capitalize the first letter inside the _.map()_ iterator.  
```word.charAt(0).toUpperCase()```

```javascript
const titleCase2 = str => {
  // storage array after words have been capitalized
  const titledWords = [];
  // lowercase the string then split it at no-break space
  const cleanSplit = str.toLowerCase().split(" ");

  // iterate over the array
  cleanSplit.map(function(word) {
    // capitalize 1st letter and concatenate with rest of sliced word
    let capWord = word.charAt(0).toUpperCase() + word.slice(1);
    // append capitalized word to storage array
    titledWords.push(capWord);
  });

  // join storage array into final titlecased string
  const titledString = titledWords.join(' ');
  return titledString;
};
```