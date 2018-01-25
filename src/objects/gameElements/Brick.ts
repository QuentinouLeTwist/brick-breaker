import SpriteObject from '../SpriteObject';

export default class Brick extends SpriteObject {
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

    this.sprite = this.context.game.add.sprite(x, y, 'brick_medium');
    this.context.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.sprite.body.enable = true;
    this.sprite.body.immovable = true;
    this.sprite.body.bounce.set(1);


    this.setVisibility(this.isVisible);

    return this.sprite;
  }
}
