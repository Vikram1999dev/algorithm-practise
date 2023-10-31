var num123 = [1, 2, 3, 4, 5];
console.log('hello');
var start = 0, end = num123.length - 1;
var target = 6;
var maps = {};
for (var i = 0; i < num123.length; i++) {
    maps[num123[i]] = i;
}
for (var i = 0; i < num123.length; i++) {
    if (maps[target - num123[i]] && i !== maps[target - num123[i]]) {
        console.log([i, maps[target - num123[i]]]);
    }
}
