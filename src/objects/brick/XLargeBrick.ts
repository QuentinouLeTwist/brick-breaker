import {BrickInterface} from './BrickInterface';
import {XLARGE_BRICK} from '../../config/bricks';

export default class XLargeBrick implements BrickInterface {
  imageRef: string;
  width: number;
  height: number;
  initialX: number;
  initialY: number;

  constructor(x: number, y: number) {
    this.imageRef = XLARGE_BRICK.imageRef;
    this.width = XLARGE_BRICK.width;
    this.height = XLARGE_BRICK.height;
    this.initialX = x;
    this.initialY = y;
  }
}
