var cyclicSort = function (arr) {
    var _a;
    var rightIndex;
    for (var i = 0; i < arr.length;) {
        rightIndex = arr[i] - 1;
        if (arr[i] !== arr[rightIndex]) {
            _a = [arr[rightIndex], arr[i]], arr[i] = _a[0], arr[rightIndex] = _a[1];
        }
        else {
            i++;
        }
    }
    return arr;
};
console.log(cyclicSort([3, 5, 2, 1, 4]));
