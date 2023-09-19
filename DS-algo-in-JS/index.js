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

// var maximumCount = function (nums) {
//   let positive = 0, negetive = 0

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < 0) {
//       negetive++
//     } else if (nums[i] > 0) {
//       positive++
//     }
//   }
//   return positive > negetive ? positive : negetive
// };

// console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2]))


// singly Link List ==============================


// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null
//   }
// }

// class SinglyLinkList {
//   constructor() {
//     this.length = 0;
//     this.head = null;
//     this.tail = null;
//   }

//   push(val) {
//     let newNode = new Node(val)
//     if (!this.head) {
//       this.head = newNode
//       this.tail = this.head
//     } else {
//       this.tail.next = newNode
//       this.tail = newNode
//     }
//     this.length++
//     return this
//   }
//   traverse() {
//     let curr = this.head
//     while (curr) {
//       curr = curr.next
//     }
//   }
//   pop() {
//     if (!this.head) return
//     let curr = this.head
//     let newTail = curr
//     while (curr.next) {
//       newTail = curr
//       curr = curr.next
//     }
//     this.tail = newTail
//     this.tail.next = null
//     this.length--
//     if (this.length === 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return curr
//   }

//   shift() {
//     if (!this.head) return
//     var currHead = this.head
//     this.head = currHead.next
//     this.length--
//     if (this.length === 0) this.tail = null;
//     return currHead
//   }



//   unshift(val) {
//     let newNode = new Node(val)
//     if (!this.head) {
//       this.head = newNode
//       this.tail = this.head
//     } else {
//       newNode.next = this.head
//       this.head = newNode
//     }
//     this.length++
//     return this
//   }
//   getIndexVal(index) {
//     if (index < 0 || index >= this.length) return
//     let counter = 0
//     let curr = this.head
//     while (counter !== index) {
//       curr = curr.next;
//       counter++
//     }
//     return curr
//   }
//   setIndexVal(index, val) {
//     let foundNode = this.getIndexVal(index)
//     if (foundNode) {
//       foundNode.val = val
//       return
//     }
//     return false
//   }

//   insertNewNode(index, val) {
//     if (index < 0 || index >= this.length) return
//     if (index == 0) return !!this.unshift(val)
//     if (index == this.length) return !!this.push(val)
//     let newNode = new Node(val)
//     let prev = this.getIndexVal(index - 1)
//     let temp = prev.next
//     prev.next = newNode
//     newNode.next = temp
//     this.length++
//     return true
//   }

//   removeIndexVal(index) {
//     if (index < 0 || index >= this.length) return
//     if (index == 0) return this.shift()
//     if (index == this.length) return this.pop()
//     let prevNode = this.getIndexVal(index - 1)
//     let removedNode = prevNode.next
//     prevNode.next = removedNode.next
//     this.length--
//     return removedNode
//   }
//   reversLL() {
//     let temp = this.head
//     this.head = this.tail
//     this.tail = temp
//     let next;
//     let prev = null
//     for (let i = 0; i < this.length; i++) {
//       next = temp.next
//       temp.next = prev
//       prev = temp
//       temp = next
//     }
//     return this
//   }
//   print() {
//     let arr = []
//     let curr = this.head
//     while (curr) {
//       arr.push(curr.val)
//       curr = curr.next
//     }
//     console.log(arr)
//   }

// }


// let list = new SinglyLinkList()

// list.push(40)
// list.push(50)
// list.push(30)
// list.push(20)
// list.traverse()
// list.pop()
// list.shift()
// list.unshift(70)
// list.unshift(70)
// console.log(list.getIndexVal(2))
// list.setIndexVal(2, 90)
// list.insertNewNode(1, 10)
// list.removeIndexVal(1)
// list.print()
// list.reversLL()
// list.print()

// console.log(list)

// Doubly Link List =======================================================
// class Noded {
//   constructor(val) {
//     this.val = val
//     this.next = null
//     this.prev = null
//   }
// }

// class doublyLinkList {
//   constructor() {
//     this.head = null
//     this.tail = null
//     this.length = 0
//   }

//   push(val) {
//     let newNode = new Noded(val)
//     if (this.length === 0) {
//       this.head = newNode
//       this.tail = newNode
//     } else {
//       this.tail.next = newNode;
//       newNode.prev = this.tail
//       this.tail = newNode
//     }
//     this.length++
//     return this
//   }
//   pop() {
//     if (!this.head) return undefined
//     let popedNode = this.tail
//     if (this.length === 1) {
//       this.head = null
//       this.tail = null
//     } else {
//       this.tail = popedNode.prev
//       this.tail.next = null
//       popedNode.prev = null
//     }
//     this.length--
//     return popedNode
//   }
//   shift() {
//     if (!this.head) return undefined
//     let shiftNode = this.head
//     if (this.length === 1) {
//       this.head = null
//       this.tail = null
//     } else {
//       this.head = shiftNode.next
//       this.head.prev = null
//       shiftNode.next = null
//     }
//     this.length--
//     return shiftNode
//   }
//   unshift(val) {
//     let newNode = new Noded(val)
//     if (!this.head) {
//       this.head = newNode
//       this.tail = newNode
//     } else {
//       this.head.prev = newNode
//       newNode.next = this.head
//       this.head = newNode
//     }
//     this.length++
//     return this
//   }
//   get(index) {
//     if (index < 0 || index >= this.length) return undefined
//     if (index <= this.length / 2) {
//       let count = 0
//       let curr = this.head
//       while (count != index) {
//         curr = curr.next
//         count++
//       }
//       return curr
//     } else {

//       let count = this.length - 1
//       let curr = this.tail
//       while (count != index) {
//         curr = curr.prev
//         count--
//       }
//       return curr
//     }
//   }

//   set(index, val) {
//     let foundNode = this.get(index)
//     if (foundNode != null) {
//       foundNode.val = val
//       return true
//     }
//     return false
//   }
//   insert(ind, val) {
//     if (ind < 0 || ind > this.length) return false
//     if (ind == 0) return !!this.unshift(val)
//     if (ind == this.length) return !!this.push(val)

//     let newNode = new Noded(val)
//     let beforNode = this.get(ind - 1)
//     let afterNode = beforNode.next

//     beforNode.next = newNode
//     newNode.prev = beforNode
//     newNode.next = afterNode
//     afterNode.prev = newNode

//     this.length++

//     return true
//   }
//   remove(ind) {
//     if (ind < 0 || ind >= this.length) return false
//     if (ind == 0) return this.shift(val)
//     if (ind == this.length) return this.pop(val)

//     let removeNode = this.get(ind)

//     removeNode.prev.next = removeNode.next
//     removeNode.next.prev = removeNode.prev
//     removeNode.next = null
//     removeNode.prev = null

//     this.length--
//     return removeNode
//   }

// }

// let doublyLL = new doublyLinkList()
// doublyLL.push(20)
// doublyLL.push(30)
// doublyLL.push(40)
// doublyLL.insert(1, 4000)
// doublyLL.remove(1)
// console.log(doublyLL.set(1, 6666))
// console.log(doublyLL)

// Stacks =======================================================================

// class StackNode {
//   constructor(val) {
//     this.val = val
//     this.next = null
//   }
// }

// class Stackd {
//   constructor() {
//     this.first = null
//     this.last = null
//     this.size = 0
//   }
//   push(val) {
//     let newVal = new StackNode(val)
//     if (!this.first) {
//       this.first = newVal
//       this.last = newVal
//     } else {
//       const temp = this.first
//       this.first = newVal
//       this.first.next = temp
//     }
//     return ++this.size
//   }
//   pop() {
//     if (this.size < 0) return null
//     const popedVal = this.first
//     if (this.size === 1) {
//       this.last = null
//     }
//     this.first = this.first.next
//     this.size--
//     return popedVal.val
//   }
// }


// const stack = new Stackd()

// stack.push(20)
// stack.push(30)
// stack.pop()


// Queue ===============================================================================


// class QueueNode {
//   constructor(val) {
//     this.val = val
//     this.next = null
//   }
// }

// class Queue {
//   constructor() {
//     this.first = null
//     this.last = null
//     this.size = 0
//   }
//   enQueue(val) {
//     const newNode = new QueueNode(val)
//     if (!this.first) {
//       this.first = newNode
//       this.last = newNode
//     } else {
//       this.last.next = newNode
//  1`     this.last = newNode
//     }
//     return ++this.size
//   }
//   deQueue() {

//     if (!this.first) return null
//     const temp = this.first
//     if (this.first == this.last) {
//       this.last = null
//     }

//     this.first = this.first.next
//     this.size--
//     return temp.val

//   }
// }


// const queue = new Queue()

// function getData() {
//   return "hekk"
// }

let data = new getData()

// queue.enQueue(10)
// queue.enQueue(20)
// queue.enQueue(30)
// queue.deQueue()
// queue.deQueue()
// queue.deQueue()

// console.log(queue)


//  ====================Heaps ===================================

class maxBinaryHeap {
  constructor() {
    this.value = [40, 39, 33, 18, 27, 12]
  }
  insert(ele) {
    // push the element
    this.value.push(ele)
    this.bubbleUp()
  }
  bubbleUp() {
    // get last index and last element
    let index = this.value.length - 1
    const element = this.value[index]

    // loop till index less the 0
    while (index > 0) {
      // get prent ind and ele
      let parentIdx = Math.floor((index - 1) / 2)
      let parentEl = this.value[parentIdx]

      // if new elemet is less then curunt element then break
      if (element <= parentEl) break

      // swaping the elements
      this.value[parentIdx] = element;
      this.value[index] = parentEl;
      // updating index
      index = parentIdx
    }
  }
  shinkDwon() {
    let idx = 0
    const length = this.value.length
    const element = this.value[0]

    while (true) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let leftChild, rightChild
      let swap = null
      if (leftChildIdx < length) {
        leftChild = this.value[leftChildIdx]
        if (leftChild > element) {
          swap = leftChildIdx
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.value[rightChildIdx]
        if ((swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)) {
          swap = rightChildIdx
        }
      }

      if (swap === null) break
      this.value[idx] = this.value[swap]
      this.value[swap] = element
      idx = swap
    }
  }
  extractMax() {

    // getting first and last value
    const max = this.value[0]
    const end = this.value.pop()
    if (this.length > 0) {
      //  set last value to first
      this.value[0] = end
      // trickle dowm
      this.shinkDwon()
    }
    return max
  }

}

let maxBHeap = new maxBinaryHeap()

// maxBHeap.insert(55)
// maxBHeap.insert(39)
// maxBHeap.insert(41)
// maxBHeap.insert(18)
// maxBHeap.insert(27)
// maxBHeap.insert(12)
// maxBHeap.insert(33)
// maxBHeap.extractMax()
// maxBHeap.extractMax()
// console.log(maxBHeap.extractMax())

// console.log(maxBHeap)


// ++++++++===== Priority Queue +++++++++=================

let obj = {}

class Object {
  constructor() {
    this.key = null
    this.val = null
  }
}


class priorityQueueNode {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}
class priorityQueue {
  constructor() {
    this.value = []
  }
  enQueue(val, priority) {
    const newNode = new priorityQueueNode(val, priority)
    this.value.push(newNode)
    this.bubbleUp()
  }
  bubbleUp() {
    // get last index and last element 
    let index = this.value.length - 1
    const element = this.value[index]
    // loop till index less the 0 
    while (index > 0) {
      // get prent ind and ele
      let parentIdx = Math.floor((index - 1) / 2)
      let parentEl = this.value[parentIdx]

      // if new elemet is less then curunt element then break
      if (element.priority >= parentEl.priority) break

      // swaping the elements
      this.value[parentIdx] = element;
      this.value[index] = parentEl;
      // updating index 
      index = parentIdx
    }
  }
  shinkDwon() {
    let idx = 0
    const length = this.value.length
    const element = this.value[0]

    while (true) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let leftChild, rightChild
      let swap = null
      if (leftChildIdx < length) {
        leftChild = this.value[leftChildIdx]
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.value[rightChildIdx]
        if ((swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)) {
          swap = rightChildIdx
        }
      }

      if (swap === null) break
      this.value[idx] = this.value[swap]
      this.value[swap] = element
      idx = swap
    }
  }
  deQueue() {

    // getting first and last value 
    const min = this.value[0]
    const end = this.value.pop()
    if (this.length > 0) {
      //  set last value to first 
      this.value[0] = end
      // trickle dowm
      this.shinkDwon()
    }
    return min
  }

}

