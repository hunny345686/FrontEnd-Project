//=========================== Insert a array with and without predefin function
// const array = [23, 435, 656, 7, 78, 90];
// const newEl = 55;
// const position = 2;
// function InsertValueInArray(array, newEl, position) {
//   for (let i = array.length - 1; i >= 0; i--) {
//     if (i >= position) {
//       array[i + 1] = array[i];
//       if (i == position) {
//         array[i] = newEl;
//       }
//     }
//   }
//   return array;
// }
// let res = InsertValueInArray(array, newEl, position);
// console.log(array);
// array.splice(position, 0, newEl);
// console.log(array);

// const { json } = require("react-router-dom");

// ========================================================================
//  fibinacci seris ==========================

// const fibNo = 4;
// function fibinacciSerise(n) {
//   const fib = [0, 1];
//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib;
// }

// const res = fibinacciSerise(fibNo);
// console.log(res);

// ========================================================================
//  getSumOfPairedGetFirstZero ==========================
// const array = [-5, -4, 3, 5, 6, -6, 4];
// function getSumOfPairedGetFirstZero(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i; j < array.length; j++) {
//       if (array[i] + array[j] == 0) {
//         return [array[i], array[j]];
//       }
//     }
//   }
// }

// ===============================================================================
//=================== Delete element in array JS======================

// function deleteElementArray(array, position) {
//   for (let i = position; i < array.length - 1; i++) {
//     array[i] = array[i + 1];
//   }
//   array.length = array.length - 1;
//   return array;
// }
// const res = deleteElementArray([30, 40, 3, 2, 32, 43, 123], 6);
// console.log(res);

// =====================================================================
//=============Factorial of a Number ======================

// function factorialNumber(no) {
//   let result = 1;
//   for (let i = 2; i <= no; i++) {
//     result = result * i;
//   }
//   return result;
// }
// const res = factorialNumber(4);
// console.log(res);

// ================================================================================
//  getSumOfPairedGetFirstZero  with O(n) complecity ==========================
// const array = [-6, -5, -4, 3, 4, 6, 7];
// function getSumOfPairedGetFirstZero(array) {
//   let sum;
//   let left = 0;
//   let right = array.length - 1;

//   while (left < right) {
//     sum = array[left] + array[right];
//     if (sum === 0) {
//       return [left, right];
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// }
// const res = getSumOfPairedGetFirstZero(array);
// console.log(res);

// ================================================================================
// ============== Leetcode Solution - 1.0 fibanaci serise
// const fib =

// var applyOperations = function (nums) {
//   let zeroCount = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == nums[i + 1]) {
//       nums[i] = nums[i] * 2;
//       nums[i + 1] = 0;
//     }
//     if (nums[i] == 0) {
//       zeroCount++;
//       nums.splice(i, 1);
//       i--;
//     }
//   }
//   for (let i = 0; i < zeroCount; i++) {
//     nums.push(0);
//   }
//   return nums;
// };

// var averageValue = function (nums) {
//   let no = 0;
//   let dividby = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 == 0) {
//       if (nums[i] % 3 == 0) {
//         no += nums[i];
//         dividby++;
//       }
//     }
//   }
//   return no ? Math.floor(no / dividby) : 0;
// };
//  let hash = {};
//  for (let i = 0; i < words.length; i++) {
//    let diff = "";
//    for (let j = 0; j < words[i].length - 1; j++) {
//      diff =
//        diff + "." + String(words[i].charCodeAt(j + 1) - words[i].charCodeAt(j));
//    }
//    if (hash[diff]) hash[diff].push(i);
//    else hash[diff] = [i];
//  }
//  for (const [key, value] of Object.entries(hash)) {
// //    if (value.length === 1) return words[value[0]];
// //  }
// var oddString = function (words) {
//   let alphabet = {};
//   let no = 0;
//   let array = [];
//   let strReturn;
//   for (var i = 65; i <= 90; i++) {
//     alphabet[String.fromCharCode(i).toLowerCase()] = no;
//     no++;
//   }
//   for (let i = 0; i < words.length; i++) {
//     let allword = words[i].split("");
//     let f = alphabet[allword[0]];
//     let m = alphabet[allword[1]];
//     let l = alphabet[allword[2]];
//     array.push([m - f, l - m]);
//   }
//   for (let j = 0; j < array.length; j++) {
//     if (JSON.stringify(array[j]) != JSON.stringify(array[j + 1])) {
//       strReturn = j + 1;
//       break;
//     }
//   }
//   return words[strReturn];
// };

// var isAnagram = function (s, t) {
//   if (t.length != s.length) return false;
//   return t.split("").sort().join("") == s.split("").sort().join("");
// };

// var twoSum = function (nums, target) {
//   console.log(nums);
//   let hasmap = {};
//   for (let i = 0; i < nums.length; i++) {
//     let dif = target - nums[i];

//     if (dif == nums[i]) {
//       console.log(nums[i]);
//     }
//   }
// };

// var findMaxK = function (nums) {
//   let max = 0;
//   for (i = 0; i < nums.length; i++) {
//     if (nums[i] > max && nums.includes(-nums[i])) {
//       max = nums[i];
//     }
//   }
//   return max > 0 ? max : -1;
// };

// var rotate = function (nums, k) {
//   let array = [];
//   for (let i = 0; i < k; i++) {
//     array.uo(nums[nums.length - 1]);
//     nums.pop();
//   }
//   console.log(array);
//   // return nums;
// };

// var rotate = function (nums, k) {
//   let size = nums.length;
//   if (k > size) {
//     k = k % size;
//   }

//   const details = nums.splice(size - k, size);
//   nums.unshift(...details);
//   return details;
// };
// const maxProfit = (prices) => {
//   let left = 0;
//   let right = 1;
//   let max_profit = 0;
//   while (right < prices.length) {
//     if (prices[left] < prices[right]) {
//       let profit = prices[right] - prices[left];
//       if (max_profit < profit) {
//         max_profit = profit;
//       }
//     } else {
//       left = right;
//     }
//     right++;
//   }
//   return max_profit;
// };

// var maxProfit = function (prices) {
//   let minPrice = prices[0];
//   let maxProfit = 0;
//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] < minPrice) {
//       minPrice = prices[i];
//     } else if (prices[i] - minPrice > maxProfit) {
//       maxProfit = prices[i] - minPrice;
//     }
//   }
//   return maxProfit;
// };

// var maxProfit = function (prices) {
//   let profit = 0;
//   let buy = prices[0];
//   for (const price of prices) {
//     if (price > buy) {
//       profit += price - buy;
//       buy = price;
//     }
//     buy = price;
//   }
//   return profit;
// };

// var maxProfit = function (prices) {
//   var profit = 0;
//   for (var i = 0; i < prices.length; i++) {
//     if (prices[i] < prices[i + 1]) {
//       profit += prices[i + 1] - prices[i];
//     }
//   }
//   return profit;
// };


// i = 0;
// nums.length = 5;
// 0 == 4 false;
// i = 0 + 2

// i = 2


var romanToInt = function (s) {
  let sum = 0
  let obj = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }
  for (let i = 0; i < s.length; i++) {
    console.log(obj[s[i]])
    sum += obj[s[i]]
  }
  return sum
};

const res = romanToInt("MCMXCIV");
console.log(res);
