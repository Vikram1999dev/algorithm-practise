var nextGreaterElement = (arr: number[]): number[] => {
  let result: number[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    result.push(-1);
  }
  let stack: number[] = [];
  for (let i: number = 0; i < 2 * arr.length; i++) {
    let cirIndex = i % arr.length;
    while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[cirIndex]) {
      result[stack.pop() as number] = arr[cirIndex];
    }
    stack.push(cirIndex);
  }
  return result;
};

let arr: number[] = [2, 5, -3, -4, 6, 7, 2];
console.log(nextGreaterElement(arr));
