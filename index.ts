var minimumSumSubarray = (arr: number[]): number => {
  let stack: number[] = [];
  let result: number = 0;
  var sumMini = (stack: number[], arr: number[]): number => {
    let sum = 0;
    for (const idx in stack) {
      sum += arr[idx];
    }
    return sum;
  };

  for (let i = 0; i <= arr.length; i++) {
    while (
      stack.length > 0 &&
      (i === arr.length || arr[i] < arr[stack[stack.length - 1]])
    ) {
      let poppedIndex: number = stack.pop();
      let minimumSum = sumMini(stack, arr);
      result +=
        arr[poppedIndex] * (i - poppedIndex) * (arr[poppedIndex] + minimumSum);
    }
    stack.push(i);
  }
  return result;
};

let arr: number[] = [3, 2, 1];
console.log(minimumSumSubarray(arr));
