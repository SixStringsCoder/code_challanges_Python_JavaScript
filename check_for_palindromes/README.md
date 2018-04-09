### Coding comparisons with Python and JavaScript 5 and 6

#### Check for Palindromes
Return true if the given string is a palindrome. Otherwise, return false.

<hr>

Python

To check for palindromes, I'll need to clear out unwanted characters first from the given strings. I'll use Regular Expressions to find and replace these characters, leaving me with a "clean" string. I'll save this as the string in _forward_ order.

I'll then assign the cleaned string but in reverse order with a variable name of _backward_.  Python allows for a string to be reversed by slicing it and stepping through in reverse order hence the -1.

All that's left to do is compare that the _forward_ value matches the _backward_ value and if so, return __True__; the string is Truly a palindrome. Otherwise, if the strings don't match, return __False__.

To implement regex with Python, I import the module _re_.  After changing the the string argument to lowercase to account for any case inconsistencies, I then use re.sub to substitute any non-word characters ("\W") with an empty string.  The result is that colons, dashes, backslashes, etc. are removed from the string.  Because an underscore is considered a word character, I include that as well ("[\W_]"). 

```python
import re

def palindrome(string: str) -> bool:
    '''
    Return true if the given string is a palindrome. Otherwise, return false.
    :param string:
    :return: boolean
    '''

    # Make string lowercase
    lower_case = string.lower()
    # Create regex pattern to find and replace non-alphanumeric characters
    # assign it forward order
    forward = re.sub("[\W_]", "", lower_case)
    # Reverse the string and assign it backward order
    backward = forward[::-1]
    # Compare forward and backward value and return true if they match; return false if they don't
    if forward == backward:
        return True
    else:
        return False
```

This function in JavaScript follows similar logic as the Python example above, however JavaScript provides its own methods for replacing the non-word characters: _.replace()_.  The first parameter in _.replace()_ takes a pattern as the argument (i.e. locate this pattern in the string) The 2nd parameter is the string to substitute the pattern with.  In thsi case, I just want to get rid of the non-word characters, so I replace them with an empty string.

Unlike Python's slicing to save a string in revese order, JavaScript requires some methods to split the string, reverse it, then join it back together.  Chaining these methods together helps reduce lines of code plus the method names help make the sequence of actions very clear to understand.

Like the Python function, I compare the _forward_ value with the _backward_ value to return a Boolean value: true if a palindrome and false if not.  Note that Python capitalizes its Booleans whereas JavaScript doesn't.

Note that the literal expression "use strict" is included to prevent undeclared variables from being used.  It will do its job within the local scope of the function.


JavaScript 5
```javascript
function palindrome(str) {
    "use strict";
    // change string to lowercase
    var lowered = str.toLowerCase();
    //clean out non-alphanumeric characters (punctuation, spaces and symbols)
    var pattern = /[\W\_]+/g;
    var forward = lowered.replace(pattern, '');
    //split, reverse, join to second variable
    var backward = forward.split('').reverse().join('');

    //compare both strings for equality
    if (forward === backward) {
      return true;
    } else {
      return false;
    }
};
```


JavaScript 6 uses slightly different syntax replacing the function declaration above with a function expression in addition to an arrow symbol in place of the keyword 'function'.  I replaced the 'var' keywords with 'const'.

I used a ternary expression at the end (just to practice using it!) in place of the 'if' conditional statement used in the JS 5 function above.

Note that Python also has a ternary statement that used with this example looks like: 

'true' if forward == backward else 'false'

It really goes against the flow of thought so is a bit awkward.


JavaScript 6
```javascript
const palindromeES6 = str => {
    "use strict";
    // change string to lowercase
    const lowered = str.toLowerCase();
    //find and clean out non-alphanumeric characters (punctuation, spaces and symbols)
    const pattern = /[\W\_]+/g;
    const forward = lowered.replace(pattern, '');
    //split, reverse, join to second variable
    const backward = forward.split('').reverse().join('');

    //compare both strings for equality using ternary operator, return true is equal otherwise return false
    forward === backward ? true : false;
};

```