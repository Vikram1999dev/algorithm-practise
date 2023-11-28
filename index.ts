class IslandCounter {
  private explore(island: number[][], row: number, col: number): void {
    const h: number = island.length;
    const w: number = island[0].length;

    if (row < 0 || col < 0 || col >= w || row >= h || island[row][col] === 0) {
      return;
    }

    island[row][col] = 0; // Mark the cell as visited
    this.explore(island, row - 1, col);
    this.explore(island, row + 1, col);
    this.explore(island, row, col - 1);
    this.explore(island, row, col + 1);
  }

  countIslands(island: number[][]): number {
    const h: number = island.length;
    const w: number = island[0].length;
    let result: number = 0;

    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        if (island[i][j] === 1) {
          result++;
          this.explore(island, i, j);
        }
      }
    }

    return result;
  }
}

// Example usage:
const islandCounter = new IslandCounter();

const islandGrid: number[][] = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];

const numberOfIslands = islandCounter.countIslands(islandGrid);
console.log(`Number of islands: ${numberOfIslands}`);
