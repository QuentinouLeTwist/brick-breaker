import {BrickInterface} from './BrickInterface';
import {SMALL_BRICK} from '../../config/bricks';

export default class SmallBrick implements BrickInterface {
  imageRef: string;
  width: number;
  height: number;
  initialX: number;
  initialY: number;

  constructor(x: number, y: number) {
    this.imageRef = SMALL_BRICK.imageRef;
    this.width = SMALL_BRICK.width;
    this.height = SMALL_BRICK.height;
    this.initialX = x;
    this.initialY = y;
  }
}
