// you are given an array of integers, and the goal is
// to find the longest subarray (contiguous subsequence)
// whose elements sum up to a specific target value,
// denoted as K.

var lengthLongestSubarr = (arr: number[], k: number): number => {
  let i: number = 0,
    j: number = 0;
  let max: number = -Infinity;
  let sum: number = 0;
  while (j < arr.length) {
    sum = sum + arr[j];
    if (sum < k) {
      j++;
    } else if (sum === k) {
      max = Math.max(max, j - i + 1);
      j++;
    } else if (sum > k) {
      while (sum > k) {
        sum = sum - arr[i];
        i++;
      }
      j++;
    }
  }
  return max;
};

let arr = [8, 6, 5, 2, 7, 1, 3, 1, 9];
let k = 14;
console.log(lengthLongestSubarr(arr, k));
