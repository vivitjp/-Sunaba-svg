//--------------------------------------------
// Path: Line
//--------------------------------------------

type Line = {
  d1: number[] //x,y
  d2: number[] //x,y
  abs?: boolean //Absolute Coordinate 絶対 vs 相対
}
export const line = ({ d1, d2, abs = true }: Line) => {
  return `M${d1[0]},${d1[1]} ${abs ? "L" : "l"}${d2[0]},${d2[1]}`
}
