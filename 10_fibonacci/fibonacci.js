 const fibonacci = function(index) {
    if (index < 0) {
        return "OOPS";
    } else {
        let numIndex = parseInt(index); 
        let sequence = [];
        sequence[0] = 1;
        sequence[1] = 1;
        for (let i = 2; i < 100; i++) {
            sequence[i] = sequence[i - 2] + sequence[i - 1];
        }
        let theNum = sequence[numIndex - 1];
        return theNum;
    } 
 };

// Do not edit below this line
module.exports = fibonacci;
