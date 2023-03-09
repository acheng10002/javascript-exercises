const sumAll = function(firstNum, secondNum) {
    let i = firstNum;
    let j = secondNum;
    if (i > j) {
        i = secondNum;
        j = firstNum;
    } else if (i < 0 || j < 0) {
        return 'ERROR';
    } else if (typeof i != 'number' || typeof j != 'number') {
        return 'ERROR';
    }
    let sum = 0;
    for (k = i; k < j+1; k++) {
        sum += k;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
