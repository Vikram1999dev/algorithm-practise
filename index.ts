const maxSumWithWindow = (arr: number[], windowSize: number): number => {
  let windowSum: number = 0;
  for (let i: number = 0; i < windowSize; i++) {
    windowSum += arr[i];
  }
  let maxSum: number = windowSum;

  let temp: number = 0;

  for (let i = windowSize; i < arr.length; i++) {
    windowSum = windowSum + arr[i] - arr[i - windowSize];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
};

console.log(maxSumWithWindow([1, 4, 2, 10, 2, 3, 1, 0, 20], 4));
