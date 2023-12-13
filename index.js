var threeLargestNumbers = function (arr) {
    var large = -Infinity, larger = -Infinity, largest = -Infinity;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            large = larger;
            larger = largest;
            largest = arr[i];
        }
        else if (arr[i] > larger) {
            large = larger;
            larger = arr[i];
        }
        else if (arr[i] > large) {
            large = arr[i];
        }
    }
    return [large, larger, largest];
};
console.log(threeLargestNumbers([1, 2, 5, 4, 9, 6, 3, 7, 8, 11, 15, 36]));
