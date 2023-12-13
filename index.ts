const palindromeCheck = (word: string): boolean => {
  let i: number = 0,
    j: number = word.length - 1;
  while (i <= j) {
    if (word[i] !== word[j]) {
      return false;
    }
    j--;
    i++;
  }
  return true;
};

let s = 'nammann';
console.log(palindromeCheck(s));
