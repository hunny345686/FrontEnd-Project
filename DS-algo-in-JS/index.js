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

// var romanToInt = function (s) {
//   let sum = 0
//   let array = []
//   let obj = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   }
//   for (let i = 0; i < s.length; i++) {
//     array.push(obj[s[i]])
//   }
//   for (let i = 0; i < array.length - 1; i++) {
//     if (array[i] < array[i + 1]) {
//       sum -= array[i]
//     } else {
//       sum += array[i]
//     }
//   }
//   return sum + array[array.length - 1]
// }

// const romanToNumber = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000,
// }

// 1- 1000 < 100 = false; totlesum = 1000
// 2- 100 < 1000 = true; totlesum = 900
// 3- 1000 < 10 = flase ; totlesum = 2900
// 4- 1000 < 10 = flase ; totlesum = 2890
// 3- 1000 < 10 = flase ; totlesum = 2895

// var romanToInt = function (s) {
//   const arrStr = s.split('').map((e) => romanToNumber[e])

//   console.log(arrStr)
//   let totalSum = 0
//   for (let i = 0; i < arrStr.length - 1; i++) {
//     if (arrStr[i] < arrStr[i + 1]) {
//       totalSum -= arrStr[i]
//     } else {
//       totalSum += arrStr[i]
//     }
//   }
//   totalSum += arrStr[arrStr.length - 1]

//   return totalSum
// }

// let customArrayReversByRecursion = function (ary, start, end) {
//   if (start <= end) {
//     temp = ary[start]
//     ary[start] = ary[end]
//     ary[end] = temp
//     customArrayReversByRecursion(ary, start + 1, end - 1)
//   }
//   return ary
// }

// let array = [2, 34, 5, 7, 96, 4]

// let i = 0
// let j = 1
// let array = [2, 34, 5, 7, 96, 4]
// let araaySortByRecursion = (array) => {
//   if (array[array.length - 1] == Math.max(...array)) {
//     return array
//   } else if (array[i] < array[j]) {
//     i++
//     j++
//     araaySortByRecursion(array)
//   } else {
//     let temp = array[i]
//     array[i] = array[j]
//     array[j] = array[i]
//     i = 0
//     j = 1
//     araaySortByRecursion(array)
//   }
// }

// var isValid = function (s) {
//   if (s.length % 2 != 0) return false
//   let array = []
//   for (let i = 0; i < s.length; i++) {
//     array.push(s[i])
//     let len = array.length - 1
//     if (
//       (array[len - 1] == '{' && array[len] == '}') ||
//       (array[len - 1] == '[' && array[len] == ']') ||
//       (array[len - 1] == '(' && array[len] == ')' && len > 0)
//     ) {
//       array.pop()
//       array.pop()
//     }
//   }
//   return array.length ? false : true
// }
// mergeTwoLists = function (list1, list2) {
//   if (!list1) return list2
//   if (!list2) return list1

//   if (list1.val <= list2.val) {
//     list1.next = mergeTwoLists(list1.next, list2)
//     return list1
//   } else {
//     list2.next = mergeTwoLists(list1, list2.next)
//     return list2
//   }
// }

// var createCounter = function (init) {
//   let data = init
//   return {
//     increment: function () {
//       return ++data
//     },
//     decrement: function () {
//       return --data
//     },
//     reset: function () {
//       data = init
//       return data
//     },
//   }
// }

// outPut = ' '

// function staircase(n) {
//   for (let i = 0; i < n; i++) {
//     let output = ''
//     for (let j = 0; j < n; j++) {
//       j < n - 1 - i ? (output += ' ') : (output += '#')
//       5 < 5
//     }

//     console.log(output)
//   }
// }
// staircase(2)

// var map = function (arr, fn) {
//   console.log(fn)
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = fn(arr[i], i)
//   }
//   return arr
// }

// const counter = createCounter(5)

// console.log(counter.increment())
// console.log(counter.reset())
// console.log(counter.decrement())

// var filter = function (arr, fn) {
//   let resArray = []
//   for (let i = 0; i < arr.length; i++) {
//     console.log(fn(arr[i]))
//     if (fn(arr[i], i)) {
//       resArray.push(arr[i])
//     }
//   }
//   return resArray
// }

// var reduce = function (nums, fn, init) {
//   let data = init
//   for (let i = 0; i < nums.length; i++) {
//     data = fn(data, nums[i])
//   }
//   return data
// }

// function sum(accum, curr) {
//   return accum + curr * curr
// }

// console.log(sum(100, 3))

// var compose = function (functions) {
//   return function (x) {
//     let no = x
//     for (let i = functions.length - 1; i >= 0; i--) {
//       no = functions[i](no)
//     }
//     return no
//   }
// }

// var once = function (fn) {
//   let call = false;
//   return function (...args) {
//     if (call) return;
//     call = true;
//     console.log(args)
//     return fn(...args);
//   }
// };

// function miniMaxSum(arr) {
//   let min = 0
//   let max = 0
//   arr.sort((a, b) => {
//     a - b
//   })
//   min = arr[0] + arr[1] + arr[2] + arr[3]
//   max = arr[1] + arr[2] + arr[3] + arr[4]
//   return min, max

// }

// mleetcode = 2 4
// leeto = 0 = 5
// var strStr = function (haystack, needle) {
//   let arr = haystack.split(needle)
//   return arr.length > 1 ? arr[0] === "" ? 0 : arr[0].length : -1
// };

// var searchInsert = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == target) {
//       return i
//     } else if (target < nums[i]) {
//       return i
//     }
//   }
//   return nums.length
// };

