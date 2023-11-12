var nextGreaterElement = function (arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(-1);
    }
    var stack = [];
    for (var i = 0; i < 2 * arr.length; i++) {
        var cirIndex = i % arr.length;
        while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[cirIndex]) {
            result[stack.pop()] = arr[cirIndex];
        }
        stack.push(cirIndex);
    }
    return result;
};
var arr = [2, 5, -3, -4, 6, 7, 2];
console.log(nextGreaterElement(arr));
