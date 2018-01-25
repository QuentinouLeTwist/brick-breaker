import {ResourceLoader} from './ResourceLoader';

export default class PhaserResourceLoader implements ResourceLoader {
  private context: Phaser.State;

  constructor(context: Phaser.State) {
    this.context = context;
  }

  load(asset: any) {}

  loadAssets(assets: Array<{}>) {
    assets.forEach((asset: any) => {
      this.loadImage(asset.id, asset.path);
    });
  }

  loadImage(reference: string, path: string) {
    this.context.game.load.image(reference, path);
  }
}
