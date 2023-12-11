// Design an algorithm to arrange a class photo of students
// in a way that maximizes visual aesthetics and ensures everyone is clearly visible.
var classPhotos = function (red, blue) {
    red.sort(function (a, b) { return a - b; });
    blue.sort(function (a, b) { return a - b; });
    var redColor = true;
    var blueColor = true;
    for (var i = 0; i < red.length; i++) {
        if (red[i] <= blue[i]) {
            redColor = false;
            break;
        }
        if (red[i] >= blue[i]) {
            blueColor = false;
            break;
        }
    }
    return redColor || blueColor;
};
var redShirtHeight = [5, 2, 3, 9, 11, 7, 3, 6];
var blueShirtHeight = [14, 2, 3, 1, 7, 8, 9, 4];
console.log(classPhotos(redShirtHeight, blueShirtHeight));
