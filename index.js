// you are given an array of integers, and the goal is
// to find the longest subarray (contiguous subsequence)
// whose elements sum up to a specific target value,
// denoted as K.
var lengthLongestSubarr = function (arr, k) {
    var i = 0, j = 0;
    var max = -Infinity;
    var sum = 0;
    while (j < arr.length) {
        sum = sum + arr[j];
        if (sum < k) {
            j++;
        }
        else if (sum === k) {
            max = Math.max(max, j - i + 1);
            j++;
        }
        else if (sum > k) {
            while (sum > k) {
                sum = sum - arr[i];
                i++;
            }
            j++;
        }
    }
    return max;
};
var arr = [8, 6, 5, 2, 7, 1, 3, 1, 9];
var k = 14;
console.log(lengthLongestSubarr(arr, k));
