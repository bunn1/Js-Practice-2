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

let filename ="index.js";
let extension = filename.split(".").pop();

console.log(extension)

// Compute the sum of the two given integers. 
// If the two values are same, then returns triple their sum

function sumTriple(num1, num2) {
    if (num1 === num2) {
        return  3 * (num1 + num2);
    }else
    {
        return (num1 + num2)
    }
}
console.log(sumTriple(10, 30))
console.log(sumTriple(10, 10))

