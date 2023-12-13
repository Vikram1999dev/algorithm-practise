var palindromeCheck = function (word) {
    var i = 0, j = word.length - 1;
    while (i <= j) {
        if (word[i] !== word[j]) {
            return false;
        }
        j--;
        i++;
    }
    return true;
};
var s = 'nammann';
console.log(palindromeCheck(s));
