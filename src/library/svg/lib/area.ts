//--------------------------------------------
// Path: エリア
//--------------------------------------------
//正方形
type Square = {
  x: number;
  y: number;
  w: number;
};
export const square = ({ x, y, w }: Square) => {
  return `M ${x},${y} h${w} v${w} h-${w}z`;
};

//長方形
type Rectangle = {
  x: number;
  y: number;
  w: number;
  h: number;
};

export const rectangle = ({ x, y, w, h }: Rectangle) => {
  return `M ${x},${y} h${w} v${h} h-${w}z`;
};
