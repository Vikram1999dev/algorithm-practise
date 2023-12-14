// Given an array of integers arr and a target sum target, implement a function
// to find all unique triplets in the array that add up to the target sum. Return
// a list of triplets. Each triplet should be a list of three integers.

const threeNumberSum = (arr: number[], targetSum: number): number[][] => {
  arr.sort((a, b) => a - b);
  let arrStack: number[][] = [];
  let l: number, r: number;
  for (let i: number = 0; i < arr.length; i++) {
    l = i + 1;
    r = arr.length - 1;
    while (l < r) {
      let sum = arr[i] + arr[l] + arr[r];
      if (sum == targetSum) {
        arrStack.push([arr[i], arr[l], arr[r]]);
        l++;
        r--;
      } else if (sum < targetSum) {
        l++;
      } else if (sum > targetSum) {
        r--;
      }
    }
  }
  return arrStack;
};

let arr = [-7, 3, 4, 1, 3, -4, 4];
console.log(threeNumberSum(arr, 0));
