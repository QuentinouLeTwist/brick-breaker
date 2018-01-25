import {BrickInterface} from './BrickInterface';
import {LARGE_BRICK} from '../../config/bricks';

export default class LargeBrick implements BrickInterface {
  imageRef: string;
  width: number;
  height: number;
  initialX: number;
  initialY: number;

  constructor(x: number, y: number) {
    this.imageRef = LARGE_BRICK.imageRef;
    this.width = LARGE_BRICK.width;
    this.height = LARGE_BRICK.height;
    this.initialX = x;
    this.initialY = y;
  }
}
