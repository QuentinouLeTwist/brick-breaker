require('phaser');

import * as Config from '../constants';
import BrickGenerator from '../services/BrickGenerator';
import BrickResourceLoader from '../services/BrickResourceLoader';
import PhaserResourceLoader from '../services/loader/PhaserResourceLoader';
import { Brick } from '../objects/brick/Brick';

export default class Game extends Phaser.State {

  private rowsOfBricks: Array<Array<Brick>> = [];

  preload() {
    const phaserResourceLoader = new PhaserResourceLoader(this.game);
    this.loadBrickResources(phaserResourceLoader);
    this.game.load.image('breakerBar', 'assets/images/breakerBar.png');
  }

  create() {
    this.generateBricks();
    const ball = this.game.add.graphics(0, 0);
    ball.beginFill(0xFF0000, 1);
    ball.drawCircle(300, 300, 20);
    this.game.add.sprite(200, 360, 'breakerBar');
  }

  render() {

  }

  private loadBrickResources(phaserResourceLoader: PhaserResourceLoader) {
    const brickResourceLoader = new BrickResourceLoader(phaserResourceLoader);
    brickResourceLoader.load(Config.GAME_CONFIG.brick.sizes);
  }

  private generateBricks() {
    const brickGenerator = new BrickGenerator(this.game);
    this.rowsOfBricks = brickGenerator.generateRowsOfBricks(Config.GAME_CONFIG.brick.numberRowsOfBricks);
    console.log('rows', this.rowsOfBricks);
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