// var lengthOfLastWord = function (s) {
//   if (s.length === 1) return 1;
//   let wordLen = 0;
//   for (let i = s.length - 1; i >= 0; i--) {
//     const char = s[i];
//     if (char === ' ' && wordLen > 0) return wordLen;
//     if (char === ' ') continue;
//     wordLen++;
//   }
//   return wordLen;
// };

// function memoize(fn) {
//   const obj = {};
//   return function (...args) {
//     const key = args.join(",");
//     console.log(key)
//     if (!(key in obj)) {
//       obj[key] = fn(...args);
//     }
//     return obj[key];
//   }
// }

// var addTwoPromises = async function (promise1, promise2) {
//   return Promise.all([promise1, promise2])
//     .then(([res1, res2]) => {
//       return res1 + res2;
//     })
// };

// var kthFactor = function (n, k) {
//   let array = []
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       array.push(i)
//     }
//   }
//   return array[k - 1] ? array[k - 1] : -1
// };

// var plusOne = function (digits) {

//   if (digits[digits.length - 1] < 9) {
//     digits[digits.length - 1] = digits[digits.length - 1] + 1
//   } else {
//     let data = (digits[digits.length - 1] + 1).toString().split("")
//     digits[digits.length - 1] = +data[0]
//     digits.push(+data[1])
//   }
//   return digits
// };

// var plusOne = function (digits) {
//   let no = BigInt(digits.join(''))
//   let addone = ++no;
//   return addone.toString().split('')
// };

// async function sleep(millis) {
//   const time = new Promise((resolve, reject) => {
//     setTimeout(resolve, millis)
//   })
//   console.log(time)
//   return time;
// }

// var mergeAlternately = function (word1, word2) {
//   let str = ""
//   let l = word1.length > word2.length ? word1.length : word2.length
//   for (let i = 0; i < l; i++) {
//     str += word1[i] ? word1[i] : ""
//     str += word2[i] ? word2[i] : ""
//   }
//   return str
// };

// const cancellable = (fn, args, t) => {
//   let r = setInterval(() => fn(...args), t)
//   return function () { clearTimeout(r) }
// };

// function StairCase(n) {
//   var s = '';
//   for (var i = 1; i <= n; i++) {
//     s += ' '.repeat(n - i) + '#'.repeat(i) + '\n';
//   }
//   return s;
// }
// StairCase(6)

// var gcdOfStrings = function (str1, str2) {
//   let n = str1.length;
//   let k = str2.length;
//   let temFuc = function (x, y) {
//     if (!y) return x;
//     return temFuc(y, x % y);
//   }
//   return str1.slice(0, temFuc(n, k));
// };

// var mySqrt = function (x) {
//   return Math.floor(x ** 0.5)
// };

// var deleteDuplicates = function (head) {
//   var current = head;

//   while (current) {
//     if (current.next !== null && current.val == current.next.val) {
//       current.next = current.next.next;
//     }
//     else {
//       current = current.next;
//     }
//   }
//   return head;
// };



// var numberOfEmployeesWhoMetTarget = function (hours, target) {
//   let noOfEmp = 0
//   for (const iterator of hours) {
//     if (iterator >= target) {
//       noOfEmp++
//     }
//   }
//   return noOfEmp
// };

// console.log(numberOfEmployeesWhoMetTarget(hours = [5, 1, 4, 2, 2], target = 6))

// var timeLimit = function (fn, t) {
//   return async function (...args) {

//   }
// };

// const res = timeLimit(fn = async (n) => {
//   await new Promise(res => setTimeout(res, 100));
//   return n * n;
// },
//   inputs = [5],
//   t = 50)

// console.log(res)


// var isEmpty = function (obj) {

//   return !Object.keys(obj).length
// };


// var chunk = function (arr, size) {
//   let ans = [], temp = [];
//   for (let i = 0; i < arr.length; i++) {
//     temp.push(arr[i]);
//     if (temp.length == size) {
//       ans.push(temp);
//       temp = [];
//     }
//   }
//   if (temp.length > 0) ans.push(temp);
//   return ans;

// };

// Array.prototype.last = function () {
//   console.log()
// };


// var reverse = function (x) {

//   let rNumber = 0
//   // console.log(x)
//   while (x != 0) {
//     let no = x % 10;
//     rNumber = Math.floor((rNumber * 10) + no)
//     x = Math.floor(x / 10)
//   }
//   if (rNumber <= -2147483651 || rNumber >= 2147483651) {  // checking whether the result is in the range as mentioned in the question)
//     return 0;
//   }

//   return rNumber
// };

// var reverse = function (x) {
//   let output = 0;
//   while (x != 0) {
//     output = (output * 10) + (x % 10);
//     x = (x - (x % 10)) / 10;
//   }
//   if (output <= -2147483651 || output >= 2147483651) {
//     return 0;
//   }
//   return output;
// };

// var sumOfZero = function (n) {

//   let l = 0
//   let r = n.length - 1
//   while (l < r) {
//     let sum = n[l] + n[r];
//     if (sum == 0) {
//       return [n[l], n[r]]
//     } else if (sum > 0) {
//       r--
//     } else
//       l++
//   }
// };



// console.log(sumOfZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]))

// let count = 0
// $(".btn").click(function () {
//   count++
//   $(".container").append(`<p>Hello ${count} </p>`);
// })

var maximumCount = function (nums) {
  let positive = 0, negetive = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      negetive++
    } else if (nums[i] > 0) {
      positive++
    }
  }
  return positive > negetive ? positive : negetive
};

console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2]))
