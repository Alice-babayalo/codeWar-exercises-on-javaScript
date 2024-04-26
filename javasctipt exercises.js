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
