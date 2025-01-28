const palindromes = function (val) {
    let normal = val.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversed = normal.split("").reverse().join(""); 

    if(normal == reversed){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
