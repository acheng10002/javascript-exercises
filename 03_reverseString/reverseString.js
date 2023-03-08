const reverseString = function(string) {
    let splitString = string.split('');
    let reversedSplit = splitString.reverse();
    reversedSplit = reversedSplit.toString();
    reversedSplit = reversedSplit.replace(/,/g, '');
    return reversedSplit;
};

// Do not edit below this line
module.exports = reverseString;
