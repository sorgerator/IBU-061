/*
1. Write a function countVowels(str) that returns the number of vowels in a string.
*/

function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count++;
        } 
    }
    return count;
};

/*
2. Write an arrow function absolute that returns the absolute value of a number.
*/

const absoluteNumber = (num) => {
    if (num < 0) {
        return num * -1;
    } else {
        return num;
    }
};
 
/*
3. Write an arrow function isPalindrome that checks if a string reads the same forwards and backwards.
Hint: You need to use split, reverse and join functions
*/

const isPalindrome = (str) => {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}

/*
4. Write an arrow function sign that returns "positive", "negative", or "zero" based on the input number.
*/

const sign = (num) => {
    if (num > 0) {
        return "positive";
    } else if (num === 0) {
        return "zero";
    } else {
        return "negative";
    };
};

/*
5. Write an arrow function greet that takes a name and returns "Hello, [name]!". If no name is given, use "Guest" as default.
*/

const greet = (name) => {
    if (name === undefined) {
        return "Hello, Guest!";
    } else {
        return "Hello, " + name + "!";
    };
};

/*
6. Write a function firstChar(str) that returns the first character in a string.
*/

function firstChar(str) {
    return str[0];
};

/*
7. Write a function reverseString(str) that takes a string and returns it reversed.
*/

function reverseString(str) {
    return str.split("").reverse().join("");
};

/*
8. Define an arrow function sumArray that takes an array of numbers and returns their sum.
*/

const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
};

/*
9. Create an arrow function filterEven(numbers) that takes an array and returns a new array containing only even numbers.
*/

const filterEven = (numbers) => {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            result.push(numbers[i]);
        }
    }

    return result;
}

/*
10. Write a function capitalizeWords(sentence) that capitalizes the first letter of every word in a sentence.
*/

function capitalizeWords(sentence) {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return words.join(" ");
};

/*
11. Write a function findLongestWord(sentence) that returns the longest word in a given sentence.
*/

function findLongestWord(sentence) {
    let words = sentence.split(" ");
    let longest = words[0] || "";
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return longest;
};

/*
12. Create an arrow function removeDuplicates(arr) that removes duplicate values from an array.
*/    

const removeDuplicates = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) == -1) {
            result.push(arr[i]);
        }
    }

    return result;
};