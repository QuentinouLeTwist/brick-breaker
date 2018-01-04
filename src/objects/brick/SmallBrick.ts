import {IBrick} from './IBrick';
import {SMALL_BRICK} from '../../constants';

export default class SmallBrick implements IBrick {
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