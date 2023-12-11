//Write a function that returns the maximum possible total speed or the minimum
//possible total speed of all of the tandem bicycles being ridden based on an
//input parameter,fastest.If fastest=true,your function should return the maximum
// possible total speed;otherwise it should return minimum total speed

var tandemCycle = (red: number[], blue: number[], fastest: boolean): number => {
  red.sort((a, b) => a - b);
  blue.sort((a, b) => a - b);
  let sum: number = 0;

  for (let i: number = 0; i < red.length; i++) {
    sum += fastest
      ? Math.max(red[i], blue[blue.length - 1 - i])
      : Math.max(red[i], blue[i]);
  }

  return sum;
};

let redShirtSpeed = [5, 5, 3, 9, 2];
let blueShirtSpeed = [3, 6, 7, 2, 1];
let fastest = false;
console.log(tandemCycle(redShirtSpeed, blueShirtSpeed, fastest));
