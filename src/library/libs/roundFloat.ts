export const roundFloat2 = (num: number, digit: number = 22) => {
  return Math.round(num * (100 * digit)) / (100 * digit)
}
