// Given two non-empty arrays of integers, array and sequence, write a function that
// determines whether the sequence is a valid subsequence of the array.
// A subsequence of an array is a set of numbers that appear in the same order as
// they appear in the array, but not necessarily consecutively.

const validSubsequence = (arr: number[], sequence: number[]): boolean => {
  let j: number = 0;
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] === sequence[j]) {
      j++;
    }
  }

  return j === sequence.length;
};

console.log(
  validSubsequence(
    [5, 1, 22, 25, 6, -1, 8, 10, 12, 60, 40, 30, 20, 45],
    [22, 6, 8, 12, 40, 30],
  ),
);
