import {Brick} from './Brick';
import {MEDIUM_BRICK} from '../../config/bricks_config';

export default class MediumBrick implements Brick {
  imageRef: string;
  width: number;
  height: number;
  initialX: number;
  initialY: number;

  constructor(x: number, y: number) {
    this.imageRef = MEDIUM_BRICK.imageRef;
    this.width = MEDIUM_BRICK.width;
    this.height = MEDIUM_BRICK.height;
    this.initialX = x;
    this.initialY = y;
  }
}