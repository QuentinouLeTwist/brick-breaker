// @todo use a BrickGenerationConfig service to clean up
// @todo create bricks randomly in the row width defined

import * as Config from '../config/bricks_config';
import XXSmallBrick from '../objects/brick/XXSmallBrick';
import XSmallBrick from '../objects/brick/XSmallBrick';
import SmallBrick from '../objects/brick/SmallBrick';
import MediumBrick from '../objects/brick/MediumBrick';
import LargeBrick from '../objects/brick/LargeBrick';
import XLargeBrick from '../objects/brick/XLargeBrick';

const commonConfig = Config.BRICK_COMMON_CONFIG;

enum BrickSizes {
  xxsmall = 0,
  xsmall = 1,
  small = 2,
  medium = 3,
  large = 4,
  xlarge = 5
}

export default class BrickGenerator {
  private game: Phaser.Game;
  private rowWidth: number;
  private rowHeight: number;
  private paddingRowTop: number;
  private paddingRowBottom: number;

  constructor(game: Phaser.Game) {
    this.game = game;
    this.rowWidth = commonConfig.rowWidth;
    this.rowHeight = commonConfig.rowHeight;
    this.paddingRowTop = commonConfig.paddingRowTop;
    this.paddingRowBottom = commonConfig.paddingRowBottom;
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
    let totalBricksWidth = 5;
    let brickPadding = 5;
    let bricks = [];
    let counter = 0;

    while (totalBricksWidth < this.rowWidth && counter < 30) {
      const randomSize = Phaser.Math.between(0, commonConfig.sizes.length - 1);
      const brickConfig = commonConfig.sizes[randomSize];
      if (totalBricksWidth + brickConfig.width < this.rowWidth) {
        bricks.push(this.createBrick(randomSize, totalBricksWidth, y));
        totalBricksWidth += brickConfig.width + brickPadding;
      }
      counter++;
    }

    console.log(bricks);
    return bricks;
  }

  private createBrick(size: string|number, x: number, y: number) {
    switch (size) {
      default:
      case BrickSizes.xxsmall:
        console.log('XSMALL');
        return new XXSmallBrick(x, y);
      case BrickSizes.xsmall:
        console.log('XSMALL');
        return new XSmallBrick(x, y);
      case BrickSizes.small:
        console.log('SMALL');
        return new SmallBrick(x, y);
      case BrickSizes.medium:
        console.log('MEDIUM');
        return new MediumBrick(x, y);
      case BrickSizes.large:
        console.log('BIG');
        return new LargeBrick(x, y);
      case BrickSizes.xlarge:
        console.log('BIG');
        return new XLargeBrick(x, y);
    }
  }
}
