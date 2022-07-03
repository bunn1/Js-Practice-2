//Write a JavaScript program to get the website URL (loading page)

document.getElementById("demo").innerHTML =
    "The full URL of this page is:<br>" + window.location.href;

// Write a JavaScript program to print the contents of the current window

// function print_current_page() {
//     window.print();
// }

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
 }
    else if (number1 == 0) {
        console.log("The number is zero")
    }
    else{
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



function removeCharacter (str, char_pos) {
    string1 = str.substring(0, "")
    string2 = str.substring(char_pos + 1, str.length)
    return (string1 + string2) 
}

console.log(removeCharacter("Niclas",0));
console.log(removeCharacter("Niclas",3));
console.log(removeCharacter("Niclas",5));


// let string1 = "Welcome to my home"
// let result = string1.indexOf ("Welcome")
// document.getElementById("computeSum").innerHTML = result;

