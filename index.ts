var firstRepeatingCharacter = (str: string): string => {
  let maps: { [key: string]: number } = {};
  for (let i: number = 0; i < str.length; i++) {
    maps[str[i]] = (maps[str[i]] || 0) + 1;
  }

  for (let i: number = 0; i < str.length; i++) {
    if (maps[str[i]] === 1) {
      return str[i];
    }
  }
  return '';
};

let s = 'abcdcaf';
console.log(firstRepeatingCharacter(s));
