const reverseString = function(val) {
    let stringRev = "";

    for(let i = val.length-1; i >= 0; i--){
        stringRev+=val[i];
    }

    return stringRev;
};

// Do not edit below this line
module.exports = reverseString;
