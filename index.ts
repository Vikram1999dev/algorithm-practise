const fibonacciSeries = (position: number): number[] => {
  let fibo: number[] = [0, 1];
  for (let i: number = 2; i < position; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
};

console.log(fibonacciSeries(150));
