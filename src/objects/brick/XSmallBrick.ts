import {IBrick} from './IBrick';
import {XSMALL_BRICK} from '../../constants';

export default class XSmallBrick implements IBrick {
  image: string;
  width: number;
  height: number;
  initialX: number;
  initialY: number;

  constructor(x: number, y: number) {
    this.image = XSMALL_BRICK.imageRef;
    this.width = XSMALL_BRICK.width;
    this.height = XSMALL_BRICK.height;
    this.initialX = x;
    this.initialY = y;
  }
}