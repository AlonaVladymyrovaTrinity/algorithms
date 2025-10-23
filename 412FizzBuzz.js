// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
 

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 

// Constraints:

// 1 <= n <= 104

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  var ansver = [];
  for (var i = 1; i < n + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      ansver.push("FizzBuzz");
    } else if (i % 3 === 0) {
      ansver.push("Fizz");
    } else if (i % 5 === 0) {
      ansver.push("Buzz");
    } else {
      ansver.push(i.toString());
    }
  }
  return ansver;
};

console.log(fizzBuzz(15));

//------------------

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
     let answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(
            i % 3 === 0 && i % 5 === 0 ? "FizzBuzz" : 
            i % 3 === 0 ? "Fizz" : 
            i % 5 === 0 ? "Buzz" : 
            i.toString()
        )
    }
    return answer;
};

console.log(fizzBuzz(15));

//---------------------

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  var ansver = [];
  for (var i = 1; i < n + 1; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      ansver[i - 1] = "FizzBuzz";
    } else if (i % 3 === 0) {
      ansver[i - 1] = "Fizz";
    } else if (i % 5 === 0) {
      ansver[i - 1] = "Buzz";
    } else {
      ansver[i - 1] = `${i}`;
    }
  }
  return ansver;
};

console.log(fizzBuzz(15));

//---------------------------

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  var ansver = [];
  for (var i = 1; i < n + 1; i++) {
    ansver.push(i.toString());
    if ((Number.isInteger(i / 3)) && (Number.isInteger(i / 5))) {
      ansver.splice(i - 1, 1, 'FizzBuzz');
    } else if (Number.isInteger(i / 3)) {
      ansver.splice(i - 1, 1, 'Fizz');
    } else if (Number.isInteger(i / 5)) {
      ansver.splice(i - 1, 1, 'Buzz');
    }
  }

  return ansver;
};

console.log(fizzBuzz(15));