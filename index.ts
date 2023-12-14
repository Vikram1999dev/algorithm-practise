//You are given a string of available characters and a
//string representing a document that you need to generate
//You are only able to generate the document if the frequency
//of unique characters in the characters string is greater than or equal
//to the frequency of unique characters in the document string

const generateDocument = (str: string, document: string): boolean => {
  let maps: { [key: string]: number } = {};
  for (let char of s) {
    maps[char] = (maps[char] || 0) + 1;
  }

  console.log(maps);

  for (let i = 0; i < document.length; i++) {
    if (maps[document[i]]) {
      if (maps[document[i]] === 0) {
        return false;
      }
      maps[document]--;
    } else {
      return false;
    }
  }

  return true;
};

let s = 'Bste!hetsi ogEAxpelrt x ';
let d = 'AlgoExpert is the Best!';
console.log(generateDocument(s, d));
