// Peturns

// function getParetus(n) {
//   let value
//   let row = 1
//   while (row <= n) {
//     let col = 1
//     value = row
//     while (col <= row) {
//       console.log(value)
//       value = value + 1
//       col = col + 1
//     }
//     console.log("\n")
//     row = row + 1
//   }
//   return value



// }


// function sumOfData(no) {

//   let pro1 = 1;
//   let sum = 0
//   let digit = no % 10
//   console.log(digit)
//   while (no != 0) {
//     pro1 = pro1 * digit
//     sum = sum + digit
//     no = no / 10
//   }

//   return pro1 - sum
// }

// let a = 456 % 10
// let b = 456 / 10

// console.log(a, b)


// consver desimal to binary js

// const convertToBinary = (x) => {
//   let rem, bin = 0, i = 1
//   while (x != 0) {
//     rem = x % 2
//     x = parseInt(x / 2);
//     bin = bin + rem * i;
//     i = i * 10;
//   }
//   return bin
// }

// var reverseString = function (s) {
//   let end = s.length - 1
//   for (let start = 0; start < end; start++) {
//     [s[start], s[end]] = [s[end], s[start]]
//     end--;
//   }
//   return s;

// };

// var reverseString = function (s) {
//   let st = 0
//   let e = s.length - 1
//   while (st <= e) {
//     [s[st], s[e]] = [s[e], s[st]]
//     st++
//     e--
//   }
//   return s
// }

// var reverseString = function (s) {

//   for (let i = 0; i < s.length; i += 2) {
//     if (i + 1 < s.length) {
//       [s[i], s[i + 1]] = [s[i + 1], s[i]]
//     }
//   }

//   return s

// }

// var uniqueOccurrences = function (arr) {
//   let obj = {}
//   let res = []
//   for (let d of arr) {
//     obj[d] = obj[d] + 1 || 1
//   }
//   for (const key in obj) {
//     if (obj[key] > 1) {
//       arr.push(key)
//     }
//   }
//   return res
// };

