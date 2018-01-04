require('phaser');

import { GAME_CONFIG, SMALL_RECTANGLE } from '../constants';

export default class Game extends Phaser.State {
  private lines: Array<{}> = [];

  preload() {
    this.game.load.image('small_rectangle', 'assets/images/small_rectangle.png');
    this.game.load.image('mid_rectangle', 'assets/images/mid_rectangle.png');
    this.game.load.image('big_rectangle', 'assets/images/big_rectangle.png');
  }

  create() {
    const line = this.generateLineOfRectangles();
    this.lines.push(line);
  }

  render() {

  }

  /**
   * @returns {{lineRectangles: Array}}
   */
  private generateLineOfRectangles() {
    let lineWidth = 0;
    let line = [];
    while (lineWidth + 5 < GAME_CONFIG.width) {
      line.push(this.game.add.sprite(lineWidth, 5, 'small_rectangle'));
      lineWidth += SMALL_RECTANGLE.width;
    }

    return line;
  }
}
