var montonicStack = (arr: number[]): number[] => {
  let stack: number[] = [];
  stack.push(arr[0]);
  for (let i: number = 0; i < arr.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] < arr[i]) {
      stack.pop();
    }
    stack.push(arr[i]);
  }
  return stack;
};

let numbers: number[] = [8, 6, 3, 1, 2, 4, 9, 7, 5];
console.log(montonicStack(numbers));
