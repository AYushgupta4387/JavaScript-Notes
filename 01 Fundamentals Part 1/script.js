// My version includes my notes and coding exercises done by me.

// NOTES - FUNDAMENTALS - 1

// LET, CONST and VAR
    /* 
    -> let and const were introduced in ES6.
    -> We use let when we want to allow a variable to change its value in the future,
    we use const when we don't want the same (immutable variable).
    -> Const variables cannot be initialized undeclared.
    -> By default, we should use const.
    */

// STRINGS AND TEMPLATE LITERALS
    /* 
    -> We can use backticks `` to declare strings anywhere.
    -> Using ``, creates a newline when we start writing on a new line. Check out the output of the code below -

    console.log(`Strings
    on
    new
    lines`);

    -> We can do any JS inside the curly braces.

    const firstName = "Ayush";
    const job = "Student";
    const birthYear = 2001;
    let currentYear = 2021;

    const ayush = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}.`;
    console.log(ayush);
    */

// TYPE CONVERSION AND COERCION
    /*
    -> Type conversion - When we manually convert a data type.
    Type coercion - When JavaScript does it automatically for us.
    -> To convert a string to a number, use Number() function. Example -
    
    const inputYear = `2001`;
    console.log(Number(inputYear), inputYear);

    -> To convert a number to a string, use String() function.
    -> Examples of type coercion -
        1) console.log(`I am ${20} years old.`); 
        Here, 20, that was a number is converted into a string.

        2) console.log("23" - "10" - 3);
        Here, 23 and 10, are converted to numbers.

        3) console.log("23" * "2");
        Here, 23 and 2, both are coverted to numbers and multiplication happens.

        NOTE - Only + operator coverts numbers to strings, every other mathematical or logical operator converts strings to number by type coercion.
    */

// TRUTHY AND FALSY VALUES 
    /*
    -> To convert any string/number to boolean, we can use Boolean() function.
    -> Falsy values - These are the values that when converted to boolean outputs false. They are
        1) 0
        2) Empty string ('')
        3) undefined
        4) null
        5) NaN
        
    -> Truthy values - Apart from the above values, all the other values output truth when converted to boolean.
    */        




// CODING ASSIGNMENTS AND EXERCISES - FUNDAMENTALS - 1 

/* const country = "India";
const continent = "Asia";
let population = 1400;

console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
const language = "Hindi";

console.log(typeof isIsland, typeof population, typeof country, typeof language); */

/* const markWeight = 78, johnWeight = 92, markHeight = 1.69, johnHeight = 1.95;
const markBMI = markWeight / (markHeight ** 2), johnBMI = johnWeight / (johnHeight ** 2);

if(markBMI > johnBMI) {
    console.log(`Marks's BMI (${markBMI}) is higher than John's BMI (${johnBMI}).`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI}).`);
} */

/* const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if(numNeighbours === 1) {
    console.log("Only 1 border!");
} else if(numNeighbours > 1) {
    console.log("More than 1 border");
} else {
    console.log("No broders");
} */

const team1Score1 = 97, team1Score2 = 112, team1Score3 = 50;
const team2Score1 = 109, team2Score2 = 95, team2Score3 = 50;

const team1AvgScore = (team1Score1 + team1Score2 + team1Score3) / 3;
const team2AvgScore = (team2Score1 + team2Score2 + team2Score3) / 3;

console.log(`Team 1 avg score = ${team1AvgScore} 
Team 2 avg score = ${team2AvgScore}`);

if ((team1AvgScore > team2AvgScore) && (team1AvgScore > 100)) {
    console.log("Team 1 is the winner");
} else if((team2AvgScore > team1AvgScore) && (team2AvgScore > 100)) {
    console.log("Team 2 is the winner");
} else if ((team1AvgScore > 100) && (team2AvgScore > 100) && (team2AvgScore === team1AvgScore)) {
    console.log("It's a draw!");
} else {
    console.log("No team wins! :(");
}

