var firstNegativeNumber = function (arr, k) {
    var negativeEle = [];
    for (var i = 0; i < arr.length - k + 1; i++) {
        var foundNegative = false;
        for (var j = 0; j < k; j++) {
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
var arr = [1, -3, 6, -9, 4, 5, -66, 1, 4, -5, -2];
console.log(firstNegativeNumber(arr, 4));
