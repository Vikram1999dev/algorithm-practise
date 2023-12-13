const caesarCipherEncryptor = (word: string, key: number): string => {
  let stringArr: string[] = [];
  for (let i: number = 0; i < word.length; i++) {
    let ccode = (word.charCodeAt(i) - 97 + key) % 26;
    stringArr.push(String.fromCharCode(ccode + 97));
  }
  return stringArr.join('');
};

let word: string = 'abc';
let key: number = 5;

console.log(caesarCipherEncryptor(word, key));
