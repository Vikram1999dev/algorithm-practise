var mergeOverlappingIntervals = (intervals: number[][]): number[][] => {
  let result: number[][] = [];
  if (intervals.length <= 1) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);
  let previous: number[] = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (previous[1] >= intervals[i][0]) {
      previous = [
        Math.min(previous[0], intervals[i][0]),
        Math.max(previous[1], intervals[i][1]),
      ];
    } else {
      result.push(previous);
      previous = intervals[i];
    }
  }
  result.push(previous);
  return result;
};

let theArrs: number[][] = [
  [1, 3],
  [9, 12],
  [2, 6],
  [8, 13],
  [15, 18],
];

console.log(mergeOverlappingIntervals(theArrs));
