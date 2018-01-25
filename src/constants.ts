import {BRICK_COMMON_CONFIG} from './config/bricks';

export const PHASER_CONFIG = {
  width:           600,
  height:          400,
  renderer:        Phaser.AUTO,
  parent:          '',
  resolution:      1,
  forceSetTimeOut: false
};
export const GAME_CONFIG = {
  brick: BRICK_COMMON_CONFIG
};

export default {
  PHASER_CONFIG,
  GAME_CONFIG
};
