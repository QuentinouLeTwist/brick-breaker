import {SpriteObjectInterface} from './SpriteObjectInterface';

export default class SpriteObject implements SpriteObjectInterface {
  isClickable: boolean;
  isMovable: boolean;
  isVisible: boolean;
  sprite: Phaser.Sprite;
  context: Phaser.State;

  constructor(context: Phaser.State) {
    this.context = context;
  }

  create(x?: number, y?: number) {
  }

  kill() {
    this.sprite.kill();
  }

  setVisibility(visible: boolean) {
    this.sprite.visible = visible;
  }
}
