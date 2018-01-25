import SpriteObject from '../SpriteObject';
import {ButtonObjectInterface} from './ButtonObjectInterface';

export default class RestartButton extends SpriteObject implements ButtonObjectInterface {
  disable: boolean = false;
  isClickable: boolean = true;
  isMovable: boolean = false;
  isVisible: boolean = false;

  constructor(context: Phaser.State) {
    super(context);
  }

  create(x?: number, y?: number) {
    if (x === undefined) {
      x = this.context.game.world.centerX;
    }
    if (y === undefined) {
      y = this.context.game.world.centerY;
    }

    this.sprite = this.context.game.add.sprite(x, y, 'restartBtn');
    this.sprite.anchor.setTo(0.5, 0.5);

    this.setVisibility(this.isVisible);
    return this.sprite;
  }

  onClick() {

  }

}
