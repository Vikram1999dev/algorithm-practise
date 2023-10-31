const num123: number[] = [1, 2, 3, 4, 5];
console.log('hello');
let start: number = 0,
  end: number = num123.length - 1;
let target: number = 6;
const maps: { [key: string]: number } = {};
for (let i: number = 0; i < num123.length; i++) {
  maps[num123[i]] = i;
}

for (let i: number = 0; i < num123.length; i++) {
  if (maps[target - num123[i]] && i !== maps[target - num123[i]]) {
    console.log([i, maps[target - num123[i]]]);
  }
}
