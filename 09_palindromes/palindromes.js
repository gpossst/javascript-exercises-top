const palindromes = function (string) {
    let stringA = string.toLowerCase().replace(/[\W_]/g,'');
    let stringB = stringA.split('').reverse().join('');
    return stringA == stringB;
};

// Do not edit below this line
module.exports = palindromes;
