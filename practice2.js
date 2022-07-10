//Write a JavaScript program to get the website URL (loading page)

document.getElementById("demo").innerHTML =
    "The full URL of this page is:<br>" + window.location.href;

// Write a JavaScript program to print the contents of the current window

function print_current_page() {
    window.print();
}

// Write a JavaScript function that reverse a number


const num = 12345;

const reverse = (num) => parseInt(String(num)
    .split(' ')
    .reverse()
    .join(' '), 10);

console.log(reverse(num))


// Random number between 1 - 10

// let theRandomNumber = Math.floor(Math.random() * 10) + 1
// console.log(theRandomNumber)
// let chosenNumber = prompt("Enter a number")

// if (theRandomNumber === chosenNumber) {
//        console.log("Good Work")
// }else {
//      console.log("Not Matched")
// }


// Get the extension of a filename

let filename = "index.js";
let extension = filename.split(".").pop();

console.log(extension)

// Compute the sum of the two given integers. 
// If the two values are same, then returns triple their sum

function sumTriple(num1, num2) {
    if (num1 === num2) {
        return 3 * (num1 + num2);
    } else {
        return (num1 + num2)
    }
}
console.log(sumTriple(10, 30))
console.log(sumTriple(10, 10))

// check two given numbers and return true if one of the number is 50
// or if their sum is 50

function givenNumbers(x, y) {
    return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(givenNumbers(25, 25))
console.log(givenNumbers(30, 45))
console.log(givenNumbers(50, 20))

// check from two given integers, whether one is positive and
//  another one is negative 

let number1 = prompt('Enter a number');

if (number1 > 0) {
    console.log("The number is positive");
} else if (number1 == 0) {
    console.log("The number is zero")
} else {
    console.log("The number is negative")
}

// let number = prompt("Enter a number")

// switch (number) {
//     case (number > 20):
//         console.log("The number is positive")
//         break;

//     case (number < 100):
//         console.log("The number is negative")
//         break;

//     default:
//         break;
// }

// remove a character at the specified position of a given string and
// return the new string



function removeCharacter(str, char_pos) {
    string1 = str.substring(0, "")
    string2 = str.substring(char_pos + 1, str.length)
    return (string1 + string2)
}

console.log(removeCharacter("Niclas", 0));
console.log(removeCharacter("Niclas", 3));
console.log(removeCharacter("Niclas", 5));


// Program to check whether a string starts with 'world' and false otherwise



// let text = "Hello world, welcome to the universe.";
// let result = text.startsWith("world");
// document.getElementById("demo").innerText = result;



// Function that checks whether a passed string is palindrome or not?

// function checkPalindrome(str) {

//     // Find the length of string
//     const len = str.length;

//     // loop through half of the string
//     for (let i = 0; i < len / 2; i++) {

//         // check if first and last string are same
//         if (string[i] != string[len - 1 - i]) {
//             return "It is not a palindrome";
//         }
//     }
//     return "It is a palindrome";
// }

// // input
// let string = prompt("Enter a string");

// // call the function
// const value = checkPalindrome(string);

// console.log(value);

// Function that checks whether a passed string is palindrome or not?


function palindrome(str) {
    const reversed = str
        .split('')
        .reverse()
        .join('');

    return str === reversed;
}

// Write a JavaScript function that generates all combinations of a string.

function generateCombinations(combinations) {
    let list_of_strings = [];
    for (let i = 0; i < combinations.length; i++){ 
    for (let j = 0; j < combinations.length + 1; j++){ 
    list_of_strings.push(combinations.slice(i, j))
}
}
return list_of_strings
}
console.log(generateCombinations("dog"))

// function that returns a passed string with words in alphabetical order

let words = ["javascript", "html", "css"];
words.sort(function(a, b){
    return a.length - b.length;

});
console.log(words)
window.alert(words)


// Copy string to clipboard

// Get the text field
let copyText = document.getElementById("myInput");

// Select the textfield
copyText.select();
copyText.setSelectionRange(0, 99999); // For mobile devices

// Copy the text inside the text field
navigator.clipboard.writeText(copyText.value);

alert("Copied the text: " + copyText.value);

//  Remove a character at the specified position of a given
//  string and return the new string

function remove_character(str, char_pos) 
 {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
 }
 console.log(remove_character("Python",0))
