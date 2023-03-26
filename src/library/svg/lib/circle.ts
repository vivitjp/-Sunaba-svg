//--------------------------------------------
// Path: 円
//--------------------------------------------

type CircleByRadius = {
  x: number
  y: number
  R: number
}

//半径による円
export const circleByRadius = ({ x, y, R }: CircleByRadius) => {
  return (
    `M ${x},${y - R} ` +
    `a ${R},${R} 0 1,1 0,${R * 2} ` +
    `a ${R},${R} 0 1,1 0,-${R * 2}z`
  )
}

//a{水平半径px},{水直半径px} {傾き} {1:長方向/0:短方向},{1:時計回/0:反時計回} {終点X座標},{終点Y座標}
