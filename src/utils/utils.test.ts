//
import {
  generateRandomTiles,
  invertClickedCell,
  regenerateLifecycle,
  lightsOutGridGame,
  regenerateLifecycleWrapGridAround,
} from "./utils";
//
describe("generate grid function 2darray [[row],[col]]", () => {
  test("should create an 2d array of pecentage weighted random 1||0", () => {
    //
    const gridResult = generateRandomTiles();
    /**
     * [ [x,x],[x,x]]
     */
    expect(gridResult.length === 2).toBe(true);
    expect(gridResult[0].length === 2).toBe(true);
    expect(gridResult[1].length === 2).toBe(true);
  });
  test("should create an 2d array of dead (false) cells", () => {
    //
    const gridResult = generateRandomTiles(2, 2, 0);
    /**
     * [ [0,0],[0,0]]
     */
    expect(gridResult.length === 2).toBe(true);
    expect(gridResult[0][0] === 0).toBe(true);
    expect(gridResult[0][1] === 0).toBe(true);
    expect(gridResult[1][0] === 0).toBe(true);
    expect(gridResult[1][0] === 0).toBe(true);
  });
  test("should create an 2d array of alive (true) cells", () => {
    //
    const gridResult = generateRandomTiles(2, 2, 2);
    /**
     * [ [1,1],[1,1] ]
     */
    expect(gridResult.length === 2).toBe(true);
    expect(gridResult.length === 2).toBe(true);
    expect(gridResult[0][0] === 1).toBe(true);
    expect(gridResult[0][1] === 1).toBe(true);
    expect(gridResult[1][0] === 1).toBe(true);
    expect(gridResult[1][0] === 1).toBe(true);
  });
  test("should invert cell", () => {
    //
    const gridResult = generateRandomTiles(2, 2, 2);
    expect(gridResult.length === 2).toBe(true);
    expect(gridResult[0][0] === 1).toBe(true);
    expect(gridResult[0][1] === 1).toBe(true);
    expect(gridResult[1][0] === 1).toBe(true);
    expect(gridResult[1][0] === 1).toBe(true);
    /**
     * [ [1,1],[1,1] ]
     */
    const gridAfterClick = invertClickedCell(gridResult, 0, 0);
    expect(gridAfterClick[0][0] === 0).toBe(true);
  });
  // test('should invert value of cell when clicked', () => {
  //   //
  //   const gridResult = generateRandomTiles(2, 2, 2);
  //   /**
  //    * [ [1,1],[1,1] ]
  //    */
  //   expect(gridResult.length === 4).toBe(true)
  // })
});

