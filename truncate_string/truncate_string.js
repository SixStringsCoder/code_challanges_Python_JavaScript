
// JavaScript 5
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

truncateString("A-tisket a-tasket A green and yellow basket", 11); // returns returns "A-tisket...".
truncateString("Peter Piper picked a peck of pickled peppers", 14); // returns "Peter Piper..."
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length); // returns "A-tisket a-tasket A green and yellow basket"
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2); // returns "A-tisket a-tasket A green and yellow basket"
truncateString("A-", 1); // returns "A..."
truncateString("Absolutely Longer", 2); // returns "Ab..."


// JavaScript 6
const truncateStringES6 = (str, num) => {
    if (num >= str.length) {
      return str;
    }
    // ternary operator to condense potential 'if' 'else' statements
    (num < str.length && num > 3) ? str.slice(0, num - 3) : str.slice(0, num) + "...";
}

truncateStringES6("A-tisket a-tasket A green and yellow basket", 11); // returns returns "A-tisket...".
truncateStringES6("Peter Piper picked a peck of pickled peppers", 14); // returns "Peter Piper..."
truncateStringES6("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length); // returns "A-tisket a-tasket A green and yellow basket"
truncateStringES6("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2); // returns "A-tisket a-tasket A green and yellow basket"
truncateStringES6("A-", 1); // returns "A..."
truncateStringES6("Absolutely Longer", 2); // returns "Ab..."

