"use strict";

// MY NOTES - FUNDAMENTALS - 2
// Using strict mode -
/*
    -> To activate strict mode, we have to write ("use strict";) at the top of the JS file.
    -> It prevents us from creating new variables when we mis-type a variable name and therefore create a new one, by throwing an error.
    */

// Function Declarations vs. Expressions and Arrow functions
/*
    There are 3 ways to define a function, they are-
        1) Function declaration - In this way, we can first call a function and then later define it in the code below. Example -
        
        const age1 = calcAge1(1991);
        
        function calcAge1(birthYeah) {
        return 2037 - birthYeah;
        }
        
        2) Function expression - In this way, we cannot first call a function and then later define it in the code below. Example -

        const calcAge2 = function (birthYeah) {
            return 2037 - birthYeah;
        }
        const age2 = calcAge2(1991);

        3) Arrow functions - This way is best for writing one line functions.
        -> Example 1 - This example code has no parenthesis for parameter and no return word.
        const calcAge3 = birthYeah => 2037 - birthYeah;
        const age3 = calcAge3(1991);
        console.log(age3);

        -> Example 2
        const yearsUntilRetirement = (birthYeah, firstName) => {
        const age = 2037 - birthYeah;
        const retirement = 65 - age;
        return `${firstName} retires in ${retirement} years`;
        }
        console.log(yearsUntilRetirement(1991, 'Jonas')); 
        console.log(yearsUntilRetirement(1980, 'Bob'));
    */

// Basic Array Operations (Methods) -
/*
    1) arrayName.push(newArrayElement) - This method adds an element at the end of the array. This method returns the new length of the array.

    2) arrayName.unshift(newArrayElement) - This method adds an element at the start of the array. This method returns the new length of the array.

    3) arrayName.pop() - This method removes an element from the end of the array. This method returns the removed element of the array.

    4) arrayName.shift() - This method removes an element from the start of the array. This method returns the removed element of the array.

    5) arrayName.indexOf(arrayElement) - This method returns the index of the array element that we type in. It returns -1 if that element does not exists in the array.

    6) arrayName.includes(arrayElement) - This method returns true or false depending that element exists in the array or not.
    */

// JS Objects -
/*
    -> When we try to access a property that does not it exists, we get undefined as return value.
    -> Difference between dot and bracket notation - 
    NOTE - We use bracket notation whenever we want to use a variable name to refer to a property.

        const jonas = {
        firstName: 'Jonas',
        lastName: 'Schmedtmann',
        age: 2037 - 1991,
        job: 'teacher',
        friends: ['Michael', 'Peter', 'Steven']
        }; 

        const interestedIn = job;

        console.log(jonas.interestedIn); => This will return undefined.
        console.log(jonas[interestedIn]); => This will return "teacher". 

    -> We can even store functions in objects because function expressions are just values.
    Object methods are the functions inside the object. Example - 
        const jonas = {
        firstName: 'Jonas',
        lastName: 'Schmedtmann',

        calcAge: function (birthYeah) {
          return 2037 - birthYeah;
        }

    -> The best practice to call an object method is to call it once and then store it's result in a variable.
    Example - 
        const jonas = {
            firstName: 'Jonas',
            lastName: 'Schmedtmann',
            birthYeah: 1991,
            job: 'teacher',
            friends: ['Michael', 'Peter', 'Steven'],
            hasDriversLicense: true,

            // calcAge: function (birthYeah) {
            //   return 2037 - birthYeah;
            // }

            // calcAge: function () {
            //   return 2037 - this.birthYeah;
            // }

            calcAge: function () {
                this.age = 2037 - this.birthYeah;
                return this.age;
            }
        };

        console.log(jonas.calcAge());

        console.log(jonas.age);
        console.log(jonas.age);
        console.log(jonas.age);
    */

// CODING EXERCISES AND ASSIGNMENTS - FUNDAMENTALS - 2

/* const country = "India";
const population = "1.4 Billion";
const capitalCity = "New Delhi";

function describeCountry1(country, population, capitalCity) {
    return (`${country} has ${population} people and its capital city is ${capitalCity}.`);
}
console.log(describeCountry1(country, population, capitalCity));
console.log(describeCountry1("Nepal", "10 Million", "Katmaandu"));

const describeCountry2 = function (country, population, capitalCity) {
    return (`${country} has ${population} people and its capital city is ${capitalCity}.`);
}
console.log(describeCountry2(country, population, capitalCity));
console.log(describeCountry2("Nepal", "10 Million", "Katmaandu"));

const describeCountry3 = (country, population, capitalCity) =>  (`${country} has ${population} people and its capital city is ${capitalCity}.`);
console.log(describeCountry2(country, population, capitalCity));
console.log(describeCountry2("Nepal", "10 Million", "Katmaandu")); */

// CODING CHALLENGE 1
/* const calcAverage = function(score1, score2, score3) {
    return ((score1 + score2 + score3) / 3);
}

const team1Average = calcAverage(44, 23, 71);
const team2Average = calcAverage(95, 154, 49);

const checkWinner = function(team1Average, team2Average) {
    console.log(team1Average, team2Average);

    if(team1Average > (2 * team2Average)) {
        return (`Team 1 is the winner!`);
    } else if(team2Average > (2 * team1Average)) {
        return (`Team 2 is the winner!`);
    } else {
        return (`No team wins.`);
    }
}

console.log(checkWinner(team1Average, team2Average)); */

/* const population = ["1 Million", "1.2 Billion", "100 Million", "100 Thousand"];

if(population.length === 4) {
    console.log(true);
} else {
    console.log(false);
}

const newCountry = population.push("1");
console.log(newCountry);

const removedCountry = population.pop();
console.log(removedCountry); */

/* const ayush = {
    firstName: "Ayush",
    friends: ["Esha", "Shubhi", "Pratham"]
};

console.log(`${ayush["firstName"]} has ${ayush.friends.length} friends, and his best friend is called ${ayush.friends.shift()}.`); */

/* const myCountry = {
    country: "India",
    capital: "New Delhi",
    language: "Hindi",
    population: 12000000,
    neighbours: 7,

    describe: function() {
        return `${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours} neighbouring countries and a capital called ${this.capital}.`;
    },

    checkIsIsland: function() {
        if (this.neighbours > 0) {
            this.isIsland = true;
        } else {
            this.isIsland = false;
        }
    }
};

console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours} neighbouring countries and a capital called ${myCountry.capital}.`);

console.log(myCountry.describe());

myCountry.checkIsIsland();
console.log(myCountry.isIsland); */

// CODING CHALLENGE - 3
const mark = {
	fullName: "Mark Miller",
	weight: 108,
	height: 1.69,
	calcBMI: function () {
		this.markBMI = this.weight / this.height ** 2;
		return this.markBMI;
	},
};

const john = {
	fullName: "John Smith",
	weight: 92,
	height: 1.95,
	calcBMI: function () {
		this.johnBMI = this.weight / this.height ** 2;
		return this.johnBMI;
	},
};

mark.calcBMI();
john.calcBMI();

if (mark.markBMI > john.johnBMI) {
	console.log(
		`${mark.fullName} (${mark.markBMI}) has greater BMI than ${john.fullName} (${john.johnBMI}).`
	);
} else {
	console.log(
		`${john.fullName} (${john.johnBMI}) has greater BMI than ${mark.fullName} (${mark.markBMI}).`
	);
}
