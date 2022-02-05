//
import { generateRandomTiles, invertClickedCell } from "./utils"
//
describe('generate grid function 2darray [[row],[col]]', () => {
  test('should create an 2d array of pecentage weighted random true||false', () => {
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

