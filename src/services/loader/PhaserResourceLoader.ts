import {ResourceLoader} from './ResourceLoader';

export default class PhaserResourceLoader implements ResourceLoader {
  private game: Phaser.Game;

  constructor(game: Phaser.Game) {
    this.game = game;
  }

  load(asset: any) {}

  loadImage(reference: string, path: string) {
    this.game.load.image(reference, path);
  }
}