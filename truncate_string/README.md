### Coding comparisons with Python 3.6 and JavaScript 5.1 and 6

#### Truncate a string
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a `...` ending.
Note that inserting the three dots at the end will add to the string length which shouldn't be more than the maximum string length (second argument).
However, if the given maximum string length `num` is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.
<hr>

Python 3.6

Using Python's slice syntax, when the number is less than the string length and greater than 3, I simply slice from the beginng up to the `num` minus 3 (to account for the ellipses 3 character spaces). The final `else` condition doesn't need to take the ellipses into account, so it's merely `string[:num]` to truncate/slice from the beginning up to, but not including, `num`.

```python
def truncate_string(string: str, num: int) -> bool:
    if num >= len(string):
        return string
    if num < len(string) and num > 3:
        return string[:(num - 3)] + '...'
    else:
        return string[:num] + '...'

```


JavaScript 5.1

The one change I made with JavaScript was to save the first parameter in a declared variable `truncated` then reassign it to the sliced value in the 2nd conditional `if` and `else` statements.  This change may be unnecessary but I also found the declared `truncated` to be more explicit in terms of what the end result was producing. 
 
The first condition, where `num` is greater than `str.length`, was also clearer to just return `str` and not use the declared variable `truncated` since no truncating was happening.

The last difference (probably unnecessary) is the conclusion of an `else if` rathan than using an `else` statement.  Again, it was the idea practicing making code look explicit and readable.  The `else` in the Python example above implies `(num <= 3)` but when it's actually written out it shows a clearer explanation of what's happening, esp. when including the `truncated` variable.

But I'll be a hypcrite in a minute when we get to the JavaScript 6 example.


```javascript
// example 1
// Use .slice()
function truncateString(str, num) {
  "use strict";
  var truncated;

  if (num >= str.length) {
    return str;
  }
  if (num < str.length && num > 3) {
    truncated = str.slice(0, num - 3);
    return truncated + "...";
  } else if  (num <= 3) {
    truncated = str.slice(0, num);
    return truncated + "...";
  }
}

```

JavaScript 6

One of the great benefits of ES6 is the ability to condense code into fewer lines and still be readable.  This is really JavaScript's answer to Python's efficiency.

The first line is the same: return the string if `num` is longer than string.

The beauty is in the 2nd part by condensing the `if` and `else` statements into one line of code.  While not super explicit in the same way as the more verbose JavaScript 5.1 example above, it does the same thing.  If `(num < str.length && num > 3)` return `str.slice(0, num - 3)` else `str.slice(0, num) + "..."` but minus the use of `if`, `return` and `else` and the 6 lines of code needed above with JS 5.1.


```javascript
const truncateStringES6 = (str, num) => {
    if (num >= str.length) {
      return str
    }
    // ternary operator to condense potential 'if' 'else' statements
    (num < str.length && num > 3) ? str.slice(0, num - 3) : str.slice(0, num) + "..."
}

```