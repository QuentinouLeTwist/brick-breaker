import {Brick} from './Brick';
import {BIG_BRICK} from '../../config/bricks_config';

export default class BigBrick implements Brick {
  imageRef: string;
  width: number;
  height: number;
  initialX: number;
  initialY: number;

  constructor(x: number, y: number) {
    this.imageRef = BIG_BRICK.imageRef;
    this.width = BIG_BRICK.width;
    this.height = BIG_BRICK.height;
    this.initialX = x;
    this.initialY = y;
  }
}