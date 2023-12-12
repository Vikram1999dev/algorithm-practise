var fibonacciSeries = function (position) {
    var fibo = [0, 1];
    for (var i = 2; i < position; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
};
console.log(fibonacciSeries(150));
