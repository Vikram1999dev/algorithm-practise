var twoSumArray = (arr, sum) => {
  var maps = new Map();
  var twoIndex = [];
  //here array value is index and its index is value in hash table
  for (let i = 0; i < arr.length; i++) {
    maps.set(arr[i], i);
  }
  console.log(maps);
  for (i = 0; i < arr.length; i++) {
    let target = sum - arr[i];
    //will return true or false
    if (maps.has(target)) {
      twoIndex[0] = i;
      twoIndex[1] = maps.get(target);
      break;
    }
  }
  console.log(twoIndex);
};

var arr = [1, 2, 3, 4, 5];
var sum = 6;
twoSumArray(arr, sum);
