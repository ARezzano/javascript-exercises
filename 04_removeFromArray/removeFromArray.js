const removeFromArray = function(val, ...valRem) {
    let arrFinal = [];

    val.forEach((item) => {
        if(!valRem.includes(item)){
            arrFinal.push(item);
        }
    });

    return arrFinal;
};


// Do not edit below this line
module.exports = removeFromArray;
