const findTheOldest = function(arr) {
    if(arr.length === 0) return null;
    return arr.reduce((acc,curr)=>{
        const accAge = getAge(acc.yearOfBirth,acc.yearOfDeath);
        const currAge = getAge(curr.yearOfBirth,curr.yearOfDeath);

        return accAge > currAge ? acc : curr;
    });
};

function getAge(birth,death){
    if(!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
