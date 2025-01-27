const sumAll = function(sum1,sum2) {
    let newSum = 0;

    if((sum1<0) || (sum2 <0)){
        return "ERROR";
    }

    if((typeof sum1 != "number") || (typeof sum2 != "number")){
        return "ERROR";
    }

    if(sum1 > sum2){
        let temp = 0;
        temp = sum2;
        sum2 = sum1;
        sum1 = temp;
    }

    for(let i = sum1; i<=sum2; i++){
        newSum += i;
    }

    return newSum;
};

// Do not edit below this line
module.exports = sumAll;
