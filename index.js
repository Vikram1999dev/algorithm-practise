var IslandCounter = /** @class */ (function () {
    function IslandCounter() {
    }
    IslandCounter.prototype.explore = function (island, row, col) {
        var h = island.length;
        var w = island[0].length;
        if (row < 0 || col < 0 || col >= w || row >= h || island[row][col] === 0) {
            return;
        }
        island[row][col] = 0; // Mark the cell as visited
        this.explore(island, row - 1, col);
        this.explore(island, row + 1, col);
        this.explore(island, row, col - 1);
        this.explore(island, row, col + 1);
    };
    IslandCounter.prototype.countIslands = function (island) {
        var h = island.length;
        var w = island[0].length;
        var result = 0;
        for (var i = 0; i < h; i++) {
            for (var j = 0; j < w; j++) {
                if (island[i][j] === 1) {
                    result++;
                    this.explore(island, i, j);
                }
            }
        }
        return result;
    };
    return IslandCounter;
}());
// Example usage:
var islandCounter = new IslandCounter();
var islandGrid = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1],
];
var numberOfIslands = islandCounter.countIslands(islandGrid);
console.log("Number of islands: ".concat(numberOfIslands));
