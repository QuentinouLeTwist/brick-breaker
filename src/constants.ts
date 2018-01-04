export const PHASER_CONFIG = {
  width:           600,
  height:          400,
  renderer:        Phaser.AUTO,
  parent:          '',
  resolution:      1,
  forceSetTimeOut: false
};
export const GAME_CONFIG = {
  numberRowsOfBricks: 3,
  firstRowX: 5,
  firstRowY: 5,
  rowHeight: 25
};
export const XSMALL_BRICK = {
  width: 100,
  height: 25,
  imageRef: 'brick.xsmall',
  imageSrc: 'assets/images/xsmall_brick.png'
};
export const SMALL_BRICK = {
  width: 100,
  height: 25,
  imageRef: 'brick.small',
  imageSrc: 'assets/images/small_brick.png'
};
export const MEDIUM_BRICK = {
  width: 150,
  height: 25,
  imageRef: 'brick.mid',
  imageSrc: 'assets/images/mid_brick.png'
};
export const BIG_BRICK = {
  width: 200,
  height: 25,
  imageRef: 'brick.big',
  imageSrc: 'assets/images/big_brick.png'
};

export default {
  GAME_CONFIG: PHASER_CONFIG,
  SMALL_BRICK,
  MID_BRICK: MEDIUM_BRICK,
  BIG_BRICK
};
