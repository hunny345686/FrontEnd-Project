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
const array = [-5, -4, 3, 5, 6, -6, 4];

function getSumOfPairedGetFirstZero(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] + array[j] == 0) {
        return [array[i], array[j]];
      }
    }
  }
}

test.addEventListener(
  "mouseenter",
  () => (document.querySelector(".classna").getElementsByClassName.opecity = 1)
);

test.addEventListener(
  "mouseleave",
  () => (document.querySelector(".classna").getElementsByClassName.opecity = 0)
);
element.addEventListener("mouseleave", (e) =>
  element.classList.remove(className)
);
const res = getSumOfPairedGetFirstZero(array);
console.log(res);
