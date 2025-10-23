//Given an array of integers, find the maximum difference between any two elements in the array. 
//Return the maximum difference. Do not use a build-in function to get the max or min numbers of the array :)

function maxDifference(array) {
if (array.length < 2) return null;
  let max = array[0];
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
    max = array[i];
    }
    if (array[i] < min) {
        min = array[i];
    }
  }
  return max - min;
}
const input = [60, 10, 50, 6, 8, 100, 0, 30];
console.log(maxDifference(input)); // Output: 100