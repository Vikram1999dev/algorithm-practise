var minimumSumSubarray = function (arr) {
    var stack = [];
    var result = 0;
    var sumMini = function (stack, arr) {
        var sum = 0;
        for (var idx in stack) {
            sum += arr[idx];
        }
        return sum;
    };
    for (var i = 0; i <= arr.length; i++) {
        while (stack.length > 0 &&
            (i === arr.length || arr[i] < arr[stack[stack.length - 1]])) {
            var poppedIndex = stack.pop();
            var minimumSum = sumMini(stack, arr);
            result +=
                arr[poppedIndex] * (i - poppedIndex) * (arr[poppedIndex] + minimumSum);
        }
        stack.push(i);
    }
    return result;
};
var arr = [3, 2, 1];
console.log(minimumSumSubarray(arr));
