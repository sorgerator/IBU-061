/*
1. Create an array of vegetables with values carrot and potato. Add tomato and cucumber using the appropriate function to the array, then use another function to remove the last element.
*/

let vegetables = ["carrot", "potato"];

vegetables.push("tomato", "cucumber");

vegetables.pop();

console.log(vegetables);

/*
2.This is the array nums = [10, 10, 20, 30, 30, 40]. Create a set from an array with duplicate values and return the Set’s size.
*/

let nums = [10, 10, 20, 30, 30, 40];

let uniqueNums = new Set(nums);

console.log(uniqueNums.size);

/*
3. Write a function getSqrt(n) that returns the square root of a number using built-in function in Math.
*/

function getSqrt(n) {
    return Math.sqrt(n);
};

console.log("Square Root of 16", getSqrt(16));

/*
4. Write a function listProperties(obj) that returns an array of all property values of the object  using bracket notation in a loop.
*/

function listProperties(obj) {
    let resultValues = [];

    for  (let key in obj) {
        resultValues.push(obj[key]);
    }

    return resultValues
};

const userProfile = {
    name: "Tarik",
    role: "Student",
    experience: 5,
    active: true 
};

let test = listProperties(userProfile);

console.log("Object Property Values: ", test);

/*
5. Write a function checkType(value) that returns the type of a given value.
*/

function checkType(value) {
    return typeof value;
};

console.log("Type of 'Hello': ", checkType("Hello"));
console.log("Tyoe of 100: ", checkType(100));

/*
6. Create an object teacher with the following properties: name with value Alice, subject with value Math, and years with value 5. Then delete the subject property from the teacher object.
*/

let teacher = {
    name: "Amila",
    subject: "Fundamentals of Web Development",
    years: 5
};

delete teacher.subject;

console.log("Teacher object after delete: ", teacher);

/*
7. Write a function getProperty(obj, key) that returns the value of the property of the object using bracket notation.
*/

function getProperty(obj, key) {
    return obj[key];
};

const laptop = {
    brand: "Lenovo",
    ram: "32GB"
};

console.log("Get 'brand': ", getProperty(laptop, "brand"));

/*
8. Write a function getCarColor(car) that takes a car object  and returns its color using dot notation.
*/

function getCarColor(car) {
    return car.color;
};

const myCar = {
    make: "Seat",
    color: "grey"
};

console.log("Car Color: ", getCarColor(myCar));

/*
9. Write a function roundNumber(num) that rounds a number to the nearest integer  using built-in function.
*/

function roundNumber(num) {
    return Math.round(num);
};

console.log("Round 4.7: ", roundNumber(4.7));
console.log("Round 4.2: ", roundNumber(4.2));

/*
10. Create a Date object for "2023-05-15" and return the year using the built in function.
*/

const d = new Date("2025-12-24");

let fullYear = d.getFullYear();

console.log(fullYear);

/*
11. Write a function isArray(data) that checks if the provided argument is an array.
*/

function isArray(data) {
    return Array.isArray(data);
};

console.log("Is [1, 2, 3] an array?: ", isArray([1, 2, 3]));
console.log("Is 'Apple' an array?: ", isArray("Apple"));

/*
12. Create an object person. The object has an attribute name with value Alice. Also, you should create a string greeting with the value "Hello" . Change the object’s property to Bob and the string to Hi. 
*/

const person = {
    name: "Amela"
};

let greeting = "Hello";

person.name = "Benjo";

greeting = "Hi";

console.log("Person Name: ", person.name);
console.log("Greeting: ", greeting);

/*
13. Create an empty object called student. Use bracket notation to add the property grade with the value "A".
*/

const student = {};

student["grade"] = "A";

console.log("Student Grade: ", student["grade"]);

/*
14. Create a Map that stores the population of three cities Paris with 2141000 people, London with 8982000, and Berlin with 3769000 and return the population of each city using .get().
*/

const populationMap = new Map([
    ["Paris", 2141000],
    ["London", 8982000],
    ["Berlin", 3768000]
]);

let london = populationMap.get("London");
let berlin = populationMap.get("Berlin");
let paris = populationMap.get("Paris");

console.log("Population of London is: ", london);
console.log("Population of Berlin is: ", berlin);
console.log("Population of Paris is: ", paris);

/*
15. Write a function getSetElements(set) that returns an array of all elements in a Set.
*/

function getSetElements(set) {
    return Array.from(set);
};

const mySet = new Set(["Apple", "Banana", "Orange"]);
console.log("Set Elements: ", getSetElements(mySet));

/*
16. Write a function getDynamic(obj, dynamicKey) that returns the value of an object property using a variable as the key (with bracket notation).
*/

function getDynamic(obj, dynamicKey) {
    return obj[dynamicKey];
};

/*
17. Write a function findMax(a, b, c) that returns the maximum of three numbers using built in function
*/

function findMax(a, b, c) {
    return Math.max(a, b, c);
};

console.log("Max of 10, 50, 20: ", findMax(10, 50, 20));