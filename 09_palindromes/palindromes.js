const palindromes = function (word) {
    let newWord = word.replace(/[^a-zA-Z]/g, '').toUpperCase();
        // replace() replaces any character that is not a letter with an empty string 
        // the regex `/[^a-zA-Z]/g` matches any character that is not a letter and the `g` flag
        //  makes the replacement global
    let reversedNewWord = newWord.split('').reverse().join('');
        // split('') splits the string into an array of individual characters
        // ...empty string `''` argument specifies that each character in the string should be
        // ...treated as a separate element in the array
        // reverse() reverses the order of the elements in the array
        // join('') joins the elements in the array back into a string
        // ...empty string `''` argument specifies that there should be no separator between the
        // ...characters in the resulting string
    if (newWord === reversedNewWord) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
