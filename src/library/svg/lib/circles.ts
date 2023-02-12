//--------------------------------------------
// Path: 円
//--------------------------------------------

type CircleByRadius = {
  x: number;
  y: number;
  R: number;
};

//半径による円
export const circleByRadius = ({ x, y, R }: CircleByRadius) => {
  return `M ${x},${y - R} a ${R},${R} 0 1,1 0,${R * 2} a ${R},${R} 0 1,1 0,-${
    R * 2
  }z`;
};
