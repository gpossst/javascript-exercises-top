// create an array of the lifetimes of each people, sort the objects by age, return the largest
const findTheOldest = function(people) {
    let date = new Date(). getFullYear();
    people.forEach(person => {
        if (!person.yearOfDeath){
            person.age = date - person.yearOfBirth;
        } else {
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
    });
// finds age

    people.sort((a,b) => {return a.age - b.age});
//sorts objects by age key

    return people[people.length-1];
}

// Do not edit below this line
module.exports = findTheOldest;
