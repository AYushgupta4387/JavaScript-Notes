"use strict";


// this keyword -
/* 
    -> "this" keyword is basically a special variable that is created for every execution context and therefore any function.​

    -> It will always take the value of the owner of the function in which, the this keyword is used.​

    -> The value of the "this" keyword is not static. It's not always the same. It depends on how the function is actually called. And its value is only assigned when the function is actually called.​

    -> If we console.log(this); We will get the window object.

​    -> Let's analyze four different ways in which functions can be called -

        1. Calling a function as an object method: 
            -> Here, "this" = Object that is CALLING the method.

            -> When we call a method, the this keyword inside that method will simply point to the object on which the method is called.​  
            
            -> Examples -
                const jonas = {
                    year: 1991,
                    calcAge: function () {
                        console.log(this);
                        console.log(2037 - this.year);
                    },
                };

                jonas.calcAge(); // Here, "this" points to jonas object

                const matilda = {
                    year: 2017,
                };

                matilda.calcAge = jonas.calcAge;
                matilda.calcAge(); // Here, "this" points to matilda object as matilda calls it.


        2. Simply calling function as a normal function: 
            -> Here, "this" = undefined​​

            -> However, that is only valid for strict mode. So if you're not in strict mode, this will actually point to the global object,​ which in case of the browser is the window object. 

            -> Example - 
                const calcAge = function (birthYear) {
                    console.log(2037 - birthYear);
                    console.log(this);
                };
                calcAge(1991); // Expected result - 46 "undefined"


        3. Arrow functions 
        -> Here, "this" = <"this" of parent function (lexical this)>​

        -> Arrow functions do not get their own "this" keyword. Instead, if you use the "this" keyword in an arrow function,​ it will simply be the "this" keyword of the surrounding function which is the parent function. In technical terms, ​this is called the 'lexical "this" keyword'.

        ​

        4. Event listener "this"
        -> Here, "this" = <DOM element that the handler is attached to>​

        -> If a function is called as an event listener, then the this keyword will always point to the DOM element ​that the handler function is attached to.​



    -> The "this" keyword points to the window object in three cases: ​
        a. if the "this" keyword is outside of any function (just outside in global scope)​
        Example -
            console.log(this);​ // Window object {...}​

        b. If the lexical scope (parent scope) of arrow function is global scope​
        Example - 
            const age = birthYear => {​
                console.log(birthYear);​
                console.log(this);​
            }​;
            ​
            age(1990);​ // 1990​
                       // Window object {...}​

        c. In case of regular function if you are not using strict mode​
        Example -

        const age = function (birthYear) {​
            console.log(birthYear);​
            console.log(this);​
        };​
        ​
        age(1990);​ // 1990​
                   // Window object {...}​​
*/
