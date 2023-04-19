const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
]

  let findTheOldest = people.reduce((prev, current) => {
    const currentYear = (new Date()).getFullYear();
    let prevYearsLived = prev.yearOfDeath - prev.yearOfBirth; 
    let currentYearsLived = current.yearOfDeath - current.yearOfBirth;
    if (prev.yearOfDeath === undefined) {
        prevYearsLived = currentYear - prev.yearOfBirth; 
    } else if (current.yearOfDeath === undefined) {
        currentYearsLived = currentYear - current.yearOfBirth;
    }
    return (prevYearsLived > currentYearsLived) ? prev : current;
});


// Do not edit below this line
module.exports = findTheOldest;

