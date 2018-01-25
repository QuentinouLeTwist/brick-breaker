import SpriteObject from '../SpriteObject';

export default class Paddle extends SpriteObject {
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

    this.sprite = this.context.game.add.sprite(x, y, 'paddle');
    this.context.game.physics.arcade.enable(this.sprite);

    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.body.enable = true;
    this.sprite.body.collideWorldBounds = true;
    this.sprite.body.immovable = true;
    this.sprite.body.bounce.setTo(1);

    this.setVisibility(this.isVisible);

    return this.sprite;
  }
}
