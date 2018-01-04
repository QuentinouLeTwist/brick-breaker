require('phaser');

import * as Config from '../constants';
import BrickGenerator from '../services/BrickGenerator';
import BrickResourceLoader from '../services/BrickResourceLoader';
import PhaserResourceLoader from '../services/loader/PhaserResourceLoader';
import { Brick } from '../objects/brick/Brick';

export default class Game extends Phaser.State {

  private brickSizes: Array<{}> = [Config.XSMALL_BRICK, Config.SMALL_BRICK, Config.MEDIUM_BRICK, Config.BIG_BRICK];

  private rowsOfBricks: Array<Array<Brick>> = [];

  preload() {
    const phaserResourceLoader = new PhaserResourceLoader(this.game);
    this.loadBrickResources(phaserResourceLoader);
  }

  create() {
    this.generateBricks();
  }

  render() {

  }

  private loadBrickResources(phaserResourceLoader: PhaserResourceLoader) {
    const brickResourceLoader = new BrickResourceLoader(phaserResourceLoader);
    brickResourceLoader.load(this.brickSizes);
  }

  private generateBricks() {
    const gameConfig = Config.GAME_CONFIG;
    const brickGenerator = new BrickGenerator(this.game, gameConfig.rowWidth, gameConfig.rowHeight, gameConfig.paddingRowTop, gameConfig.paddingRowBottom);
    this.rowsOfBricks = brickGenerator.generateRowsOfBricks(Config.GAME_CONFIG.numberRowsOfBricks);
    this.drawBricks();
  }

  private drawBricks() {
    this.rowsOfBricks.forEach((row: Array<any>) => {
      row.forEach((brick: Brick) => {
        this.game.add.sprite(brick.initialX, brick.initialY, brick.imageRef);
      });
    }, this);
  }
}
