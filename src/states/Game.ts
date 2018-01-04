require('phaser');

import * as Config from '../constants';
import BrickGenerator from '../services/BrickGenerator';
import BrickResourceLoader from '../services/BrickResourceLoader';
import PhaserResourceLoader from '../services/loader/PhaserResourceLoader';
import { IBrick } from '../objects/brick/IBrick';

export default class Game extends Phaser.State {

  private brickSizes: Array<any> = [Config.SMALL_BRICK, Config.SMALL_BRICK, Config.MID_BRICK, Config.BIG_BRICK];

  private rawsOfBricks: Array<Array<IBrick>> = [];

  preload() {
    const phaserResourceLoader = new PhaserResourceLoader(this.game);
    this.loadBrickResources(phaserResourceLoader);
  }

  create() {
    this.drawBricks();
  }

  render() {

  }

  private drawBricks() {
    const brickGenerator = new BrickGenerator(this.game);
    this.rawsOfBricks = brickGenerator.generateBricks(3, 5, 5);
    this.rawsOfBricks.forEach((raw: Array<any>) => {
      raw.forEach((brick: IBrick) => {
        this.game.add.sprite(brick.initialX, brick.initialY, brick.image);
      });
    }, this);
  }

  private loadBrickResources(phaserResourceLoader: PhaserResourceLoader) {
    const brickResourceLoader = new BrickResourceLoader(phaserResourceLoader);
    brickResourceLoader.load(this.brickSizes);
  }
}
