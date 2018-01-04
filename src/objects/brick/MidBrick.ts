import {Brick} from './Brick';
import {MID_BRICK} from '../../constants';

export default class MidBrick implements Brick {
  imageRef: string;
  width: number;
  height: number;
  initialX: number;
  initialY: number;

  constructor(x: number, y: number) {
    this.imageRef = MID_BRICK.imageRef;
    this.width = MID_BRICK.width;
    this.height = MID_BRICK.height;
    this.initialX = x;
    this.initialY = y;
  }
}