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

const deepCloneArrayOnly = (arr: []) => {
  //  deepCloneArrayOnly - ie 2Darrays of primitive values
  var len = arr.length;
  var newArr = new Array(len);
  for (var i = 0; i < len; i++) {
    if (Array.isArray(arr[i])) {
      newArr[i] = deepCloneArrayOnly(arr[i]);
    } else {
      newArr[i] = arr[i];
    }
  }
  return newArr;
};

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
