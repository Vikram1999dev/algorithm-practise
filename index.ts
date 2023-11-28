const cyclicSort = (arr: number[]): number[] => {
  let rightIndex: number;
  for (let i: number = 0; i < arr.length; ) {
    rightIndex = arr[i] - 1;
    if (arr[i] !== arr[rightIndex]) {
      [arr[i], arr[rightIndex]] = [arr[rightIndex], arr[i]];
    } else {
      i++;
    }
  }
  return arr;
};

console.log(cyclicSort([3, 5, 2, 1, 4]));
