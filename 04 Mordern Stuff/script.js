"use strict";

const openingDays = ["thu", "fri", "sat"];

// NOTE - We can even use stuff outside object to set names of the properties, note the syntax though.
const openingHours = {
    [openingDays[0]]: {
        open: 12,
        close: 22,
    },
    [openingDays[1]]: {
        open: 11,
        close: 23,
    },
    [openingDays[2]]: {
        open: 1,
        close: 24,
    },
};

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    openingHours, // This is how we can include objects inside object.
    // NOTE - We cannot include an object that is defined after this object.

    // There are 2 ways to define a method in an object, they are
    // 1) The usual way
    foodServed: function (food) {
        console.log(`${food} is served.`);
    },

    // 2) New ES6 way
    orderPasta(ing1, ing2, ing3) {
        console.log(
            `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
        );
    },

    // In this function we can input as many arguments as wee want
    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(`Your main ingredient is ${mainIngredient}.`);
        console.log(`Your other ingredients are ${otherIngredients}`);
    },
};

// AMAZING EXAMPLE !!!!!
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
};

add(2, 3);
add(4, 5, 2, 4, 5, 7, 8);

const x = [23, 4, 5, 3];
add(...x); // Here, it's spread operator, it first upacks the array, then the elements again become an array by the rest operator defined in the function.

// AMAZING EXAMPLE !!!!!
const entries = Object.entries(openingHours);

for (const [key, { open, close }] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// AMAZING EXAMPLE !!!!!
const capitalizeName = function (name) {
    const names = name.split(" ");
    const correctName = [];

    for (const n of names) {
        // correctName.push(n[0].toUpperCase() + n.slice(1)); // First way
        correctName.push(n.replace(n[0], n[0].toUpperCase())); // Second way
    }
    console.log(correctName.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("jonas schmedtmann");

// MY NOTES - DATA STRUCTURES, MORDERN OPERATORS AND STRINGS
// Destructing Arrays -
/*
  -> It means to covert the elements of arrays into individual variables.
  Example - 
    const arr = [2, 3, 4];
    const [x, y, z] = arr; => Here, three variables are created, named, x = 2, y = 3 and z = 4.

    const [a, , b] = arr; => Here, a = 2 and b = 4. Second element of array is skipped.
  
  -> To switch the values of 2 variables, we can again use destructing arrays.
  This is called mutating variables.
  Example -
    let main = 2, secondary = 3;
    [main, secondary] = [secondary, main]; => Here the 2 variables are switched.

  -> Nested destructing - Example
    const nested = [2, 3, [4, 5]];
    const [i, , [j, k]]; => Here, i = 2, j = 4, k = 5.

  -> We can also set the variables to default value. Example -
    const [p = 1, q = 1, r = 1] = [8, 9]; => Here, p = 8, q = 9, r = 1.
  */

// Destructing Objects -
/*
    -> Same as destructing arrays.
    Exaple -
    const {
        name: restaurantName, 
        categories: cat
    } = restaurant. // Here 2 variables are created with their names as restaurantName, cat. 

    -> Nested objects destructing -
    const {
        openingHours: {fri: {open, close}}
    } = restaurant; // This will create 2 variables with their name as open and close.
*/

// The spread operator "..." -
/*
    -> It spreads the values of an array separately.
    Example -
        array = [1, 2, 3];
        const badNewArray = [3, 4, ...array]; // Expected result - [3, 4, 1, 2, 3]
        console.log(...badNewArray); // Expected result - 3 4 1 2 3 

    -> To copy an array -
        const mainMenuCopy = [...restaurant.mainMenu];

    -> To concat two arrays -
        const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];

    -> Example of how to use spread operator to give multiple inputs to a function.
        const ingredients = [
            prompt("Let's make pasta! Ingredient 1?"),
            prompt('Ingredient 2?'),
            prompt('Ingredient 3'),
        ];

        restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // Traditional method
        restaurant.orderPasta(...ingredients);

    -> Using spread operator to make a new object -
        const newRestaurant = {foundedIn: 1998, ...restaurant, founder: AYush};
*/

// The Rest operator "..." -
/*
    -> It has the same syntax as the spread operator, but it does the opposite of it.
    It packs the separate variables into an array.
    Examples - 
        -> SPREAD, because on the RIGHT side of "="
        const arr = [1, 2, ...[3, 4]]; // Expected result - arr = [1, 2, 3, 4]

        -> REST, because on the LEFT side of "="
        const [a, b, ...others] = [1, 2, 3, 4, 5]; // Expected result - a = 1, b = 2, others =[3, 4, 5]

        -> Example with both -
        const [pizza, , risotto, ...otherfood] = [...restaurant.mainMenu, ...restaurant.starterMenu]; 

    -> Using rest operator to create objects - Same as arrays, it creates an object instead of an array.
    Example -
        const {sat, ...weekdays} = restaurant.openingHours;

    -> Using rest operator in functions - Here we pass numbers separated by a comma, even though the function expects only a single input. The rest operator here, converts the separate numbers into an array. This method is more preferred because now we can input separate numbers as well as arrays.
    Example -
        const add = function (...numbers) {
            let sum = 0;
            for (let i=0; i<numbers.length; i++) {
                sum += numbers[i];
            };
            console.log(sum);
        };

        add(2, 3);
        add(4, 5, 2, 4, 5, 7, 8,);

        const x = [23, 4, 5, 3];
        add(...x); // Here, it's spread operator, it first upacks the array, then the elements again become an array by the rest operator defined in the function.
*/

// The for of loop -
/*
    -> Example -
    for (const item of menu) { console.log(item); }; 
    // This creates a variable called item for each iteration.
*/

// Optional Chaining (Feature of ES2020) -
/*
    -> It is used for chaining nested objects. It checks wether the property written before "?" exists or not
    Example -

        // The usual way -
        console.log(restaurant.openingHours.mon.open); // Expected result - error | because "mon" is not a property of "openingHours". 

        // With optional chaining -
        console.log(restaurant.openingHours.mon?.open); // Expected result - undefined | This will stop at "mon" because it is not defined.
        
    Another Example -
        const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
        for (const day of days) {
            const open = restaurant.openingHours[day]?.open || "closed"; 
            // If "closed" was not there, we would get "undefined".
            
            console.log(`On ${day}, we open at ${open}`);
        };
    
    -> Optional Chaining also works for methods. Here it comes b/w the method name and parameters.
    Example -
        console.log(restaurant.orderFood?.(0, 1) || "Method does not exists"); // This will check if the method defined before the "?" exists or not.

    -> Optional chaining also works for arrays. It basically checks if an array is empty.
    Example -
        const users = [{name: "Ayush", age: 20}];
        console.log(users[0]?.name ?? "User array is empty");
*/

// Looping over objects (Object.keys(), Obejct.values(), Object.entries())
/*
    -> We can even loop over objects.
        // Property NAMES - This will create an array of property names.
        Example -
            const properties = Object.keys(openingHours);
            console.log(properties); // Expected output - An array - ["thu", "fri", "sat"]

            let openStr = `We are open on ${properties.length} days:`;
            for (const day of properties) {
                openStr += `${day}, `;
            };
            console.log(openStr);
        
        // Property VALUES - This will create an array of property values.
        Example -
            const values = Object.values(openingHours);
            console.log(values);

        // Entire object - This will create an array, with each element being a key-value pair.
        Example -
            const entries = Object.entries(openingHours);

            for (const [key, {open, close}] of entries) {
                console.log (`On ${key} we open at ${open} and close at ${close}`);
            };
*/

// Sets
/*
    -> It is another data structure that only stores unique values.
    Example - 
        const orderSet = new Set([
           "Pasta",
           "Pizza",
           "Pizza",
           "Pasta",
           "Risotto",
           "Pasta" 
        ]);

        console.log(orderSet); // Expected result - {"Pasta", "Pizza", "Risotto"}
    
    -> They can be used for all iterables.
    Example - 
        console.log(new Set("Jonas")); // Expected reuslt - {"J", "o", "n", "a", "s"}

    -> There length can be calculated using the "size" method.

    -> It can also be checked if the set includes some element using "has" method.
    Example -
        console.log(orderSet.has("Pasta")); // Expected result - "true"
    
    -> We can add elements to sets using "add" method, and we can remove elements using "delete" method.

    -> We can convert a set to an array -
        const newOrder = [...new Set(orderSet)]; // Expected result - ["Pasta", "Pizza", "Risotto"]
*/

// Maps
/*
    -> Maps are also a data structure that works similar to objects apart from the fact that keys can be anything in maps whereas in objects, they can only be strings.
    Example -
        const rest = new Map(); // Best practice is to create an empty map first.
    
    -> To add an entry to map, we use set() property.
    Example - 
        rest.set('name', 'Classico Italiano');
        rest.set(1, 'Firenze, Italy');

        console.log(rest.set(2, 'Lisbon, Portugal')); // This return the map with added properties.

    -> We can even chain the set() properties.
    Example -
        rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
            .set('open', 11)
            .set('close', 23)
            .set(true, 'We are open :D')
            .set(false, 'We are closed :(');
    
    -> Example -
    const time = 21;
    console.log(rest.get(time > rest.get("open") && time < rest.get("close"))); 
    // Expected result - "We are open :D"

    -> We can delete entries using delete() property. It also has has() and size() method.
*/

// STRINGS
/*
    -> Examples -
        const airline = 'TAP Air Portugal';
        const plane = 'A320';

        console.log(plane[0]);
        console.log(plane[1]);
        console.log(plane[2]);

        console.log('B737'[0]);

        // length method -
        console.log(airline.length);
        console.log('B737'.length);

        // indexOf() method 
        console.log(airline.indexOf('r'));

        // lastIndexOf() method - This gives the index of last occurence
        console.log(airline.lastIndexOf('r'));
        console.log(airline.indexOf('portugal'));

        // slice() method - 
        -> slice(startingIndex, endingIndex)
        -> If we only give startingIndex, it will extract the whole string starting from startingIndex.
        -> startingIndex is included and endingIndex is excluded. 
        -> Length of new string = endingIndex - startingIndex
        -> Examples -
            console.log(airline.slice(4));
            console.log(airline.slice(4, 7));
            console.log(airline.slice(0, airline.indexOf(' ')));
            console.log(airline.slice(airline.lastIndexOf(' ') + 1));

        -> We can also use negative index, which starts from end.
        Examples -
            console.log(airline.slice(-2));
            console.log(airline.slice(1, -1));

        // Changing case -
        -> .toLowerCase()
        -> .toUpperCase()
        -> Example - Convert "AyuSH" to "AYush"
            const firstName = "AyuSH";
            const lowerFirstName = firstName.toLowerCase();
            const newFirstName = lowerFirstName[0].toUpperCase() + lowerFirstName[1].toUpperCase() + lowerFirstName.slice(2);

            console.log(newFirstName);
        
        // Removing white-spaces -
        -> .trim()

        // Replacing strings -
        -> .replace("part of string to remove", "new string to be added their")
        -> Example -
            const announcement = "All doors will be closed soon! All doors will be closed soon!"; // replace doors with gates
            newAnnouncement = announcement.replace("doors", "gates").replace("doors", "gates"); // replace() method replaces the first instance only.

        -> We can also use .replaceAll().

        // Booleans - These methods returns booleans.
        -> .includes()
        -> .startsWith()
        -> .endsWith()

        // Example -
            const checkBaggage = function (items) {
                const baggage = items.toLowerCase(); // This is the most important part.

                if (baggage.includes('knife') || baggage.includes('gun')) {
                    console.log('You are NOT allowed on board');
                } else {
                    console.log('Welcome aboard!');
                }
            };

            checkBaggage('I have a laptop, some Food and a pocket Knife'); // 'You are NOT allowed on board'
            checkBaggage('Socks and camera'); // 'Welcome aboard!'
            checkBaggage('Got some snacks and a gun for protection'); // 'You are NOT allowed on board'

        // Split and join 
        -> split() is to split a big string into array elements on the basis of a separator and vice-versa for join().
        Example - 
            console.log('a+very+nice+string'.split('+')); // ["a", "very", "nice", "string"]
            console.log('Jonas Schmedtmann'.split(' '));

            const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

            const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
            console.log(newName); // "Mr. Jonas SCHMEDTMANN"

*/

// Data needed for a later exercise
const flights =
    "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
