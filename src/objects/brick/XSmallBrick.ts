import {BrickInterface} from './BrickInterface';
import {XSMALL_BRICK} from '../../config/bricks';

export default class XSmallBrick implements BrickInterface {
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
