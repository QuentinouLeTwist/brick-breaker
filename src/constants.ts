export const GAME_CONFIG = {
  width:           600,
  height:          400,
  renderer:        Phaser.AUTO,
  parent:          '',
  resolution:      1,
  forceSetTimeOut: false
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
export const MID_BRICK = {
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
  GAME_CONFIG,
  SMALL_BRICK,
  MID_BRICK,
  BIG_BRICK
};
