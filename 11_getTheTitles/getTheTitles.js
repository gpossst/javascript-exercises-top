// loop through the array of objects, take the titles, and push those titles to a new array
const getTheTitles = function(array) {
    let newArray=[]
    for (i=0 ; i < array.length; i++){
        newArray.push(array[i].title)
    }
    return newArray
};

// Do not edit below this line
module.exports = getTheTitles;
