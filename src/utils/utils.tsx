// Todo - create an interface for these arguments
export const generateRandomTiles = (
  numRows: number = 2,
  numCols: number = 2,
  // // returns a dead cell 70% of the time, should b decimal point
  chanceOfLife: number = 0.5
): // below is ts syntax for returning 2d array
(0 | 1)[][] => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(
      Array.from(Array(numCols), () => (chanceOfLife > Math.random() ? 1 : 0))
    );
  }
  return rows;
};
