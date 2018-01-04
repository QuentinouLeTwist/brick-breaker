import * as Config from '../constants';
import SmallBrick from '../objects/brick/SmallBrick';

const brickSizes = {
  xsmall: Config.XSMALL_BRICK,
  small: Config.SMALL_BRICK,
  mid: Config.MEDIUM_BRICK,
  big: Config.BIG_BRICK
};

export default class BrickGenerator {
  // private brickSizes: Array<any>;
  private game: Phaser.Game;

  constructor(game: Phaser.Game) {
    this.game = game;
    // this.brickSizes = brickSizes;
  }

  generateRowsOfBricks(numberOfRows: number, xStart: number, yStart: number) {
    return [5, 35, 65].map((y) => this.createRawOfBricks(y));
  }

  private createRawOfBricks(y: number) {
    let rowWidth = 5;
    let bricks = [];
    while ((rowWidth + brickSizes.small.width + 5) < Config.PHASER_CONFIG.width) {
      bricks.push(this.createBrick(rowWidth, y));
      rowWidth += brickSizes.small.width + 5;
      console.log(rowWidth);
    }

    return bricks;
  }

  private createBrick(x: number, y: number) {
    return new SmallBrick(x, y);
  }
}
