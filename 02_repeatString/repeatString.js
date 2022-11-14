function repeatString(string,num) {
    let repStr = '';
    if (num>0){
        for (i=0; i<num; i++){
            repStr += string;
        }
    } else if (num<0) {
        return 'ERROR';
    } else {
        return '';
    }
    return repStr
}
// Do not edit below this line
module.exports = repeatString;
