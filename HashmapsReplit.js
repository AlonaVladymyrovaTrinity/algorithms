/* QUESTION: Question: Given an array of integers, find the most frequently occurring number and return it.

Natalia
Sam Cabrera
Carlos Cano
Irene
Cee
Ignat
Tim
Sam G

Listen Carefully
What are we expected to return if the data type that is passed in is not an array of integers? - Sam Cabrera [null]
Find frequently occuring NUMBER
Is the array sorted? [no]
If sorted is the array sorted in descending or ascending order?
Can we sort the array? [yes]
Is there a case where two integers occur the same amount of max times? [return one of them (either one)]
What if all the numbers are unique (occur 1 time each)?
Do we need to list the total number of times all integers appear in the array? [just the number with the most frequent appearances]
what if we find 2 numbers the same amout of times, do we retun both?, like  [7,7,7,7,1,2,3,3,3,3,3,5]
[1,2,3,3,3,3,3,5,7,7,7,7]

Example / Test Cases
[1, 222, 333, 333, 333, 333, 2] // => 333
[3,3,23,23,23,23,23,56,56,67,78,78,78] =>23 3
[9, 32, 53, 53, 53, 1, 20] // 53(3)
[101, 1, 1001, 23, 35, 100, 101, 6] -> [101]
[1] //1
[33, 89, 5462, 0, -45, 33, '2'] // 33
[-5, 0, 0, -5 , 7, 3, 3, -5] => -5; edge cases: [] => null; [-5, -5, 0, -17, -17] => -5 or -17
[2,7,-6,0,34,2,7,1,4] // 2

[7,7,7,1,2,3,3,3,3,5], // 3


Brute Force
[101, 1, 1001, 23, 35, 100, 101, 6]
Loop for each element, take this element and make another loop to go through array and count how many elements inside it with the same value. O(N^2)

"bunny"

{
'b': 1,
'u': 1,
'n': 2,
'y': 1
}

Keep a var count and var prevInt. Sort array. For integer in array, if integer === prevInt, count += 1.
Make a loop that will count each number then return the values
O(nlogn)


create empty constant, loop throught array, hol d

//declare variable for array of integers
//declare variable for empty array that will store all integers that have been looped through by array example numberOfTimesIntegerAppears
//declare variable for counter
//loop through each element in array then push current element into empty array(numberOfTimesIntegerAppears)
//loop through previously empty array and check number of times that an integer
//return the integer that appears most after looping through numberOfTimesIntegerAppears array

Optimize

Create a count object that stores the integers as keys and their count as values. Then use a for-in loop to find the key with highest count;

Loop through this array and start creating dictionary: if this number we see for the first time (no such key in the dictionary), then add this number as a key to the dictionary and also make value ===1. If number is already present as key in the dictionary, then take current value and 1. 

use array method filter or reduce to avoid nested loops, return integer that appears the most in the array

Pseudocode
// 1. Create function that will implement a hashmap? (count object) 2. Create variable 'mostFrequent' and assign its value to 0; 3. Use for-in loop to loop through hashmap (object?). Then within that for-in loop, use a boolean that will assign/re-assign itself to the current key in accordance to whether or not the current key[value] pair is larger than the value of mostFrequent variable; 5: return mostFrequent variable


****


1. create empty dictionar2y
for each element of array:
- take element 

//declare variable for integer array
//declare counter variable
//create function (a) that creates hashmap with key for integer and value for counter
//invoke function (a)
//check that hashmap list integers correctly
//create function that returns number of integer that appears most in array

// create empty hashmap
// sort integer array
// for integer in array, add integer to hashmap as key and value = count =+ 1
// return highest...

// create empty hashmap
// go through array, and for each number:
//   if hashmap[number]:
//     hashmap[number] = hashmap[number] + 1
//   else: 
//     hashmap[number] = 1;
// 
// get array of hashmap values, take max 


Code it!
*/
//O(2N) = O(n)
const getMaxValue = (array) => {
  // Big 0: O(n);
  let countObj = array.reduce((acc, curr) => {
    if(!acc[curr]) {
      acc[curr] = 1;
    } else {
    acc[curr]++;
    }
    return acc;
  }, {});

  let mostFrequent = 0;
  //Big O: O(n)?
  for(let number in countObj) {
    if (countObj[number] >= mostFrequent) {
    mostFrequent = number;
    }
  };
  return mostFrequent;
};

console.log(getMaxValue([1, 2, 3, 3, 3, 6,6]));


//declare array of integers
const arrayOfIntegers = [99, 44, 23, 44, 44, 23]

//declare new hashmap
const integerCountMap = {}

//declare counter variable that will track integer that appears the most in the array of integers
let intThatAppearsMostInArray
let maxCount = 0

function getCountForArrayOfIntegers(array) {
  //loop through array to set integer count map
  for (const integer of arrayOfIntegers) {
    //if integer exist increment count
    if (integerCountMap[integer]) {
      integerCountMap[integer]++
    } else {
      integerCountMap[integer] = 1
    }
  }
  return integerCountMap
}
getCountForArrayOfIntegers(integerCountMap)
console.log("int hashmap", integerCountMap)

//declare new function to get maximum number of times integer appears in arrayOfIntegers
function getMax(integerCountMap) {
  for (const integer in integerCountMap) {
    //conditional if
    if (integerCountMap[integer] > maxCount) {
      maxCount = integerCountMap[integer]
      intThatAppearsMostInArray = integer
    }
  }
  return intThatAppearsMostInArray
}

getMax(arrayOfIntegers)
console.log(
  "the number: " +
    getMax(integerCountMap) +
    " appears with a total of " +
    integerCountMap[intThatAppearsMostInArray] +
    " times!"
)
//Big O is O(N) = O(2N)



const maxNumberToReturn = (array) => {

  let dictionary = {};
  array.forEach((element) => {
    dictionary[element] ? dictionary[element] += 1 : dictionary[element] = 1 
  });
  //find max

  let maxOccuringAmount = 0;
  let maxElement = null;
  for (each key in dictionary) {
    if (dictionary[key] > maxOccuringAmount) {
      maxElement = key;
      maxOccuring = dictionary[key]
    }
  }

  // get erray of values instead
};

//for testing: [-5, 0, 0, -5 , 7, 3, 3, -5]

const max = (array) {
  
}

/*
Test

Big-O
*/


