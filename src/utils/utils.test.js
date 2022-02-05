//
import { generateRandomTiles, invertClickedCell, regenerateLifecycle } from "./utils"
//
describe('generate grid function 2darray [[row],[col]]', () => {
  test('should create an 2d array of pecentage weighted random 1||0', () => {
    // 
    const gridResult = generateRandomTiles();
    /**
     * [ [x,x],[x,x]]
     */
    expect(gridResult.length === 2).toBe(true)
    expect(gridResult[0].length === 2).toBe(true)
    expect(gridResult[1].length === 2).toBe(true)
  })
  test('should create an 2d array of dead (false) cells', () => {
    // 
    const gridResult = generateRandomTiles(2, 2, 0);
    /**
     * [ [0,0],[0,0]]
     */
    expect(gridResult.length === 2).toBe(true)
    expect(gridResult[0][0] === 0).toBe(true)
    expect(gridResult[0][1] === 0).toBe(true)
    expect(gridResult[1][0] === 0).toBe(true)
    expect(gridResult[1][0] === 0).toBe(true)
  })
  test('should create an 2d array of alive (true) cells', () => {
    // 
    const gridResult = generateRandomTiles(2, 2, 2);
    /**
     * [ [1,1],[1,1] ]
     */
    expect(gridResult.length === 2).toBe(true)
    expect(gridResult.length === 2).toBe(true)
    expect(gridResult[0][0] === 1).toBe(true)
    expect(gridResult[0][1] === 1).toBe(true)
    expect(gridResult[1][0] === 1).toBe(true)
    expect(gridResult[1][0] === 1).toBe(true)
  })
  test('should invert cell', () => {
    // 
    const gridResult = generateRandomTiles(2, 2, 2);
    expect(gridResult.length === 2).toBe(true)
    expect(gridResult[0][0] === 1).toBe(true)
    expect(gridResult[0][1] === 1).toBe(true)
    expect(gridResult[1][0] === 1).toBe(true)
    expect(gridResult[1][0] === 1).toBe(true)
    /**
     * [ [1,1],[1,1] ]
     */
    const gridAfterClick = invertClickedCell(gridResult, 0, 0)
    expect(gridAfterClick[0][0] === 0).toBe(true)
  })
  // test('should invert value of cell when clicked', () => {
  //   // 
  //   const gridResult = generateRandomTiles(2, 2, 2);
  //   /**
  //    * [ [1,1],[1,1] ]
  //    */
  //   expect(gridResult.length === 4).toBe(true)
  // })
})

describe("gol algo ", () => {
  // ASSERT
  //
  test('dead cell with no neighbours should remain dead 0', () => {
    /*
    [
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ]
    */
    const gridInit = generateRandomTiles(3, 3, 0);
    // middle cell
    const cell = gridInit[1][1]
    expect(cell === 0).toBe(true)

    const updatedGrid = regenerateLifecycle(gridInit);
    const updatedCell = updatedGrid[1][1]
    expect(updatedCell === 0).toBe(true)
  })
})

