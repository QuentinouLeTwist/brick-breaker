import {BRICK_COMMON_CONFIG} from './config/bricks';

export const PHASER_CONFIG = {
  width:           800,
  height:          600,
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
