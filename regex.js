// let exampleStr = "Let's have fun with regular expressions and hack the world while we are at it!";
// let unRegex = /ha./;  // the "." is used to fill in the blank for the letters of the word that you are missing
// let result = unRegex.test(exampleStr);

// console.log(result)

//You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

//For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u.

// let bigStr = "big";
// let bagStr = "bag";
// let bugStr = "bug";
// let bogStr = "bog";
// let bgRegex = /b[aiu]g/;
// bigStr.match(bgRegex);
// bagStr.match(bgRegex);
// bugStr.match(bgRegex);
// bogStr.match(bgRegex);


// console.log(bogStr.match(bgRegex));

// ALWAYS REMEMBER TO USE THE STRING TO MATCH THE REGEX
// string.match(regex)
