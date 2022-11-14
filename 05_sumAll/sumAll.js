const sumAll = function(first, second) {
    if (first < 0 || second < 0 || typeof first != 'number' || typeof second != 'number') {
        return 'ERROR';
    } else {
        let sum = 0;
        if (first>second){
            for (let i = second; i <= first; i++) {
                sum = sum + i;
            }
        } else {
            for (let i = first; i <= second; i++){
                sum = sum + i;
            }
        }
        return sum;
    }
}
  module.exports = sumAll