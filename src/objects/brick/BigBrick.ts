import {IBrick} from './IBrick';
import {BIG_BRICK} from '../../constants';

export default class BigBrick implements IBrick {
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