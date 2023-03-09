const leapYears = function(year) {
    let testYear = parseInt(year);
    if (testYear % 400 === 0) {
        return true;
    } else if (testYear % 4 != 0) {
        return false;
    } else if (testYear % 100 === 0 && testYear % 400 != 0) {
        return false;
    } else {
        return true;
    }

};

// Do not edit below this line
module.exports = leapYears;
