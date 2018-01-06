import {ResourceLoader} from '../loader/ResourceLoader';

export default class BrickResourceLoader {
  private loader;

  constructor(loader: ResourceLoader) {
    this.loader = loader;
  }

  load(brickSizesConfig: Array<any>) {
    brickSizesConfig.forEach((config) => {
      this.loader.loadImage(config.imageRef, config.imageSrc);
    });
  }
}
