const repeatString = function(val1,val2) {

    if(val2 < 0) return "ERROR";

    let unifiedString = "";
    while(val2 > 0){
        unifiedString += val1;
        val2--;
    }
    return unifiedString;
};

// Do not edit below this line
module.exports = repeatString;
