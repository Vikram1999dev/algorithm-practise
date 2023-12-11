//Write a function that returns the maximum possible total speed or the minimum
//possible total speed of all of the tandem bicycles being ridden based on an
//input parameter,fastest.If fastest=true,your function should return the maximum
// possible total speed;otherwise it should return minimum total speed
var tandemCycle = function (red, blue, fastest) {
    red.sort(function (a, b) { return a - b; });
    blue.sort(function (a, b) { return a - b; });
    var sum = 0;
    for (var i = 0; i < red.length; i++) {
        sum += fastest
            ? Math.max(red[i], blue[blue.length - 1 - i])
            : Math.max(red[i], blue[i]);
    }
    return sum;
};
var redShirtSpeed = [5, 5, 3, 9, 2];
var blueShirtSpeed = [3, 6, 7, 2, 1];
var fastest = false;
console.log(tandemCycle(redShirtSpeed, blueShirtSpeed, fastest));
