//  FindingSubstrings - JavaScript============

const subString = (word) => {
  if (word == "") return ""

  const first = word[0]


  const rest = subString(word.substring(1))

  let result = ""
  rest.split(",").forEach((subseq) => {
    // console.log(subseq, first)
    result += "," + first + subseq
    result += "," + subseq
  })

  return result.substring(1)

}
subString("abc")
// console.log(subString("abc"))



// Desimal to Binary Convert +======================

let Bnum = 13;
let Bremender;
let Bans = 0;
let Bmultiply = 1;

while (Bnum > 0) {
  // remender
  Bremender = Math.floor(Bnum % 2);
  // quotient
  Bnum = Math.floor(Bnum / 2)
  // Update Ans 
  Bans = Bremender * Bmultiply + Bans
  // Unpdate multiply
  Bmultiply = Bmultiply * 10
}
// console.log(Bans)

// Binary to Desimal Convert +======================

let Dnum = 1101;
let Dremender;
let Dans = 0;
let Dmultiply = 1;

while (Dnum > 0) {
  // reminder
  Dremender = Math.floor(Dnum % 10);
  Dnum = Math.floor(Dnum / 10);
  Dans = Dmultiply * Dremender + Dans;
  Dmultiply = Dmultiply * 2
  // console.log(Dremender, Dnum, Dans, Dmultiply)
}

// console.log(Dans)


// var containsDuplicate = function (nums) {
//   // =========  Brutforce Approch 1st+++++++++++++++++
//   // for (let i= 0 ; i < nums.length; i++){
//   //     for(let j = i+1; j< nums.length;j++){
//   //         if(nums[i] == nums[j]){
//   //             return true
//   //         }
//   //     }
//   // }
//   // return false

//   //

//   let obj = {}
//   for (let i = 0; i < nums.length; i++) {
//     if (!obj[nums[i]]) {
//       obj[nums[i]] = 1;
//     } else {
//       return true
//     }
//   }
//   return false
// };

// console.log(containsDuplicate([1, 2, 3, 1]));


// var groupAnagrams = function (strs) {
//   // let str = new Map()
//   // for (let i = 0; i < strs.length; i++) {
//   //   let sortedStr = strs[i].split('').sort().join('')
//   //   if (str.has(sortedStr)) {
//   //     let array = str.get(sortedStr)
//   //     array.push(strs[i])
//   //   } else {
//   //     str.set(sortedStr, [strs[i]])
//   //   }
//   // }
//   // return Array.from(str.values())

// };

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
// Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]


// var reverse = function (x) {
//   let ans = 0;
//   let rem;
//   const min = -2147483648
//   const max = 2147483647
//   while (x != 0) {
//     rem = Math.floor(x % 10)
//     if (x < 0) x = Math.ceil(x / 10)
//     else x = Math.floor(x / 10)
//     if (ans > max / 10 || ans < min / 10) return 0
//     ans = ans * 10 + rem
//   }
//   return ans
// };

// const changeSmallToCapital = (str) => {
//   let result = ""
//   for (let x = 0; x < str.length; x++) {
//     result += String.fromCharCode(str[x].charCodeAt() - 32)
//   }
//   return result

// }

const armstrongNumber = (no) => {
  let ans
  let n = no
  let length = 0;
  while (n) {
    length++
    n = Math.floor(n / 10)
  }


}
console.log(armstrongNumber(153))