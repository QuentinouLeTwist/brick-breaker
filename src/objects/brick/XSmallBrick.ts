import {Brick} from './Brick';
import {XSMALL_BRICK} from '../../config/bricks_config';

export default class XSmallBrick implements Brick {
  imageRef: string;
  width: number;
  height: number;
  initialX: number;
  initialY: number;

  constructor(x: number, y: number) {
    this.imageRef = XSMALL_BRICK.imageRef;
    this.width = XSMALL_BRICK.width;
    this.height = XSMALL_BRICK.height;
    this.initialX = x;
    this.initialY = y;
  }
}