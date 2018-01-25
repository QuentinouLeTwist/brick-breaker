import {BrickInterface} from './BrickInterface';
import {XXSMALL_BRICK} from '../../config/bricks';

export default class XXSmallBrick implements BrickInterface {
  imageRef: string;
  width: number;
  height: number;
  initialX: number;
  initialY: number;

  constructor(x: number, y: number) {
    this.imageRef = XXSMALL_BRICK.imageRef;
    this.width = XXSMALL_BRICK.width;
    this.height = XXSMALL_BRICK.height;
    this.initialX = x;
    this.initialY = y;
  }
}
