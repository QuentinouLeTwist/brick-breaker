export interface SpriteObjectInterface {
  isClickable: boolean;
  isMovable: boolean;
  isVisible: boolean;
  sprite: Phaser.Sprite;
  create();
  kill();
  setVisibility(visible: boolean);
}
