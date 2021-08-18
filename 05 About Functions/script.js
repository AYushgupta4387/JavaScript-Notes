"use strict";

// An example of higher order functions -
const oneWord = function (str) {
    return str.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ");
};

// This is the higher order function -
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`); // This is a method called on function.
};

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// An example of function returning function -
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

const firstName = "Ayush";

const greeting = greet("Hey!"); // Here greeting is a function, notice it's color.
greeting(firstName);

greet("Ssup?")("Esha"); // Another way to call a function that returns a function with an argument.

// MY NOTES - FUNCTIONS
// Default parameters -
/*
    -> Example - Here we have defined default values of numPassengers and price.
        const bookings = [];

        const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
            // Traditional ES5 method
            // numPassengers = numPassengers || 1;
            // price = price || 199;

            const booking = {
                flightNum,
                numPassengers,
                price,
            };
            
            console.log(booking);
            bookings.push(booking);
        };

        createBooking('LH123');
        createBooking('LH123', 2, 800);
*/

// IMPORTANT
/*
    -> When we pass a primitive type as an argument on a function, the function makes a copy of the ORIGINAL VALUE, and works with it.
    
    -> On the other hand, when we pass an object as an argument on a function, the function makes a copy of the REFERENCE that points to the place of the memory where the object is stored. This copy is a value itself, is not a reference. Because all of this, the original object can be modified from inside of a function.

    -> JavaScript is diff -
        -> In programming languages, Arguments can be passed by value, or passed by reference

        -> JS has not passing by reference, only passing by value...

        -> So, when we pass primitive values, the function works with a value, which is a copy of the original value

        -> When we pass an object, the function works with a value that address to the spot where the original object is in the memory (still is not a reference)

    -> We should never change the values of non-primitives like objects inside a function, because that can have unforseeable circumstances.
*/

// First-class functions -
/*
    -> It means that functions are simply values and just another type of objects.
    Therefore -
        -> We can store functions in variables or as object properties.
        -> We can pass functions as arguments in other functions.
        -> We can return functions from functions.
        -> We can call methods on functions.
        
// Higher-Order functions -
/* 
    -> It basically is a function that recieves a func as an arguement or it returns a func as an argument or both.
    Example - 
        const oneWord = function (str) {
            return str.replaceAll(" ", "").toLowerCase();
        };

        const upperFirstWord = function (str) {
            const [first, ...others] = str.split(' ');
            return [first.toUpperCase(), ...others].join(' ');
        };

        // This is the higher order function -
        const transformer = function (str, fn) {
            console.log(`Original string: ${str}`);
            console.log(`Transformed string: ${fn(str)}`);

            console.log(`Transformed by: ${fn.name}`);
        };

        transformer('JavaScript is the best!', upperFirstWord);
        transformer('JavaScript is the best!', oneWord);
*/
