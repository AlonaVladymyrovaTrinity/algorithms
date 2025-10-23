// Given a string, write a function that counts the number of appearances of each letter in the string. The function should print out each letter and its number of appearances, it does not return anything.
// Keep in mind that it should have a good function and variable names, good indentation and comments (if needed), and please also send me the Big-O, your edge cases and 1-2 examples, and any clarifying questions you would ask your interviewer. 
// Example:
// Input: "hellohowareyou"
// Output: h: 2, e: 2, l: 2, o: 3, w: 1, a: 1, r: 1, y: 1, u: 1  (note: order does not matter)
// 1. Listen carefully = Ask clarifying questions:
// - Should the function count only letters (ignore spaces, numbers, punctuation)?
// For example: "hi!" or "hello world"?
// * Assume we count all characters (letters, spaces, symbols — if they appear)
// - Should the count be case-sensitive? 
// For example: Should 'H' and 'h' be treated as the same letter?
// * In the example "Hello" is not mixed-case, so probably case-sensitive is NOT required, and it's okay to convert to lowercase before counting 
// - What should I do if the input is not a string? Should I return, throw an error, or ignore it?
// * Assume invalid input (not a string) should return null
// 2. Example / Edge cases
// Input: "hellohowareyou"
// Output: h: 2, e: 2, l: 2, o: 3, w: 1, a: 1, r: 1, y: 1, u: 1
// (Normal case with repeating letters)
// Input: "hello! how are you?"
// Output: h: 2, e: 2, l: 2, o: 3, w: 1, a: 1, r: 1, y: 1, u: 1
// Output: 'h': 2, 'e': 1, 'l': 2, 'o': 3, '!': 1, ' ': 2, 'w': 1, 'a': 1, 'r': 1, 'y': 1, 'u': 1, '?': 1 
// ( Case with different characters: letters, spaces, symbols)
// Input: "Hellohowareyou"
// Output: h: 2, e: 2, l: 2, o: 3, w: 1, a: 1, r: 1, y: 1, u: 1
// (Mixed case, tests if lowercase conversion works)
// Input: ""
// Output: (prints nothing)
// (Edge case: empty string)
// 3. Brute Force:
// - Loop through each character in the string.
// - For each character, loop again through the entire string to see how many times it appears.
// - Keep a separate array of already-counted characters to avoid recounting.
// - Print out each character and its frequency.
// - Time Complexity is O(N^2) because of the nested loop.
function numberCounts(inputStr) {
  if (typeof inputStr !== "string") return null;
  let lowerCaseString = inputStr.toLowerCase();
  let countedChars = [];
  for (let i = 0; i < lowerCaseString.length; i++) {
    // Skip if already counted
    if (countedChars.includes(lowerCaseString[i])) {
      continue;
    }
    let count = 0;
    // Count occurrences
    for (let j = 0; j < lowerCaseString.length; j++) {
      if (lowerCaseString[j] === lowerCaseString[i]) {
        count++;
      }
    }
    console.log(lowerCaseString[i] + ": " + count);
    countedChars.push(lowerCaseString[i]);
  }
}
numberCounts("hellohowareyou");
console.log("-----");
//4 Optimize 
//We can try to reduce the time complexity from O(N^2) to O(N) using hashmap
// Instead of using nested loops, use a hashmap to track counts as we go.
// Build an object that stores each character as the key and the number of times it appears as the value.
//
// Example output for "hellohowareyou":
// {
//   h: 2,
//   e: 2,
//   l: 2,
//   o: 3,
//   w: 1,
//   a: 1,
//   r: 1,
//   y: 1,
//   u: 1
// }
// This allows us to process everything in a single pass.
// Time Complexity: O(N)
// 5. Pseudocode
// - Create an empty object to serve as a hashmap
// - Loop through each character in the string
// - For each character:
//    - If it's already in the object, increment its count
//    - If not, add it with value 1
// - After the loop, do another loop to print each character and its count
// - Time Complexity is O(N)
//6. Code it
function numberCounts2(inputStr) {
  if (typeof inputStr !== "string") return null;
  const lowerCaseString = inputStr.toLowerCase();
  const stringHashMap = {};
  // Count each character
  for (let i = 0; i < lowerCaseString.length; i++) {
    const currChar = lowerCaseString[i];
    if (stringHashMap[currChar]) {
      stringHashMap[currChar] += 1;
    } else {
      stringHashMap[currChar] = 1;
    }
  }
  // Print each key and count
  for (const char in stringHashMap) {
    console.log(char + ": " + stringHashMap[char]);
  }
}
numberCounts2("hellohowareyou");
//7.Big-O
//Since:
//- We loop through the string once: O(N)
//- Each lookup/update in the hashmap is constant time: O(1)
//Total Time and Space Complexity: O(N)