import * as Config from '../constants';
import SmallBrick from '../objects/brick/SmallBrick';

const brickSizes = {
  xsmall: Config.XSMALL_BRICK,
  small: Config.SMALL_BRICK,
  mid: Config.MID_BRICK,
  big: Config.BIG_BRICK
};

export default class BrickGenerator {
  // private brickSizes: Array<any>;
  private game: Phaser.Game;

  constructor(game: Phaser.Game) {
    this.game = game;
    // this.brickSizes = brickSizes;
  }

  generateBricks(numberOfRaws: number, xStart: number, yStart: number) {
    let rawsOfBricks = [];
    const coordsY = [5, 35, 65];
    for (let y = 0; y < numberOfRaws; y++) {
      rawsOfBricks.push(this.createRawOfBricks(coordsY[y]));
    }
    return rawsOfBricks;
  }

  // private generateRaws();

  private createRawOfBricks(y: number) {
    let rawWidth = 5;
    let bricks = [];
    while ((rawWidth + brickSizes.small.width + 5) < Config.GAME_CONFIG.width) {
      bricks.push(this.createBrick(rawWidth, y));
      rawWidth += brickSizes.small.width + 5;
      console.log(rawWidth);
    }

    return bricks;
  }

  private createBrick(x: number, y: number) {
    return new SmallBrick(x, y);
  }
}
