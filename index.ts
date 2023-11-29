const firstNegativeNumber = (arr: number[], k: number): number[] => {
  let negativeEle: number[] = [];
  //arr.length - k + 1 is no of position of window in its entirety
  for (let i: number = 0; i < arr.length - k + 1; i++) {
    let foundNegative = false;
    for (let j: number = 0; j < k; j++) {
      if (arr[i + j] < 0) {
        negativeEle.push(arr[i + j]);
        foundNegative = true;
        break;
      }
    }
    if (!foundNegative) {
      negativeEle.push(0); // If no negative number is found in the window, push 0.
    }
  }
  return negativeEle;
};

let arr: number[] = [1, -3, 6, -9, 4, 5, -66, 1, 4, -5, -2];
console.log(firstNegativeNumber(arr, 4));
