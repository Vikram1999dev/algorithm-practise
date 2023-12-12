var binarySearch = function (arr, target) {
    arr.sort(function (a, b) { return a - b; });
    var start = 0, end = arr.length - 1;
    var mid;
    while (start <= end) {
        mid = start + Math.floor((end - start) / 2);
        console.log('something', mid);
        if (arr[mid] === target) {
            return mid; // returning the index instead of the value
        }
        else if (arr[mid] > target) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return -1;
};
console.log(binarySearch([1, 2, 4, 3, 11, 13, 15, 5, 6, 12], 6));
