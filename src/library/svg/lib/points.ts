import { Coordinate } from "../type/type"

export const getPoints = (coordinates: Coordinate[], ratio: number = 1) => {
  return coordinates.map(([x, y]) => `${x * ratio},${y * ratio}`).join(" ")
}
