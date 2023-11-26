var maxSumWithWindow = function (arr, windowSize) {
    var windowSum = 0;
    for (var i = 0; i < windowSize; i++) {
        windowSum += arr[i];
    }
    var maxSum = windowSum;
    var temp = 0;
    for (var i = windowSize; i < arr.length; i++) {
        windowSum = windowSum + arr[i] - arr[i - windowSize];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
};
console.log(maxSumWithWindow([1, 4, 2, 10, 2, 3, 1, 0, 20], 4));
