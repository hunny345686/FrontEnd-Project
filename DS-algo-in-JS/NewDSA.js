// Revesr The array

const reversArray = (str) => {
  let start = 0
  let end = str.length - 1
  while (start < end) {
    let temp = str[start]
    str[start] = str[end]
    str[end] = temp
    start++
    end--
  }
  return str

}
// console.log(reversArray("skeeG"))

// ++Maximum and minimum of an array using minimum number of comparisons ++++++++++++

const findSumOfMinMax = (A, N) => {
  let min = max = A[0]
  for (let i = 1; i < N; i++) {
    if (min > A[i]) {
      min = A[i]
    } else if (max < A[i]) {
      max = A[i]
    }
  }
  console.log(min)
  // return (max + min)
}

// console.log(findSumOfMinMax([1, 3, 4, 1], 4))


// +++++++===========Kth smallest element+===============+++

var findKthLargest = function (nums, k) {
  nums.sort((a, b) => a - b)
  return nums[nums.length - k]
};


// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))

// +++============ Check if two arrays are equal or not +++++================
// Approch 1 ++++++++++++++++++++++
const check = (A, B, N) => {
  let s1 = 0
  let s2 = 0n

  for (let i = 0; i < N; i++) {
    s1 += A[i]
  }
  for (let j = 0; j < N; j++) {
    s2 += B[j]
  }
  return s1 === s2 ? 1 : 0
}

// Approch 2+++++++++++++++++++++++=
// const check = (A, B, N) => {
//   //using a Map to store frequency of elements.
//   let mp = new Map();

//   //incrementing frequencies of elements present in first array in Map.
//   for (let i = 0; i < N; i++) {
//     if (!mp.has(A[i]))
//       mp.set(A[i], 0);
//     mp.set(A[i], mp.get(A[i]) + 1);
//   }


//   //decrementing frequencies of elements present in second array in Map.
//   for (let i = 0; i < N; i++) {
//     if (!mp.has(B[i]))
//       mp.set(B[i], 0);
//     mp.set(B[i], mp.get(B[i]) - 1);
//   }



//   //iterating over the Map.
//   for (let [key, value] of mp) {

//     //if frequency of any element in Map now is not zero it means that
//     //its count in two arrays was not equal so the arrays are not equal.
//     if (value != 0) {

//       //returning false since arrays are not equal.
//       return false;
//     }
//   }
//   //returning true if arrays are equal.
//   return true;
// }

// console.log(check([1, 2, 5], [2, 4, 15], 3))

// ++++++++++++=== 1480. Running Sum of 1d Array +++++=========


var runningSum = function (nums) {
  let ans = [0];
  for (let i = 0; i < nums.length; i++) {
    console.log(i - 1)
    ans[i] = nums[i] + ans[ans.length - 1]
  }
  return ans
};

// console.log(runningSum([3, 1, 2, 10, 1]))


// +++++++++++=========Bubbul Sort ++++++++++============


const bubbulSort = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

// console.log(bubbulSort([4, 3, 5, 1, 2, 6]))



// +++++++++++=========Selection Sort ++++++++++============


const selectionSort = (arr) => {
  let min
  for (let i = 0; i < arr.length - 1; i++) {
    min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    if (i != min) {
      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
  }
  return arr
}

// console.log(selectionSort([4, 3, 5, 1, 2, 6]))


// +++++++++++=========Insertion Sort ++++++++++============


const insertionSort = (arr) => {
  let temp
  for (let i = 1; i < arr.length; i++) {
    temp = arr[i]
    for (var j = i - 1; arr[j] > temp && j > -1; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = temp
  }

  return arr
}


// console.log(insertionSort([4, 3, 5, 1, 2, 6, 3, 4, 5, 7, 9, 0]))



// +++++++++++=========Merge Sort ++++++++++============


const mergeHelper = (arr1, arr2) => {

  let combineArray = []
  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      combineArray.push(arr1[i])
      i++
    } else {
      combineArray.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    combineArray.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    combineArray.push(arr2[j])
    j++
  }

  return combineArray
}
// +++++++++++=========Merge Sort Recursivly ++++++++++============

const mergeSort = (arr) => {
  if (arr.length == 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  return mergeHelper(mergeSort(left), mergeSort(right))
}


// console.log(mergeSort([3, 0, -1, -10, 5, 8]))

// const str = "Prem             "
// const str2 = "Hello     "
// String.prototype.trueLen = function () {
//   let withSpaceL = this.length
//   let trueL = this.trim().length
//   return `Totle Lenth is ${withSpaceL} and total word lenth is ${trueL}`
// }

// let obj = {
//   name: "prem"
// }

// console.log(OB.getOwnPropertyDescriptor(obj, "name"))


// // console.log(str2.trueLen())

// / +++++++++++=========Quick Sort ++++++++++============
const swaphelper = (arr, fIdx, sIdx) => {
  let temp = arr[fIdx]
  arr[fIdx] = arr[sIdx]
  arr[sIdx] = temp
}
const pivetHelperCode = (arr, pIdx = 0, endPIdx = arr.length - 1) => {
  let swapIdx = pIdx
  for (let i = pIdx + 1; i <= endPIdx; i++) {
    if (arr[i] < arr[pIdx]) {
      swapIdx++
      swaphelper(arr, swapIdx, i)
    }
  }
  swaphelper(arr, pIdx, swapIdx)
  return swapIdx
}
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pIdx = pivetHelperCode(arr, left, right)
    quickSort(arr, left, pIdx - 1)
    quickSort(arr, pIdx + 1, right)
  }
  return arr
}
console.log(quickSort([4, 3, 5, 1, 2, 6, 3, 4, 5, 7, 9, 0]))



