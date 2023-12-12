const binarySearch = (arr: number[], target: number): number => {
  arr.sort((a, b) => a - b);
  let start: number = 0,
    end: number = arr.length - 1;
  let mid: number;
  while (start <= end) {
    mid = start + Math.floor((end - start) / 2);
    console.log('something', mid);
    if (arr[mid] === target) {
      return mid; // returning the index instead of the value
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

console.log(binarySearch([1, 2, 4, 3, 11, 13, 15, 5, 6, 12], 6));
