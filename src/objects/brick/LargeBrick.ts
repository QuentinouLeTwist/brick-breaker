import {Brick} from './Brick';
import {LARGE_BRICK} from '../../config/bricks_config';

export default class LargeBrick implements Brick {
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