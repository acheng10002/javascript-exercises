const removeFromArray = function(originals, ...args) {
    let originalElements = Array.from(originals);
    let unwantedElements = args.sort();
    for (i = 0; i < originalElements.length; i++) {
        for (j = 0; j < unwantedElements.length; j++) {
            if (unwantedElements[j] === originalElements[i]) {
                let index = originalElements.indexOf(unwantedElements[j]);
                originalElements.splice(index, 1);
            } else {
                continue;
            } 
        }
    }
    return originalElements;
};

// Do not edit below this line
module.exports = removeFromArray;
