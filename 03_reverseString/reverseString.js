const reverseString = function(string) {
    const strArray = string.split('');
    const revArray = strArray.reverse();
    const newString = revArray.join('');
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
