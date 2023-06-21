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
