import { Coordinate } from "../type/type"

export const getPoints = (coordinates: Coordinate[]) => {
  return coordinates.map(([x, y]) => `${x},${y}`).join(" ")
}