// var finalString = function (s) {
//   let str = ""
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == "i") {
//       str = str.split("").reverse().join("");
//       continue
//     }
//     str += s[i]
//   }
//   return str

// };

// var findMaximumElegance = function (items, k) {

//   for (let i = 0; i < items.length; i++) {

//     console.log(items[i])
//   }

// };

// const BinarySearch = (arr, k) => {
//   let s = 0
//   let e = arr.length
//   let ans
//   let mid = Math.floor((s + e) / 2)

//   while (s <= e) {
//     if (arr[mid] == k) {
//       ans = mid
//       s = mid + 1
//     } else if (k < arr[mid]) {
//       e = mid - 1
//     } else {
//       s = mid + 1
//     }
//     mid = Math.floor((s + e) / 2)
//   }

//   return ans

// }

// var search = function (nums, target) {
//   let s = 0
//   let e = nums.length
//   let mid = Math.floor((s + e) / 2)
//   while (s <= e) {
//     if (nums[mid] == target) {
//       return mid
//     } else if (target < nums[mid]) {
//       e = mid - 1
//     } else {
//       s = mid + 1
//     }
//     mid = Math.floor((s + e) / 2)
//   }

//   return -1
// };


// var peakIndexInMountainArray = function (arr) {
//   let s = 0;
//   let e = arr.length
//   let mid = Math.floor((s + e) / 2)
//   while (s < e) {
//     if (arr[mid] < arr[mid + 1]) {
//       s = mid + 1
//     } else {
//       e = mid
//     }
//     mid = Math.floor((s + e) / 2)
//   }
//   return s
// };


// var findInMountainArray = function (target, mountainArr) {
//   let s = 0;
//   let e = mountainArr.length - 1
//   let mid = Math.floor((s + e) / 2)
//   while (s <= e) {
//     if (mountainArr[mid] == target) {
//       return mid
//     } else if (mountainArr[mid] > target) {
//       e = mid - 1
//     } else {
//       s = mid + 1
//     }
//     mid = Math.floor((s + e) / 2)
//   }
//   return -1
// };


// var mySqrt = function (x) {
//   let s = 0
//   let e = x
//   let mid = Math.floor((s + e) / 2)
//   let ans = 0
//   while (s <= e) {
//     let sqrt = mid * mid
//     if (sqrt == x) {
//       return mid
//     }
//     if (sqrt < x) {
//       ans = mid
//       s = mid + 1
//     } else {
//       e = mid - 1
//     }
//     mid = Math.floor((s + e) / 2)
//   }
//   return ans
// };



// var aloocationBooks = (ar, count) => {
//   let s = 0
//   let sum = 0
//   for (let i = 0; i < ar.length; i++) {
//     sum += ar[i]
//   }
//   let e = sum
//   let mid = Math.floor((s + e) / 2)
//   let ans = 0

//   function isPossible(arr, count, midvalue) {
//     let studebt = 1
//     let pages = 0
//     for (let i = 0; i < arr.length; i++) {
//       if (pages + arr[i] <= midvalue) {
//         pages += arr[i]
//       } else {
//         studebt++
//         if (studebt > count || arr[i] > mid) {
//           return false
//         }
//         pages = arr[i]
//       }
//     }
//     return true
//   }

//   while (s < e) {
//     if (isPossible(ar, count, mid)) {
//       ans = mid;
//       e = mid - 1
//     } else {
//       s = mid + 1
//     }
//     mid = Math.floor((s + e) / 2)
//   }
//   return ans
// }

// var selectionSort = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]]
//     }
//   }
//   return arr
// }


// var bubbleSort = (arr) => {

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//     }
//   }
//   return arr
// }



// var reverseArray = (arr, k) => {
//   let s = 0
//   let e = arr.length - 1
//   while (s < e) {
//     [arr[s], arr[e]] = [arr[e], arr[s]]
//     s++
//     e - k
//   }

//   return arr
// }
// var reverseArray = (arr, k) => {

//   for (let i = 0; i < arr.length - 1; i++) {
//     let temp = arr[i]
//     arr[i] = arr[i + 1]
//     arr[i + 1] = temp
//   }
//   return arr
// }

// var moveZeroes = function (nums) {
//   let i = 0
//   for (let j = 0; j < nums.length; j++) {
//     if (nums[j] != 0) {
//       [nums[i], nums[j]] = [nums[j], nums[i]]
//       i++
//     }
//   }
//   return nums
// };


// var rotate = function (nums, k) {
//   let size = []
//   for (let i = 0; i < nums.length; i++) {
//     size[(i + k) % nums.length] = nums[i]
//   }
//   return nums = size
// };
// var reverseArray = (arr, k) => {

//   for (let i = 0; i < arr.length - 1; i++) {
//     let temp = arr[i]
//     arr[i] = arr[i + 1]
//     arr[i + 1] = temp
//   }
//   return arr
// }


// var check = function (nums) {
//   let count = 0
//   let no = nums.length
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i - 1] > nums[i]) {
//       count++
//     }
//   }
//   if (nums[no - 1] > nums[0]) {
//     count++
//   }
//   return count <= 1
// };



// function tolowercase(ch) {
//   let lstr = ""
//   if ((ch >= "a" && ch <= "z") || (ch >= "0" && ch <= "9")) {
//     return ch
//   } else {
//     lstr = ch - "A" + "a"
//     return lstr
//   }
// }\

// function vaildChar(d) {
//   if ((d >= "a" && d <= "z") || (d >= "A" && d <= "Z") || (d >= "0" && d <= "9")) {
//     return 1
//   }
//   return 0
// }
// function check(tempstr) {
//   let st = 0
//   let e = tempstr.length - 1
//   while (st <= e) {
//     if (tempstr[st] != tempstr[e]) {
//       return false
//     } else {
//       st++
//       e--
//     }
//   }
//   return true
// }
// function lowerCase(char) {
//   let value = char.charCodeAt();
//   if (value >= 65 && value <= 90) { return String.fromCharCode(value + 32); }
//   return char
// }
// var isPalindrome = function (s) {
//   let tempstr = ""
//   for (let i = 0; i < s.length; i++) {
//     temp = lowerCase(s[i])
//     if (vaildChar(temp)) {
//       tempstr += temp
//     }
//   }
//   return check(tempstr)
// };

// var removeDuplicates = function (s) {
//   let str = ""
//   for (let i = 0; i < s.length; i++) {
//     if (!(s[i] == s[i + 1])) {
//       str += (s[i])
//     }
//     console.log(str)
//   }
//   return str
// };


// var longestPalindrome = function (s) {
//   let st = 0
//   let e = s.length - 1
//   let ans = ""
//   while (s < e) {
//     if (s[st] == s[e]) {
//       ans += s[st]
//       st++
//     } else {
//       st++
//       e--
//     }
//   }
//   console.log(ans)
// };

// 2D Array


// let tempArray = [];
// let row = 3;
// let col = 3;
// let count = 0

// Loop to initialize 2D array elements.
// for (let i = 0; i < row; i++) {
//   tempArray[i] = [];
//   for (let j = 0; j < col; j++) {
//     tempArray[i][j] = count++;
//     console.log(tempArray);
//   }
//   console.log("\n");
//   // console.log(row)
// }
// console.log(tempArray);



// var searchMatrix = function (matrix, target) {

//   let row = matrix.length;
//   let col = matrix[0].length
//   let s = 0
//   let e = row * col - 1

//   let mid = Math.floor(s + (e - s) / 2)

//   while (s <= e) {
//     let el = matrix[Math.floor(mid / col)][Math.floor(mid % col)];
//     if (el == target) {
//       return 1
//     }
//     if (el < target) {
//       s = mid + 1
//     } else {
//       e = mid - 1
//     }
//     mid = Math.floor(s + (e - s) / 2)

//   }
//   return 0
// };

// var searchMatrix = function (matrix, target) {

//   let row = matrix.length
//   let col = matrix[0].length;

//   let rowI = 0
//   let colI = col - 1

//   while (rowI < row && colI >= 0) {
//     let el = matrix[rowI][colI];
//     console.log(el)
//     if (el === target) {
//       return 1
//     }
//     if (el < target) {
//       rowI++
//     } else {
//       colI--
//     }
//   }
//   return 0

// };

// function isPrime(n) {
//   if (n < 2) return 0

//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) {
//       return false
//     }
//   }
//   return true
// }
// var countPrimes = function (n) {
//   let count = 0
//   let arr = []
//   for (let i = 2; i < n; i++) {
//     if (arr[i]) {
//       count++
//       for (let j = 2 * i; j < n; j = j + 1) {
//         arr[j] = 0
//       }
//     }
//   }
//   return count
// };

// var buildArray = function (nums) {
//   // let ans = []
//   for (let i = 0; i < nums.length; i++) {
//     nums[i] = nums[nums[i]]
//   }
//   console.log(nums)
//   // return ans

// };

// var buildArray = function (nums) {
//   nums.map((n) => {
//     console.log(nums[n])
//   })

// };

// var getConcatenation = function (nums) {
//   let ans = []
//   for (let j = 0; j < 2; j++) {
//     for (let i = 0; i < nums.length; i++) {
//       ans.push(nums[i])
//     }
//   }
//   return ans
// };


// var getConcatenation = function (nums) {
//   let ans = []
//   for (let i = 0; i < nums.length; i++) {
//     ans[i] = nums[i]
//     ans[i + nums.length] = nums[i]
//   }
//   return ans
// };

// var fib = function (n) {
//   // baseCase
//   if (n == 0) return 0
//   if (n == 1) return 1
//   return fib(n - 1) + fib(n - 2)
// };

// var climbStairs = function (n) {
//   if (n < 0) return 0
//   if (n == 0) return 1
//   return climbStairs(n - 1) + climbStairs(n - 2)
// };

// function printDigitInStraing(n) {

//   let Sdigit =
//     ["zero", "one", "two", "three", "four", "five", "six", "Seven", "eight", "nine"]

//   // console.log(Sdigit)

//   if (n == 0) return
//   let digit = Math.floor(n % 10)
//   console.log(digit)
//   n = Math.floor(n / 10)

//   console.log(printDigitInStraing(digit))
//   // return Sdigit[printDigitInStraing(digit)]
// }


// var shuffle = function (nums, n) {

//   let s = 0
//   let e = n
//   ans = []
//   while (s < n) {
//     ans.push(nums[s]);
//     ans.push(nums[e]);
//     s++
//     e++
//   }
//   return ans
// };

// var shuffle = function (nums, n) {
//   const ans = [];
//   for (let i = 0; i < n; i++) {
//     // ans.push(nums[i]);
//     // ans.push(nums[i + n]);
//     ans.push(nums[i], nums[i + n]);
//   }
//   return ans;
// };




// console.log(array)
// var finalValueAfterOperations = function (operations) {
//   let no = 0
//   for (let i = 0; i < operations.length; i++) {
//     if (operations[i] == "--X" || operations[i] == "X--") no--
//     else no++
//   }
//   return no
// };


// var numIdenticalPairs = function (nums) {
//   let no = {}
//   for (let i = 0; i < nums.length; i++) {

//     no[nums[i]] = no[nums[i]] + 1 || 0

//   }
//   return no
// };

// var numIdenticalPairs = function (nums) {

//   let count = 0;
//   const map = {};
//   for (let i = 0; i < nums.length; i++) {

//     if (map[nums[i]]) {
//       count += map[nums[i]]
//       map[nums[i]]++;
//     } else {
//       map[nums[i]] = 1
//       console.log(map)
//     }
//   }

//   return count;

// };

// let isSorted = (arr) => {
//   if (arr.length == 0 || arr.length == 1) {
//     return true
//   }

//   if (arr[0] > arr[1]) {
//     return false
//   } else {
//     let ans = isSorted()
//   }
// }
// const linearSearch = (arr, key, i = 0) => {
//   console.log(arr, "I", i)
//   if (i >= arr.length) return false;
//   if (arr[i] === key) return true;
//   return linearSearch(arr, key, i + 1);

// }

// const binarySearch = (arr, key, s, e) => {
//   if (s > e) return false
//   let mid = Math.floor((s + e) / 2)
//   if (arr[mid] == key) return true
//   if (arr[mid] < key) {
//     return binarySearch(arr, key, mid + 1, e)
//   } else {
//     return binarySearch(arr, key, s, mid - 1)
//   }
// }


// const isPalindrome = (str, s, e) => {
//   if (s > e) return true
//   console.log(str, s, e)
//   if (str[s] != str[e]) {
//     return false
//   }
//   else {
//     return isPalindrome(str, s + 1, e - 1);
//   }
// }

// var subsets = function (nums) {
//   let ans = []
//   const solve = (arr, acc, i) => {
//     if (i == arr.length) {
//       ans.push(acc)
//       return
//     }
//     solve(arr, acc, i + 1)
//     solve(arr, acc.concat(arr[i]), i + 1)
//   }
//   solve(nums, [], 0)
//   return ans
// };

// var subsets = function (nums) {
//   const numOfGroups = Math.pow(2, nums.length)
//   let groups = []
//   for (let i = 0; i < numOfGroups; i++) {
//     let temp = []
//     for (let j = 1, counter = 0; j <= Math.pow(2, nums.length); j *= 2, counter++)
//       if (i & j)
//         temp.push(nums[counter])
//     groups.push(temp)
//   }

//   return groups
// };
// function reverse(head, curr, prev) {
//   if (head == null || head.next == null) return head
//   let smallhead = reverse(head.next)
//   head.next.next = head;
//   head.next = null;
//   return smallhead
// }
// var reverseList = function (head) {
// if (head == null || head.next == null) return head
// let prev = null;
// let curr = head;
// let frwd = null
// reverse(head)
// while (curr != null) {
//   frwd = curr.next
//   curr.next = prev
//   prev = curr
//   curr = frwd
// }
// return head;
// };

// var middleNode = function (head) {

//   if (head == null || head.next == null) return head
//   // if (head.next.next) return head.next
//   let slow = head;
//   let fast = head.next
//   while (fast != null) {
//     fast = fast.next
//     if (fast != null) fast = fast.next
//     slow = slow.next
//   }
//   return slow

// };

// let reverseKGroup = function (head, k) {
//   // base case
//   if (head == null) {
//     return null
//   }
//   // step 1 revers first k nodes
//   let next = null;
//   let curr = head;
//   let prev = null
//   let count = 0

//   while (curr != null && count < k) {
//     next = curr.next
//     curr.next = prev
//     prev = curr
//     curr = next
//     count++
//   }

//   // recursion call
//   if (next != null) {
//     head.next = reverseKGroup(next, k)
//   }
//   return prev

// };

// var reverseKGroup1 = function (head, k) {
//   let curr = head, prev = null, nextNode = null;
//   for (let i = 0; i < k; i++) {
//     if (!curr) return head;
//     curr = curr.next;
//   }

//   curr = head;
//   for (let i = 0; i < k; i++) {
//     nextNode = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = nextNode;
//   }
//   head.next = reverseKGroup(curr, k);

//   return prev;
// };

// function wordSraech(long, short) {
//   let count = 0
//   for (let i = 0; i < long.length; i++) {
//     for (let j = 0; j < short.length; j++) {
//       if (short[j] != long[i + j]) break
//       if (j == short.length - 1) count++
//     }
//   }
//   return count
// }

// var mergeTwoLists = function (list1, list2) {
//   if (list1 == null) return list2
//   if (list2 == null) return list1

//   function solve(f, s) {
//     if (f.next === null) {
//       f.next = s
//       return f
//     }

//     let curr1 = f
//     let next1 = curr1.next
//     let curr2 = s
//     let next2 = curr2.next

//     while (next1 != null && curr2 != null) {
//       if (curr2.data >= curr1.data && curr2.data <= next1.data) {
//         curr1.next = curr2
//         next2 = curr2.next
//         curr2.next = next1

//         curr1 = curr2
//         curr2 = next2

//       } else {
//         curr1 = next1
//         next1 = next1.next
//       }

//       if (next1 == null) {
//         curr1.next = curr2
//         return f
//       }
//     }
//     return f
//   }

//   if (list1.data <= list2.data) return solve(list1, list2)
//   else return solve(list2, list1)

// }


// Shorting ========================================

// buuble Sort =========================================
// const bubbleSort = (arr) => {
//   let swap
//   for (let i = arr.length; i > 0; i--) {
//     swap = true
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//         swap = false
//       }
//     }
//     if (swap) break
//   }
//   return arr
// }

// Selection  Sort =========================================
// const selectionSort = (arr) => {

//   for (let i = 0; i < arr.length; i++) {
//     let lowest = i
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[lowest]) {
//         lowest = j
//       }
//     }
//     if (i !== lowest) {
//       [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
//     }
//   }

//   return arr
// }


// Insersion  Sort =========================================
// const insersionSort = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     let cuurVal = arr[i]
//     let j
//     for (j = i - 1; j >= 0 && arr[j] > cuurVal; j--) {
//       arr[j + 1] = arr[j]
//     }
//     arr[j + 1] = cuurVal
//   }
//   return arr
// }

// Merge  Sort =========================================

// function SortRestOfArray(i, arr, result) {
//   while (i < arr.length) {
//     result.push(arr[i])
//     i++
//   }
// }
// const margeShort = (arr1, arr2) => {
//   let result = []
//   let i = 0;
//   let j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr2[j] > arr1[i]) {
//       result.push(arr1[i])
//       i++
//     } else {
//       result.push(arr2[j])
//       j++
//     }
//   }
//   SortRestOfArray(i, arr1, result)
//   SortRestOfArray(j, arr2, result)
//   return result
// }

// function merg(arr) {
//   if (arr.length <= 1) return arr
//   let mid = Math.floor(arr.length / 2)
//   let left = merg(arr.slice(0, mid))
//   let right = merg(arr.slice(mid))
//   return margeShort(left, right)
// }

// Quick  Sort =========================================

// const pivot = (arr, start = 0, end = arr.length) => {
//   let pivot = arr[start]
//   let swapInd = start
//   for (let i = start + 1; i < arr.length; i++) {
//     if (pivot > arr[i]) {
//       swapInd++;
//       [arr[swapInd], arr[i]] = [arr[i], arr[swapInd]]
//     }
//   }
//   [arr[swapInd], arr[start]] = [arr[start], arr[swapInd]]
//   return swapInd
// }

// const quickSort = (arr, left = 0, right = arr.length - 1) => {
//   let pivIndx = pivot(arr, left, right)
//   if (left < right) {
//     // left
//     quickSort(arr, left, pivIndx - 1)
//     // right
//     quickSort(arr, pivIndx + 1, right)
//   }
//   return arr
// }

const re = quickSort([6, 2, 12, 4, 10, 7, 5, 8])
console.log(re)