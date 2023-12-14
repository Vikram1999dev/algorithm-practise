//You are given a string of available characters and a
//string representing a document that you need to generate
//You are only able to generate the document if the frequency
//of unique characters in the characters string is greater than or equal
//to the frequency of unique characters in the document string
var generateDocument = function (str, document) {
    var maps = {};
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        maps[char] = (maps[char] || 0) + 1;
    }
    console.log(maps);
    for (var i = 0; i < document.length; i++) {
        if (maps[document[i]]) {
            if (maps[document[i]] === 0) {
                return false;
            }
            maps[document]--;
        }
        else {
            return false;
        }
    }
    return true;
};
var s = 'Bstehetsi ogEAxpelrt x ';
var d = 'AlgoExpert is the Best!';
console.log(generateDocument(s, d));
