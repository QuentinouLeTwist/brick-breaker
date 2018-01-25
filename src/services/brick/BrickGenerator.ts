// @todo use BrickFactory service for creating brick

import * as Config from '../../config/bricks';

const commonConfig = Config.BRICK_COMMON_CONFIG;

export default class BrickGenerator {
  private rowWidth: number;
  private rowHeight: number;
  private paddingRowTop: number;
  private paddingRowBottom: number;

  constructor() {
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
    let totalBricksWidth = 25;
    const brickPadding = 10;
    let bricks = [];
    let counter = 0;

    while (totalBricksWidth < this.rowWidth && counter < 30) {
      // const randomBrickSize = this.getBrickSizeRandomly();
      const brickConfig = commonConfig.sizes[3];
      if (totalBricksWidth + brickConfig.width < this.rowWidth) {
        bricks.push({
          x: totalBricksWidth,
          y: y
        });
        totalBricksWidth += brickConfig.width + brickPadding;
      }
      counter++;
    }

    return bricks;
  }

  /*
  private getBrickSizeRandomly() {
    return Phaser.Math.between(0, commonConfig.sizes.length - 1);
  }
  */
}
