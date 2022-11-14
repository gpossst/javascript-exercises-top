const leapYears = function(leapYear) {
    let output
    if (leapYear % 400 == 0){
        output = true;
    } else if (leapYear % 4 == 0 && leapYear % 100 != 0){
        output = true;
    } else {
        output = false;
    }
    return output;
}

// Do not edit below this line
module.exports = leapYears;