let PQ = new priorityQueue()

PQ.enQueue("P1", 1)
PQ.enQueue("P2", 2)
PQ.enQueue("P3", 3)
PQ.enQueue("P5", 5)
PQ.enQueue("P6", 6)
PQ.deQueue()
PQ.deQueue()
PQ.deQueue()
PQ.deQueue()

// console.log(PQ.deQueue().priority)
// console.log(PQ.deQueue().priority)
// console.log(PQ.deQueue().priority)
// console.log(PQ.deQueue().priority)

// console.log(PQ)


// ++++++++=====ProtoType Class And Inhertance=====++++++++++++++++++++++

function user(user, age) {
  this.user = user
  this.age = age
}
user.prototype.increment = function () {
  this.age++
}
user.prototype.print = function () {
  return this
}
let a = new user("prem", 30)

Object.prototype.length = "hello Data"
const objd = {
  name: "hello", age: 20
}

const techSup = {
  isAvail: false
}
const TASup = {
  makAss: "js",
  fullTime: true,
  // __proto__:techSup
}

Object.setPrototypeOf(techSup, TASup)

// console.log(TASup)



// console.log(objd.length)

const str = "Prem             "
const str2 = "Hello     "
String.prototype.trueLen = function () {
  console.log(this)
  let trueL = this
}

console.log(str.trueLen())
// console.log(a.increment())
// console.log(a.print().age)