const leapYears = function(val) {
    //divisible by 4
    //not divisible by 100, unless it's 400
    if(val % 4 == 0){
        if((val % 100 == 0) && (val % 400 != 0)){
            return false;
        }else{
            return true;
        }
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
