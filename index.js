var caesarCipherEncryptor = function (word, key) {
    var stringArr = [];
    for (var i = 0; i < word.length; i++) {
        var ccode = (word.charCodeAt(i) - 97 + key) % 26;
        stringArr.push(String.fromCharCode(ccode + 97));
    }
    return stringArr.join('');
};
var word = 'abc';
var key = 5;
console.log(caesarCipherEncryptor(word, key));
