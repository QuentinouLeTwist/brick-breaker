import {BALL_CONFIG} from '../../config/ball';
import SpriteObject from '../SpriteObject';

export default class Ball extends SpriteObject {
  isClickable: boolean = false;
  isMovable: boolean = true;
  isVisible: boolean = true;

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

    this.sprite = this.context.game.add.sprite(x, y, 'ball');
    this.context.game.physics.arcade.enable(this.sprite);

    this.sprite.anchor.setTo(0.5);
    this.sprite.body.enable = true;
    this.sprite.body.collideWorldBounds = true;
    this.sprite.body.bounce.setTo(1);
    this.sprite.animations.play('spin');
    this.sprite.data.isMoving = false;

    this.setVisibility(this.isVisible);

    return this.sprite;
  }

  release(callback?: Function) {
    if (!this.sprite.data.isMoving) {
      this.sprite.data.isMoving = true;
      this.sprite.body.velocity.x = BALL_CONFIG.velocityX;
      this.sprite.body.velocity.y = BALL_CONFIG.velocityY;
      callback();
    }
  }

  isMoving() {
    return this.sprite.data.isMoving;
  }

}
