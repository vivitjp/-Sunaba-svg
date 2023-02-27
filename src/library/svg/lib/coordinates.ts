import { LineCoordinate } from "../type/type"

export const getCoordinateByRatio = (
  coordinate: LineCoordinate,
  ratio: number = 1
) => {
  const { d1, d2 } = coordinate
  return {
    d1: [d1?.[0] * ratio, d1?.[1] * ratio],
    d2: [d2?.[0] * ratio, d2?.[1] * ratio],
  }
}

export const getCoordinatesByRatio = (
  coordinates: LineCoordinate[],
  ratio: number = 1
) => {
  return coordinates.map(({ d1, d2 }) => ({
    d1: [d1?.[0] * ratio, d1?.[1] * ratio],
    d2: [d2?.[0] * ratio, d2?.[1] * ratio],
  }))
}
