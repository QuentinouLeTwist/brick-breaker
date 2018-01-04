import {IResourceLoader} from './IResourceLoader';

export default class PhaserResourceLoader implements IResourceLoader {
  private game: Phaser.Game;

  constructor(game: Phaser.Game) {
    this.game = game;
  }

  load(asset: any) {}

  loadImage(reference: string, path: string) {
    this.game.load.image(reference, path);
  }
}