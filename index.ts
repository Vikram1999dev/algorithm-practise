// Design an algorithm to arrange a class photo of students
// in a way that maximizes visual aesthetics and ensures everyone is clearly visible.

const classPhotos = (red: number[], blue: number[]) => {
  red.sort((a, b) => a - b);
  blue.sort((a, b) => a - b);
  let redColor: boolean = true;
  let blueColor: boolean = true;

  for (let i: number = 0; i < red.length; i++) {
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
let redShirtHeight: number[] = [5, 2, 3, 9, 11, 7, 3, 6];
let blueShirtHeight: number[] = [14, 2, 3, 1, 7, 8, 9, 4];

console.log(classPhotos(redShirtHeight, blueShirtHeight));
