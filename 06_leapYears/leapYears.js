const leapYears = function(year) {
    if (year%100==0 && year%400==0) {
        return true;
    }
    else if(year%100==0){
        return false;
    }
    else if (year%4==0){
        return true;
    }
    else return false;
};

// Do not edit below this line
module.exports = leapYears;


// %4 = 0

// ! %100 = 0

// %400 = 0


