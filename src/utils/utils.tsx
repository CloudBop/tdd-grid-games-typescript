// export interface GridState {
//   grid: number[][];
// }

// type Cell = {
//   value: number;
// };

// type Cells = {
//   grid: [][];
// };

// const CELLS2D: Cells[][];

const deepCopy = (arr: (1 | 0)[][]) => {
  const copy = JSON.parse(JSON.stringify(arr));
  return copy;
};

// recursive deepClone of multi-demnsion array of primitives [][]
// const deepCloneArrayOnly = (arr: []) => {
//   //  deepCloneArrayOnly - ie 2Darrays of primitive values
//   var len = arr.length;
//   var newArr = new Array(len);
//   for (var i = 0; i < len; i++) {
//     if (Array.isArray(arr[i])) {
//       newArr[i] = deepCloneArrayOnly(arr[i]);
//     } else {
//       newArr[i] = arr[i];
//     }
//   }
//   return newArr;
// };

// Todo - create an interface for these arguments
export const generateRandomTiles = (
  numRows: number = 2,
  numCols: number = 2,
  // // returns a dead cell 70% of the time, should b decimal point
  chanceOfLife: number = 0.5 // below is ts syntax for returning 2d array
): (0 | 1)[][] => {
  const rows = [];
  //
  for (let i = 0; i < numRows; i++) {
    rows.push(
      Array.from(Array(numCols), () => (chanceOfLife > Math.random() ? 1 : 0))
    );
  }
  return rows;
};

export const invertClickedCell = (
  gCurrent: (0 | 1)[][],
  i: number,
  k: number
): [][] => {
  // use immmer to not mutate state, not easy with TS as immer.produce() returns strange fn type ![]
  // let newGrid = deepCopy(gCurrent);
  let newGrid = deepCopy(gCurrent);
  //invert cell
  newGrid[i][k] = newGrid[i][k] ? 0 : 1;
  //
  return newGrid;
};

export const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];
export const regenerateLifecycle = (gCurrent: (0 | 1)[][]) => {
  let gCopy = deepCopy(gCurrent);
  //
  const numRows = gCopy.length;
  const numCols = gCopy[0].length;
  //
  for (let i = 0; i < numRows; i++) {
    for (let k = 0; k < numCols; k++) {
      let neighbours = 0;
      //
      operations.forEach(([x, y]) => {
        const newI = i + x;
        const newK = k + y;
        // check grid boundries
        if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
          neighbours += gCurrent[newI][newK];
        }
      });
      // life logic
      if (neighbours < 2 || neighbours > 3) {
        // kill. rules 1 & 3
        gCopy[i][k] = 0;
      } else if (gCurrent[i][k] === 0 && neighbours === 3) {
        // rule 4
        gCopy[i][k] = 1;
        // notice- rule2 does nothing
      }
    }
  }
  return gCopy;
};
