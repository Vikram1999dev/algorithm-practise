var firstRepeatingCharacter = function (str) {
    var maps = {};
    for (var i = 0; i < str.length; i++) {
        maps[str[i]] = (maps[str[i]] || 0) + 1;
    }
    for (var i = 0; i < str.length; i++) {
        if (maps[str[i]] === 1) {
            return str[i];
        }
    }
    return '';
};
var s = 'abcdcaf';
console.log(firstRepeatingCharacter(s));
