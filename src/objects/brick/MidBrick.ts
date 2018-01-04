import {IBrick} from './IBrick';
import {MID_BRICK} from '../../constants';

export default class MidBrick implements IBrick {
  image: string;
  width: number;
  height: number;
  initialX: number;
  initialY: number;

  constructor(x: number, y: number) {
    this.image = MID_BRICK.imageRef;
    this.width = MID_BRICK.width;
    this.height = MID_BRICK.height;
    this.initialX = x;
    this.initialY = y;
  }
}