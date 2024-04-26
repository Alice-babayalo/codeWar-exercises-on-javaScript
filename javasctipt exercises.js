/* 
Qn 1. Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"
*/

function spinWords(sentence){
  //TODO Have fun :
   const words = sentence.split(" ");
    
    // Reverse words with 5 or more letters
    const reversedWords = words.map(word => {
        if (word.length >= 5) {
            return word.split("").reverse().join("");
        } else {
            return word;
        }
    });
    
    // Join the words back into a sentence
    return reversedWords.join(" ");
}

console.log(spinWords("What is your name"))
console.log(spinWords("my collegue is handsome"))


/*
Qn 2.  Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
  */


var countBits = function(n) {
  // Program Me
    // Convert the integer to its binary representation
    const binaryString = n.toString(2);
    
    // Count the number of '1's in the binary string
    let count = 0;
    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '1') {
            count++;
        }
    }
    
    return count;
};
// Test case

const number = 81
console.log("The number of ones in the binary number of " +number+" is "+countBits(number)); // Output: 5
