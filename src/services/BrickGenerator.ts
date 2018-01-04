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

  generateRowsOfBricks(numberOfRows: number) {
    return BrickGenerator.getRowsCoordsY(numberOfRows).map((y) => this.createRowOfBricks(y));
  }

  private static getRowsCoordsY(numberOfRows: number) {
    let coordsY = [];
    for (let i = 0; i < numberOfRows; i++) {
      coordsY.push(Config.GAME_CONFIG.paddingRowsTop + (i * (Config.GAME_CONFIG.rowHeight + Config.GAME_CONFIG.paddingRowsBottom)));
    }
    return coordsY;
  }

  private createRowOfBricks(y: number) {
    let rowWidth = 5;
    let bricks = [];
    while ((rowWidth + brickSizes.small.width + 5) < Config.PHASER_CONFIG.width) {
      bricks.push(this.createBrick(rowWidth, y));
      rowWidth += brickSizes.small.width + 5;
    }

    return bricks;
  }

  private createBrick(x: number, y: number) {
    return new SmallBrick(x, y);
  }
}
