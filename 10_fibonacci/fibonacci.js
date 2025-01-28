const fibonacci = function(val){
    if(val == 0) return 0;
    if(val == 1) return 1;
    if(val < 0) return "OOPS";

    let secondLast = 0;
    let last = 1;
    let current = 1;

    for(let i = 2; i < val; i++){
        secondLast = last;
        last = current;
        current = last + secondLast;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
