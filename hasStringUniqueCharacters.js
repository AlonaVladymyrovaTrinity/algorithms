//Session 5 Challenge unique chars in string
//Implement an algorithm to determine if a string has all unique characters.
//O(N^2)
const hasUniqChar = (str) => {
  if (str) {
    if (typeof str !== 'string') {
      return 'Error! Please provide string.';
    }
    //taking each char
    for (let i = 0; i < str.length - 1; i++) {
      //compare it with rest of the string
      for (let j = i + 1; j < str.length; j++) {
        //if str[i] === str [j] -> false
        //else true
        if (str[i].toLowerCase() === str[j].toLowerCase()) {
          console.log('Not qnique string!');
          return false;
        }
      }
    }
    return true;
  } else {
    return 'Please provide a string value';
  }
};

// console.log(hasUniqChar("")); // ???
// console.log(hasUniqChar("aaa")); // false
// console.log(hasUniqChar("abc")); // true
// console.log(hasUniqChar("$&=")); // ???
// console.log(hasUniqChar(00998)); // ???
// console.log(hasUniqChar()); // ???
// {}
// {
//   a : 1
// }

// O(N)
const hasUnicCharHashMap = (arr) => {
  if (arr) {
    if (!Array.isArray(arr)) {
      return 'Error! Please provide array.';
    }
    let hashMap = {}; // const hashMap = Object.create(null);
    for (let i = 0; i < arr.length; i++) {
      let curLet = arr[i].toLowerCase(); //const curLet = String(arr[i]).toLowerCase();
      if (hashMap[curLet]) {
        // console.log(hashMap);
        return false;
      } else {
        // console.log(hashMap);
        hashMap[curLet] = 1;
      }
    }
    return true;
  } else {
    return 'Please provide a string';
  }
};

// console.log(hasUnicCharHashMap("")); // ???
// console.log(hasUnicCharHashMap(["a","a","a"])) // false
// console.log(hasUnicCharHashMap("abc")); // true
// console.log(hasUnicCharHashMap("$#&=")); // ???
// console.log(hasUnicCharHashMap(00998)); // ???
// console.log(hasUnicCharHashMap()); // ???

// O(NlogN)
const hasUnicCharSortFirst = (arr) => {
  const sortedArr = arr.sort();
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === sortedArr[i + 1]) {
      return false;
    }
  }
  return true;
};

// console.log(hasUnicCharSortFirst(['a', 'b', 'b', 'c', 'd', 'e', 'e'])); // false
// console.log(hasUnicCharSortFirst(['a', 'b', 'c'])); // true
// console.log(hasUnicCharSortFirst("")); // ???
// console.log(hasUnicCharSortFirst("$#&=")); // ???
// console.log(hasUnicCharSortFirst(00998)); // ???
// console.log(hasUnicCharSortFirst()); // ???

//----------------------------
//Edge case:
//Emojis like "😀" are two code units. str[i] sees halves, which makes duplicates detection unreliable. Using for...of fixes this.
//Emojis or characters outside the Basic Multilingual Plane
//Fix: iterate code points with for...of or Array.from(str).
// Here is a cleaned up version using a Set, which is the simplest approach:
const hasUniqueChars = (str) => {
  if (typeof str !== 'string') {
    return 'Please provide a string';
  }
  if (str.length === 0) {
    return 'Empty string';
  }

  const seen = new Set();
  for (const ch of str.toLowerCase()) {
    // handles full Unicode code points
    if (seen.has(ch)) {
      return false;
    }
    seen.add(ch);
  }
  return true;
};

// Examples
// console.log(hasUniqueChars('$#&=')); // true
// console.log(hasUniqueChars('$$')); // false
// console.log(hasUniqueChars('😀a😀')); // false
// console.log(hasUniqueChars('')); // "Empty string"
// console.log(hasUniqueChars(998)); // "Please provide a string"

//hashmap style
const hasUniqueCharsMap = (str) => {
  if (typeof str !== 'string') {
    return 'Please provide a string';
  }
  if (str.length === 0) {
    return 'Empty string';
  }

  const map = Object.create(null); // no prototype keys
  for (const ch of str.toLowerCase()) {
    if (map[ch]) {
      return false;
    }
    map[ch] = 1;
  }
  return true;
};