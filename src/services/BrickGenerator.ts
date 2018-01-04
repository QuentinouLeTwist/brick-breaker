import * as Config from '../constants';
import SmallBrick from '../objects/brick/SmallBrick';

const brickSizes = {
  xsmall: Config.XSMALL_BRICK,
  small: Config.SMALL_BRICK,
  mid: Config.MEDIUM_BRICK,
  big: Config.BIG_BRICK
};

export default class BrickGenerator {
  private game: Phaser.Game;
  private rowWidth: number;
  private rowHeight: number;
  private paddingRowTop: number;
  private paddingRowBottom: number;

  constructor(
      game: Phaser.Game,
      rowWidth: number,
      rowHeight: number,
      paddingRowsTop: number,
      paddingRowsBottom: number
  ) {
    this.game = game;
    this.rowWidth = rowWidth;
    this.rowHeight = rowHeight;
    this.paddingRowTop = paddingRowsTop;
    this.paddingRowBottom = paddingRowsBottom;
  }

  generateRowsOfBricks(numberOfRows: number) {
    return this.getRowsCoordsY(numberOfRows).map((y) => this.createRowOfBricks(y));
  }

  private getRowsCoordsY(numberOfRows: number) {
    let coordsY = [];
    for (let i = 0; i < numberOfRows; i++) {
      coordsY.push(this.paddingRowTop + (i * (this.rowHeight + this.paddingRowBottom)));
    }
    return coordsY;
  }

  private createRowOfBricks(y: number) {
    let brickWidth = 5;
    let bricks = [];
    while ((brickWidth + brickSizes.small.width + 5) < this.rowWidth) {
      bricks.push(this.createBrick(brickWidth, y));
      brickWidth += brickSizes.small.width + 5;
    }

    return bricks;
  }

  private createBrick(x: number, y: number) {
    return new SmallBrick(x, y);
  }
}