describe("gol algo", () => {
  // ASSERT
  //
  test("dead cell with no neighbours should remain dead 0", () => {
    /*
    [
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ]
    */
    const gridInit = generateRandomTiles(3, 3, 0);
    // middle cell
    const cell = gridInit[1][1];
    expect(cell === 0).toBe(true);

    const updatedGrid = regenerateLifecycle(gridInit);
    const updatedCell = updatedGrid[1][1];
    expect(updatedCell === 0).toBe(true);
  });

  test("dead cell with less than 2 neightbours dies, rules 1(underpopulation)", () => {
    const gridInit = [
      [1, 1, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    //
    expect(gridInit[0][0] === 1).toBe(true);
    expect(gridInit[0][1] === 1).toBe(true);

    const updatedGrid = regenerateLifecycle(gridInit as (0 | 1)[][]);
    // these should be dead
    expect(updatedGrid[0][0] === 0).toBe(true);
    expect(updatedGrid[0][1] === 0).toBe(true);
  });

  test("dead cell with more than 3 neightbours dies, rules 3(overpopulation)", () => {
    const gridInit = [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
    ];
    //
    expect(gridInit[0][0] === 0).toBe(true);
    expect(gridInit[0][1] === 1).toBe(true);
    expect(gridInit[1][1] === 1).toBe(true);

    const updatedGrid = regenerateLifecycle(gridInit as (0 | 1)[][]);
    // these should be dead
    expect(updatedGrid[1][1] === 0).toBe(true);
  });

  test("Any dead cell with exactly three live neighbours becomes a live cell as if by reproduction.", () => {
    const gridInit = [
      [0, 0, 0],
      [0, 1, 1],
      [0, 1, 0],
    ];
    //
    expect(gridInit[2][2] === 0).toBe(true);

    const updatedGrid = regenerateLifecycle(gridInit as (0 | 1)[][]);
    // these should be live
    expect(updatedGrid[2][2] === 1).toBe(true);
  });

  test("two frame animation", () => {
    const gridInit = [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ];
    //
    expect(gridInit[0][1] === 1).toBe(true);
    expect(gridInit[2][1] === 1).toBe(true);
    //
    expect(gridInit[1][0] === 0).toBe(true);
    expect(gridInit[1][2] === 0).toBe(true);
    //
    expect(gridInit[1][1] === 1).toBe(true);

    // frame2
    let updatedGrid = regenerateLifecycle(gridInit as (0 | 1)[][]);
    expect(updatedGrid[0][1] === 0).toBe(true);
    expect(updatedGrid[2][1] === 0).toBe(true);
    // these should be inverted
    expect(updatedGrid[1][0] === 1).toBe(true);
    expect(updatedGrid[1][2] === 1).toBe(true);
    //
    expect(updatedGrid[1][1] === 1).toBe(true);

    // frame 3 (===frame1)
    updatedGrid = regenerateLifecycle(updatedGrid);
    expect(updatedGrid[0][1] === 1).toBe(true);
    expect(updatedGrid[2][1] === 1).toBe(true);
    //
    expect(updatedGrid[1][0] === 0).toBe(true);
    expect(updatedGrid[1][2] === 0).toBe(true);
    //
    expect(updatedGrid[1][1] === 1).toBe(true);
  });

  test("the grid should wrap around itself", () => {
    const gridInit = [
      [0, 0, 0],
      [1, 0, 1],
      [1, 0, 1],
    ];
    //
    expect(gridInit[1][0] === 1).toBe(true);
    expect(gridInit[1][2] === 1).toBe(true);
    expect(gridInit[2][0] === 1).toBe(true);
    expect(gridInit[2][2] === 1).toBe(true);

    const updatedGrid = regenerateLifecycleWrapGridAround(
      gridInit as (0 | 1)[][]
    );
    // these should be live
    // expect(updatedGrid[2][2] === 1).toBe(true);
    expect(updatedGrid[1][0] === 1).toBe(true);
    expect(updatedGrid[1][2] === 1).toBe(true);
    expect(updatedGrid[2][0] === 1).toBe(true);
    expect(updatedGrid[2][2] === 1).toBe(true);
  });
});

describe("lights out algo", () => {
  test("clicked cell should invert itself and the four neighbouring cells with an adjacent edge", () => {
    let chanceOfLife = 0;
    // 5x5 grid of deadcells
    const gridResult = generateRandomTiles(5, 5, chanceOfLife);
    //
    let updatedGrid = lightsOutGridGame(gridResult, 2, 2);
    expect(updatedGrid[2][2] === 1).toBe(true);
    expect(updatedGrid[2][2 - 1] === 1).toBe(true);
    expect(updatedGrid[2][2 + 1] === 1).toBe(true);
    expect(updatedGrid[2 - 1][2] === 1).toBe(true);
    expect(updatedGrid[2 + 1][2] === 1).toBe(true);
    // asset on the second click turns them off
    updatedGrid = lightsOutGridGame(updatedGrid, 2, 2);
    expect(updatedGrid[2][2] === 0).toBe(true);
    expect(updatedGrid[2][2 - 1] === 0).toBe(true);
    expect(updatedGrid[2][2 + 1] === 0).toBe(true);
    expect(updatedGrid[2 - 1][2] === 0).toBe(true);
    expect(updatedGrid[2 + 1][2] === 0).toBe(true);
    //
  });

  test("clicked corner cell should invert cells and the four neighbouring cells with an adjacent edge that exist", () => {
    const gridInit = [
      [0, 1, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      //
    ] as (0 | 1)[][];

    let updatedGrid = lightsOutGridGame(gridInit, 0, 0);
    expect(updatedGrid[0][0] === 1).toBe(true);

    // these should be inverted to 0
    expect(updatedGrid[0][1] === 0).toBe(true);
    expect(updatedGrid[1][0] === 0).toBe(true);
  });
});
